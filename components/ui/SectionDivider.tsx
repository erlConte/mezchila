/** Subtle editorial separator between sections */
export function SectionDivider() {
  return (
    <div
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8"
      aria-hidden
    >
      <div className="h-px w-16 bg-charcoal/15" />
    </div>
  );
}
