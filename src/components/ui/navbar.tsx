"use client";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavBar() {
  return (
    <div className="fixed inset-x-0 top-16 z-500 flex w-full items-center justify-between bg-card p-4">
      <div className="flex w-full items-center gap-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            unoptimized
            loading="eager"
            src="/profile.gif"
            alt="Profile Photo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about/"
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/skills/"
              className={navigationMenuTriggerStyle()}
            >
              Skills
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Past Work</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/past-work/"
                    className={navigationMenuTriggerStyle()}
                  >
                    All
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/past-work/general/"
                    className={navigationMenuTriggerStyle()}
                  >
                    General
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/past-work/roblox/"
                    className={navigationMenuTriggerStyle()}
                  >
                    Roblox
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact/"
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
