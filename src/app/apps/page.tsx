import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { apps } from "@/lib/data";
import { FilePlus2 } from "lucide-react";

export default function AppsPage() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Web App Releases</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Click on an app to use it directly on our site.
        </p>
      </div>

      {apps.length > 0 ? (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link href={`/apps/${app.slug}`} key={app.slug} className="group block">
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-primary/40 group-hover:shadow-2xl group-hover:-translate-y-2 bg-card">
                <div className="overflow-hidden">
                  <Image
                    src={app.imageUrl}
                    alt={app.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={app.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{app.description}</CardDescription>
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
            <h2 className="mt-6 text-2xl font-semibold font-headline">No Apps Yet</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
                It looks like you haven't added any apps. To add an app, open the <code className="font-mono bg-muted text-foreground p-1 rounded-sm">src/lib/data.ts</code> file and add a new app object to the `apps` array.
            </p>
        </div>
      )}
    </div>
  );
}
