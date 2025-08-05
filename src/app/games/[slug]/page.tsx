
import { games } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.title}
            width={800}
            height={450}
            className="w-full object-cover"
            data-ai-hint={game.imageHint}
          />
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tight font-headline">{game.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CardDescription className="text-lg text-muted-foreground">{game.description}</CardDescription>
            
            <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center font-headline">
                    <Gamepad2 className="mr-3 text-primary" />
                    Gameplay Details
                </h3>
                <p className="text-muted-foreground">
                    This interactive experience is currently under development. A fully playable version is coming soon.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="flex-1" disabled>
                    Play Game (Coming Soon)
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/games">Back to Games</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
