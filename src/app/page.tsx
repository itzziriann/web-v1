import NavBar from "@/components/ui/navbar";
import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import RedirectButton from "@/components/ui/redirect-button";

const featureCards = [
  {
    title: "About Me",
    description:
      "REPLACE LATER LORUM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. QUISQUAM, QUIS.",
    href: "/about",
    buttonLabel: "Read about me",
  },
  {
    title: "Skills",
    description:
      "REPLACE LATER LORUM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. QUISQUAM, QUIS.",
    href: "/skills",
    buttonLabel: "Read skills",
  },
  {
    title: "Past Work",
    description:
      "REPLACE LATER LORUM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. QUISQUAM, QUIS.",
    href: "/past-work",
    buttonLabel: "View general work",
  },

  {
    title: "Contact",
    description:
      "REPLACE LATER LORUM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. QUISQUAM, QUIS.",
    href: "/contact",
    buttonLabel: "Go to contact",
  },
];

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Background />
      <NavBar />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-20 sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="flex items-center justify-center h-[calc(100vh-80px)]"
        >
          <Card className="flex w-full max-w-xl bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
            <CardHeader className="px-6">
              <CardTitle className="text-5xl text-center font-bold text-foreground mx-auto">
                Hi, I'm itzziriann
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full mx-auto">
              <p className="text-xl font-bold leading-relaxed text-center text-[#DC143C]">
                {/*ALL CONTENT SHOWN ON THIS WEBSITE IS NOT FINAL AND IS SUBJECT TO
                CHANGE. THIS WEBSITE IS STILL IN DEVELOPMENT, SO EXPECT SOME
                BROKEN LINKS AND MISSING CONTENT. THANK YOU FOR YOUR
                UNDERSTANDING. I AM NOT LIABLE FOR ANY INNACCURATE OR OUTDATED
                INFORMATION DISPLAYED ON THIS SITE DURING DEVELOPMENT.*/}
                WEBSITE V2 (EVERYTHING HAS BEEN MOVED HERE): {}
                <Link href="https://v2.itzziriann.uk/" target="_blank">
                  https://v2.itzziriann.uk/
                </Link>
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {featureCards.map((card) => (
                  <RedirectButton
                    key={card.href}
                    label={card.title}
                    href={card.href}
                    variant="outline"
                    size="lg"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.href}
              className="group border border-card/70 bg-card/85 py-0 shadow-[0_0_40px_-18px_rgba(255,255,255,0.5)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-18px_rgba(255,255,255,1)]"
            >
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl font-bold text-foreground">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-foreground sm:text-base">
                  {card.description}
                </p>
                <br />
                <RedirectButton
                  label={card.buttonLabel}
                  href={card.href}
                  variant="default"
                  size="lg"
                />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer className="z-10 mx-auto mt-auto w-full bg-background/50 px-6 py-4 text-center text-sm text-foreground sm:px-8 lg:px-10">
        © {new Date().getFullYear()} itzziriann. All rights reserved.
      </footer>
    </div>
  );
}
