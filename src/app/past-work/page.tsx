import NavBar from "@/components/ui/navbar";
import Background from "@/components/ui/background";
import PastWorkCard from "@/components/ui/past-work-card";
import Footer from "@/components/ui/footer";
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
import { general, rblx } from "./past-work";

const pastWorkItems = [rblx, general].flat();

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Background />
      <NavBar />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 mt-16 px-6 pb-16 pt-20 sm:px-8 lg:px-10">
        <Card className="flex w-full mx-auto max-w-4xl bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
          <CardHeader className="px-6">
            <CardTitle className="text-5xl max-w-5xl text-center font-bold text-foreground mx-auto">
              Past Work
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 w-full mx-auto">
            <p className="text-sm leading-relaxed text-foreground mb-4 sm:text-base">
              Below is a collection of my past work, showcasing various projects
              and experiences that highlight my skills and expertise in
              different areas. Feel free to explore the details of each project
              to learn more about my capabilities and accomplishments.
            </p>

            <div className="mt-6 grid grid-cols-1 items-center justify-left gap-3">
              <Link href="/past-work/general">
                <Button
                  size="lg"
                  className="justify-between border-outline/100 shadow-[0_0_40px_-18px_rgba(14,30,50,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  View non-roblox work
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
              <Link href="/past-work/roblox">
                <Button
                  size="lg"
                  className="justify-between border-outline/100 shadow-[0_0_40px_-18px_rgba(14,30,50,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  View roblox-only work
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {pastWorkItems.map((item) => (
          <PastWorkCard
            key={item.title}
            title={item.title}
            description={item.description}
            mediaSrc={item.mediaSrc}
            mediaType={item.mediaType}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
