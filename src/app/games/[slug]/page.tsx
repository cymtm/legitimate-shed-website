'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { games } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export default function GamePage({ params }: GamePageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Unwrap the params Promise
  const { slug } = React.use(params);
  
  const game = games.find(g => g.slug === slug);
  
  if (!game) {
    notFound();
  }

  // Use the gameUrl directly from the game data
  const gameUrl = game.gameUrl;

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="container py-12">
      <div className="mb-6">
        <Link href="/games">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Games
          </Button>
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline mb-4">
          {game.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {game.description}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Game Window</CardTitle>
          <Button asChild size="sm" variant="outline">
            <a href={gameUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </a>
          </Button>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="min-h-[600px] flex items-center justify-center border border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Game Load Error</h3>
                <p className="text-muted-foreground mb-4">
                  Unable to load the game directly. Please try opening it in a new tab.
                </p>
                <Button asChild>
                  <a href={gameUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open {game.title}
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 min-h-[600px] flex items-center justify-center bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p>Loading {game.title}...</p>
                  </div>
                </div>
              )}
              <iframe
                src={gameUrl}
                className="w-full min-h-[600px] border border-muted rounded-lg"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title={game.title}
                sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                allowFullScreen
                allow="fullscreen; gamepad; accelerometer; gyroscope; magnetometer; xr-spatial-tracking; microphone; camera"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>Game hosted locally • Click &quot;Open in New Tab&quot; for best experience</p>
      </div>
    </div>
  );
}