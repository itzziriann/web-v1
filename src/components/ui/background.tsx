function Background() {
  return (
      <div>
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
      </div>
  );
}

export default Background;
