"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function RedirectButton({
  label,
  href,
  variant = "default",
  size = "lg",
}: {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
}) {
  return (
    <Link href={href}>
      <Button
        key={href}
        variant={variant}
        size={size}
        className="justify-between border-white/20 shadow-[0_0_40px_-18px_rgba(14,30,50,0.45)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
      >
        {label}
        <ArrowRightIcon className="ml-2" />
      </Button>
    </Link>
  );
}
