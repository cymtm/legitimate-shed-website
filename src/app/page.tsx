import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground/80 to-primary-foreground sm:text-6xl md:text-7xl font-headline">
          Legitimate Shed Devs
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          We may or may not live in a shed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/game">
              Play Our Game <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/games">Browse All Games</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/apps">Discover Our Apps</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
