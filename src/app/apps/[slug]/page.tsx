
import { apps } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AppWindow } from "lucide-react";

export async function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
           <Image
            src={app.imageUrl}
            alt={app.title}
            width={800}
            height={450}
            className="w-full object-cover"
            data-ai-hint={app.imageHint}
          />
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tight font-headline">{app.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CardDescription className="text-lg text-muted-foreground">{app.description}</CardDescription>
            
             <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center font-headline">
                    <AppWindow className="mr-3 text-primary" />
                    Application Features
                </h3>
                <p className="text-muted-foreground">
                    This application is currently a prototype. A fully functional version is coming soon.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" disabled>
                    Launch App (Coming Soon)
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/apps">Back to Apps</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
