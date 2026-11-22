export default function SiteBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-1000 flex min-h-16 items-center justify-center border-b border-red-300/40 bg-red-600 px-4 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.8)]">
      <p className="max-w-5xl leading-tight">
        This is the old version of the site, v1.itzziriann.uk. Go to the new
        version at{" "}
        <a
          href="https://itzziriann.uk"
          className="font-semibold underline decoration-white/70 underline-offset-4 hover:decoration-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          itzziriann.uk
        </a>
        .
      </p>
    </div>
  );
}
