interface Props {
  children: string;
  position?: "top-right" | "bottom-right" | "bottom-left";
}

export function DecorativeNumber({
  children,
  position = "bottom-right",
}: Props) {
  const pos = {
    "top-right": "-top-8 -right-8",
    "bottom-right": "-bottom-16 -right-8",
    "bottom-left": "-bottom-16 -left-8",
  }[position];

  return (
    <div
      className={`absolute ${pos} font-serif text-[clamp(6rem,20vw,14rem)] leading-none text-charcoal/[0.035] select-none pointer-events-none`}
      aria-hidden
    >
      {children}
    </div>
  );
}
