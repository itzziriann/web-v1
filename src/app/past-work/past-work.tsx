import React from "react";
import Link from "next/link";

interface PastWorkItem {
  title: string;
  description: React.ReactNode;
  mediaSrc?: string;
  mediaType?: "video" | "image" | "none";
}

const rblx: PastWorkItem[] = [
  {
    title: "Finnair Core System (FCS)",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>AI Check In</li>
          <li>Gate System</li>
          <li>Global Admin Settings</li>
          <li>Announcement System</li>
          <li>Preset Announcements</li>
          <li>Music System</li>
          <li>Individual Volume Changer</li>
          <li>Auto Music Control</li>
          <li>Uniform System</li>
          <li>Overhead UI</li>
          <li>Teleporter</li>
          <li>Tool Giver</li>
          <li>Global Logging</li>
          <li>Jump Lock</li>
          <li>Advanced Server Lock</li>
          <li>Flight Information System</li>
          <li>Top Bar (3rd Party Integration)</li>
          <li>Player & Group Blacklist</li>
          <li>+ a LOT more... (read below)</li>
        </ul>
        <br />
        <p>
          This was a super ambitious project that I started for my own airline,
          Finnair. Unfortunately, it was shut down due to the lack of time. A
          few months later, I decided to try and restart Finnair. The image
          above is a bit outdated, as the system was improved with an{" "}
          <u>
            automatic group ranking, Discord verification with Roblox OAuth, a
            custom modmail system with transcripts (on Discord), a booking
            system, a miles system with vouchers and promo codes (via Firebase),
            staff management with Google Sheets integration
          </u>{" "}
          and more.
          <br />
          <br />
          Unfortunately before the airline was released again, Roblox pushed the
          age groups update, making it a pain for airlines to operate, and due
          to the lack of time I had, I decided to shut it down again. It's now
          just a remnant, sitting dormant in my games as a reminder to what
          Finnair could've been.
          <br />
          <br />
          Thanks a lot Roblox...
        </p>
      </div>
    ),
    mediaSrc: "/ecosystem.png",
    mediaType: "image",
  },
  {
    title: "Avianca Booking System + AI Check In",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>One-Time Ticket Upgrades</li>
          <li>Fully Automated Check-In</li>
          <li>Works with PROP Baggage System</li>
          <li>Automatic Priority Tag for BC / PE</li>
          <li>Asks for Fragile Bag</li>
        </ul>
        <br />
        <p>
          This was my first major project, where I developed a comprehensive
          booking system for Avianca Airlines. Although I no longer see it as my
          best work nor suitable for proper usage, it was a significant
          milestone.
          <br />
          <br />
          If you want this system, we can sort a deal out, but I won't be giving
          it away for free. It would be significantly discounted but I can also
          revamp it and add more features for a slightly higher price. This
          system may be published for free in the future, unless it gets sold,
          but for now, if you want it, reach out to me.
        </p>
        <br />
        <p>
          NEVER PAID FOR - SHAME ON THEM:&nbsp;
          <Link
            href="https://www.roblox.com/communities/12585242/Avianca-Airlines-Virtual#!/about"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            https://www.roblox.com/communities/12585242/Avianca-Airlines-Virtual#!/about
          </Link>
        </p>
      </div>
    ),
    mediaSrc:
      "https://drive.google.com/file/d/1W874AtWmCl-Cp8VjL1u30WC_iMajiqqo/preview",
    mediaType: "video",
  },
  {
    title: "China Southern AI Check In",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>Fully Automated Check-In</li>
          <li>Works with PROP Baggage System</li>
          <li>Straightforward UI</li>
        </ul>
        <br />
        <p>
          This was my second project, where I developed an AI check-in system
          for China Southern Airlines. Albeit being a more basic system compared
          to the Avianca Booking System, it was still a significant project for
          me. Thankfully, I was paid for this project, and it was a good
          experience overall. However, it has since become one of my worse
          projects, due to its age.
        </p>
      </div>
    ),
    mediaSrc:
      "https://drive.google.com/file/d/19UvlwaJeM9rHpVVPC6bYWZx9xg4otv9N/preview",
    mediaType: "video",
  },
  {
    title: "Austrian Airlines Booking System + AI Check In",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>Smooth Animations</li>
          <li>One-Time Ticket Upgrades</li>
          <li>Permanent Ticket Upgrades</li>
          <li>Seat Counter</li>
          <li>Fully Automated Check-In</li>
          <li>Works with PROP Baggage System</li>
          <li>Automatic Priority Tag for BC / PE</li>
          <li>Asks for Fragile Bag</li>
          <li>Overhead Nametag</li>
          <li>Adonis Admin Integration</li>
        </ul>
        <br />
        <p>
          My third project was a booking system for Austrian Airlines, which was
          a meaningful improvement over the Avianca Booking System. It featured
          a more polished design and smoother animations, making it more
          visually appealing. While it still wasn't perfect, it was a
          significant step up from my previous 2 pieces of work.
        </p>
      </div>
    ),
    mediaSrc:
      "https://drive.google.com/file/d/16HTKXyi8DPL0vpqvTxUaVnT3Hw-MyDLI/preview",
    mediaType: "video",
  },
  {
    title: "Transavia Booking System + AI Check In",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>Smooth Animations</li>
          <li>One-Time Ticket Upgrades</li>
          <li>Fully Automated Check-In</li>
          <li>Works with PROP Baggage System</li>
          <li>Asks for Fragile Bag</li>
          <li>Overhead Nametag</li>
          <li>Adonis Admin Integration</li>
        </ul>
        <br />
        <p>
          This project was done simultaneously with the Austrian Airlines
          Booking System, and had some custom changes to the regular booking
          flow as desired by the client. It was a good project, and I enjoyed
          working on it.
        </p>
      </div>
    ),
    mediaSrc:
      "https://drive.google.com/file/d/1wp_bkFzC9e55v2TEcjkvo9-6o-h5Wtld/preview",
    mediaType: "video",
  },
  {
    title: "Vietnam Airlines Booking System",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>Smooth Animations</li>
          <li>One-Time Ticket Upgrades</li>
          <li>Permanent Ticket Upgrades</li>
          <li>Seat Counter</li>
          <li>Custom Itinerary UI</li>
          <li>Overhead Nametag</li>
        </ul>
        <br />
        <p>
          This was a very recent project, and it was a significant improvement
          over any of my previous work. It was a great experience to work on
          this project, and I am proud of how it turned out. Lots of challenges
          were faced during development, such as certain animations from the
          real Vietnam Airlines website, but I was able to overcome them and
          create a high-quality UI for my client.
          <br />
          <br />
        </p>
      </div>
    ),
    mediaSrc:
      "https://drive.google.com/file/d/1PKVElH739FN0gZtqEO0ulSTVhyz-CBPT/preview",
    mediaType: "video",
  },
];

const general: PastWorkItem[] = [
  {
    title: "Personal Portfolio Website",
    description: (
      <div>
        <b>Key Features:</b>
        <ul className="list-inside list-disc">
          <li>Next.js 13 with App Router</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>Custom UI Components</li>
        </ul>
        <br />
        <p>
          This is the very website you're on right now! This project was my first experience with any frontend work, espeically with React, NextJS and Tailwind. It is a huge step up from the previous version of my portfolio, which was hosted on carrd.co (no hate, it's still a great platform). I'm still new to frontend development, and this project was a great learning experience for me as I aim to become a full-stack developer.
        </p>
      </div>
    ),
    mediaSrc: "/website.png",
    mediaType: "image",
  },
];

export { rblx, general };
