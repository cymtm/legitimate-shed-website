
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, HardDrive, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">The Shed</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          It&apos;s not a statement. It&apos;s just our address.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-8">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/assets/about-shed.png"
                alt="The Shed"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold font-headline">Where We Work</h2>
                <p className="mt-4 text-muted-foreground">
                The tech industry is built on narratives. This is ours. There&apos;s no venture capital, no ping-pong table, just a shed. This is where we build. Our setup is a testament to what you can get done with borrowed electricity and a spotty Wi-Fi signal. We&apos;re developers, and this is our office. It&apos;s not glamorous, but it&apos;s what we got.
                </p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <Terminal className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4 font-headline">Forced Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our development machines have less memory than a modern smart watch. We write clean, efficient code not as a best practice, but out of necessity. There&apos;s no room for bloat.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <HardDrive className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4 font-headline">The Hardware</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Running on a total of roughly 40GB of laptop RAM split between 3 dudes, consumed by more LLMs then we have fingers to count.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4 font-headline">Breakfast?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                What day of the week is it? We may need to sleep more and take the black plastic off the windows. We work for a better tomorrow, in the most literal sense. Every project is a step forward.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
