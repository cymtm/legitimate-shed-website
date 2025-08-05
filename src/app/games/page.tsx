import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { games } from "@/lib/data";
import { FilePlus2 } from "lucide-react";

export default function GamesPage() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Web Game Releases</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Click on a game to play it directly in your browser.
        </p>
      </div>

      {games.length > 0 ? (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Link href={`/games/${game.slug}`} key={game.slug} className="group block">
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-primary/40 group-hover:shadow-2xl group-hover:-translate-y-2 bg-card">
                <div className="overflow-hidden">
                  <Image
                    src={game.imageUrl}
                    alt={game.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={game.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{game.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="p-4 bg-muted rounded-full">
                <FilePlus2 className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold font-headline">No Games Yet</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
                It looks like you haven&apos;t added any games. To add a game, open the <code className="font-mono bg-muted text-foreground p-1 rounded-sm">src/lib/data.ts</code> file and add a new game object to the `games` array.
            </p>
        </div>
      )}
    </div>
  );
}
