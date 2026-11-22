import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import PCCard from "@/components/ui/pc-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "The Original",
    description: (
      <div>
        This was the first PC I built, for my 11th birthday in 2021 with the
        birthday money I had saved up. Unfortunately, this was during the
        pandemic, and the GPU shortage was at its peak, so the specs weren't as
        good as what I could've gotten had I waited, but nevertheless I really
        enjoyed building it and learning about PC hardware.
        <br />
        <br />
        <b>CPU:</b> Intel Core i3-10100F <br />
        <b>GPU:</b> NVIDIA GeForce GTX 1650 <br />
        <b>RAM:</b> 16GB DDR4 @ 3200MT/s (2x8GB Corsair Vengeance RGB Pro SL) <br />
        <b>Storage:</b> 128GB Origin Inception SATA SSD <br />
        <b>Motherboard:</b> Gigabyte H510M <br />
        <br />
      </div>
    ),
    imageSrc: "/pc1.jpg",
  },
];

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
          filter: "blur(0px)",
          transform: "scale(1.06)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-background/30"
        aria-hidden="true"
      />

      <NavBar />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 mt-16 px-6 pb-16 pt-20 sm:px-8 lg:px-10">
        <Card className="flex w-full mx-auto max-w-4xl bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
          <CardHeader className="px-6">
            <CardTitle className="text-5xl max-w-5xl text-center font-bold text-foreground mx-auto">
              About my PC
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 w-full mx-auto text-sm sm:text-base">
            <Link href={"/about"} className="mb-5 block">
              <Button
                key={"/about"}
                className="justify-between border-white/20 shadow-[0_0_40px_-18px_rgba(14,30,50,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <ArrowLeftIcon className="mr-2" />
                Return to regular about
              </Button>
            </Link>

            <p className="leading-relaxed text-foreground ">
              I built my own PC for my 11th birthday in 2021, and have been
              upgrading it ever since. Below is a list of the specs, and the
              upgrades I've done over the years.
              <br />
              <br />
              <b>Current Specs:</b>
              <br />
              CPU: Intel Core i5-11600KF <br />
              GPU: NVIDIA GeForce RTX 2070 Super <br />
              RAM: 32GB DDR4 @ 2933MT/s (2x8GB Corsair Vengeance RGB Pro SL
              3200MT/s + 1x16GB Corsair Vengeance LPX 3000MT/s) <br />
              Storage: 1TB Crucial P3 Plus NVMe SSD + 500GB Crucial P2 NVMe SSD{" "}
              <br />
              Motherboard: ASUS TUF Z590-PLUS <br />
              Power Supply: ADX Gaming 750W 80+ Gold <br />
              Case: Lian Li O11 Air Mini <br />
              Cooler: Vetroo V5
            </p>
            <br />
          </CardContent>
        </Card>
        {stages.map((stage) => (
          <PCCard
            key={stage.title}
            title={stage.title}
            description={stage.description}
            imageSrc={stage.imageSrc}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
