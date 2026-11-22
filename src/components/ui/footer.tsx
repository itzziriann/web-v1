export default function Footer() {
  return (
    <footer className="z-10 mx-auto mt-auto w-full bg-background/50 px-6 py-4 text-center align-bottom text-sm text-foreground sm:px-8 lg:px-10">
      © {new Date().getFullYear()} itzziriann. All rights reserved.
    </footer>
  );
}