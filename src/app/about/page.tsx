import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import RedirectButton from "@/components/ui/redirect-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

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
              About me
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 w-full mx-auto text-sm sm:text-base">
            <p className="leading-relaxed text-foreground ">
              Hello! I'm Ziri, a 15yo (in the working) full-stack developer. I
              have a passion for tech, aviation, and all things in between. I
              have experience in a variety of programming languages and
              frameworks, and I'm always eager to learn more and take on new
              challenges. (holy ai description icl)
              <br />
              <br />
              icl this website is pretty shit so im gonna have to revamp it pretty soon
              <br />
              <br />
              Age: 15 <br />
              Location: United Kingdom <br />
              Hobbies: Coding, Aviation, Tech <br />
              Favourite Aircraft: Boeing 777-300ER / Airbus A321XLR <br />
              Current Phone: CMF Phone 2 Pro [Primary] (2025-Now) / Google Pixel
              7 [Secondary] (2023-Now) <br />
              Past Phones: Motorola G8 Plus (2021-2022), Samsung Galaxy S20
              (10/2022 - 4/2023) <br />
            </p>
            <br />
            <b> Phones Repaired:</b>
            <ul className="list-disc list-inside">
              <li>10/22 iPhone XS Max Screen</li>
              <li>2/23 6S Plus Camera</li>
              <li>5/23 6S Plus Screen</li>
              <li>5/23 iPhone XS Max Screen</li>
              <li>12/24 iPhone 12 Screen</li>
              <li>2/24 Google Pixel 7 Screen (my phone)</li>
              <li>6/25 iPhone 8 Plus Screen</li>
              <li>11/25 iPhone 12 Screen</li>
              <li>11/25 iPhone 12 Cam</li>
              <li>11/25 Samsung S20 Screen</li>
              <li>11/25 iPhone 13 Screen</li>
            </ul>
            <br />
            <RedirectButton
              href={"/about/pc"}
              label="About my PC"
            ></RedirectButton>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
