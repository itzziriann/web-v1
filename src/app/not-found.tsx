"use client";
import { usePathname } from "next/navigation";
import Background from "@/components/ui/background";
import NavBar from "@/components/ui/navbar";

export default function Page() {
  const pathname = usePathname();

  return (
    <div>
      <Background />
      <NavBar />
      <main className="flex align-middle justify-center h-screen">
        <div className="mx-auto my-auto">
          Not found: <strong>{pathname}</strong>
        </div>
      </main>
    </div>
  );
}
