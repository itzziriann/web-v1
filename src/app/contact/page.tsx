import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type ContactProfile = {
  platform: string;
  handle: string;
  href: string;
};

const contactProfiles: ContactProfile[] = [
  {
    platform: "Email",
    handle: "contact@itzziriann.uk",
    href: "mailto:contact@itzziriann.uk",
  },
  {
    platform: "Discord",
    handle: "@itzziriann",
    href: "https://discord.com/users/689846515325599818",
  },
  {
    platform: "TikTok",
    handle: "@itzziriann",
    href: "https://www.tiktok.com/@itzziriann",
  },
  {
    platform: "Roblox",
    handle: "@itzziriann",
    href: "https://www.roblox.com/users/profile?username=itzziriann",
  },
  {
    platform: "Reddit",
    handle: "@itzziriann",
    href: "https://www.reddit.com/user/itzziriann/",
  },
  {
    platform: "Bluesky",
    handle: "@itzziriann",
    href: "https://bsky.app/profile/itzziriann.uk",
  },
  {
    platform: "X (Twitter)",
    handle: "@itzziriann",
    href: "https://x.com/itzziriann",
  },
  {
    platform: "Steam",
    handle: "@itzziriann",
    href: "https://steamcommunity.com/id/itzziriann",
  },
];

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <Background />

      <NavBar />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 mt-16 px-6 pb-16 pt-20 sm:px-8 lg:px-10">
        <Card className="flex w-full mx-auto bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
          <CardHeader className="px-6">
            <CardTitle className="text-5xl max-w-5xl text-center font-bold text-foreground mx-auto">
              Contact
            </CardTitle>
          </CardHeader>

          <CardContent className="mt-4 w-full mx-auto text-sm sm:text-base">
            <p className="text-center leading-relaxed text-foreground">
              Reach me on any platform below. Every profile uses the same
              handle: <span className="font-semibold">@itzziriann</span>
              <br />
              <span className="text-muted-foreground text-sm">
                Sorted by usage frequency
              </span>
            </p>
          </CardContent>
        </Card>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactProfiles.map((profile) => (
            <Card
              key={profile.platform}
              className="border border-card/70 bg-card/85 py-0 shadow-[0_0_40px_-18px_rgba(255,255,255,0.5)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-18px_rgba(255,255,255,1)]"
            >
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl font-bold text-foreground">
                  {profile.platform}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <p className="text-sm text-foreground sm:text-base">
                  {profile.handle}
                </p>

                <div className="mt-4">
                  <Link
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="justify-between border-outline/100 shadow-[0_0_40px_-18px_rgba(14,30,50,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                    >
                      Visit profile
                      <ArrowRightIcon className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
