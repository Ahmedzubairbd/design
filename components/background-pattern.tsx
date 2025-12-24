export function BackgroundPattern() {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none bg-primary opacity-[0.03]"
      style={{
        WebkitMaskImage: "url(/dark.svg)",
        maskImage: "url(/dark.svg)",
        WebkitMaskRepeat: "repeat",
        maskRepeat: "repeat",
        WebkitMaskSize: "400px auto",
        maskSize: "400px auto",
        maskMode: "alpha",
      }}
    />
  );
}
