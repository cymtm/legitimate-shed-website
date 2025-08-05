'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });

  const moveTarget = useCallback(() => {
    setTargetPosition({
      x: Math.random() * 80 + 10, // Keep within 10-90% of container
      y: Math.random() * 60 + 20, // Keep within 20-80% of container
    });
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    moveTarget();
  };

  const handleTargetClick = () => {
    if (gameActive) {
      setScore(prev => prev + 1);
      moveTarget();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight font-headline mb-4">
            Click Target Game
          </h1>
          <p className="text-lg text-muted-foreground">
            Click the moving target as many times as you can in 30 seconds!
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Game Stats</span>
              <Button onClick={startGame} disabled={gameActive}>
                {gameActive ? 'Game Running...' : 'Start Game'}
              </Button>
            </CardTitle>
            <CardDescription>
              Try to beat your high score!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-lg font-semibold">
              <span>Score: {score}</span>
              <span>Time: {timeLeft}s</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardContent className="p-0">
            <div 
              className="relative w-full h-96 cursor-crosshair"
              style={{ minHeight: '400px' }}
            >
              {gameActive && (
                <button
                  onClick={handleTargetClick}
                  className="absolute w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-lg hover:bg-red-600 transition-all duration-200 hover:scale-110 animate-pulse"
                  style={{
                    left: `${targetPosition.x}%`,
                    top: `${targetPosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-label="Click target"
                />
              )}
              {!gameActive && timeLeft === 0 && score > 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
                    <p className="text-xl">Final Score: {score}</p>
                  </div>
                </div>
              )}
              {!gameActive && timeLeft === 30 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Play?</h2>
                    <p className="text-muted-foreground">Click &quot;Start Game&quot; to begin!</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Built with Next.js • Hosted on Vercel</p>
        </div>
      </div>
    </div>
  );
}