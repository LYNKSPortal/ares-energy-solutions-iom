import type { CSSProperties } from "react";
import Image from "next/image";

// Brand marks streaking across the screen like meteors — travelling from the
// top-right down to the bottom-left, fading in and out along the way. Each
// entry has its own start position, size, speed and peak brightness so the
// shower feels organic rather than mechanically synced. Purely decorative —
// CSS animation only, no client JS — and muted by the overlay so it never
// competes with foreground text. Respects prefers-reduced-motion globally.
const meteors: { top: string; left: string; size: number; duration: number; delay: number; opacity: number }[] = [
  { top: "-4%", left: "58%", size: 34, duration: 4.5, delay: -0.5, opacity: 0.28 },
  { top: "2%", left: "78%", size: 64, duration: 6, delay: -3, opacity: 0.2 },
  { top: "-6%", left: "92%", size: 22, duration: 3.5, delay: -6, opacity: 0.32 },
  { top: "10%", left: "68%", size: 46, duration: 5, delay: -1.5, opacity: 0.24 },
  { top: "-8%", left: "104%", size: 80, duration: 6.5, delay: -8, opacity: 0.16 },
  { top: "18%", left: "88%", size: 28, duration: 4, delay: -4.5, opacity: 0.3 },
  { top: "4%", left: "48%", size: 20, duration: 3.8, delay: -10, opacity: 0.26 },
  { top: "-2%", left: "112%", size: 54, duration: 5.5, delay: -12, opacity: 0.19 },
  { top: "24%", left: "76%", size: 90, duration: 7, delay: -2, opacity: 0.14 },
  { top: "12%", left: "100%", size: 30, duration: 4.2, delay: -14, opacity: 0.29 },
  { top: "-10%", left: "70%", size: 40, duration: 4.8, delay: -7, opacity: 0.22 },
  { top: "30%", left: "94%", size: 24, duration: 3.6, delay: -9.5, opacity: 0.31 },
];

export function MeteorField({ overlayClassName = "bg-brand-black/75" }: { overlayClassName?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {meteors.map((meteor, index) => (
        <Image
          key={index}
          src="/logo/ares-mark-white.png"
          alt=""
          width={meteor.size}
          height={meteor.size}
          className="floating-icon absolute"
          style={
            {
              top: meteor.top,
              left: meteor.left,
              width: meteor.size,
              height: meteor.size,
              animationDuration: `${meteor.duration}s`,
              animationDelay: `${meteor.delay}s`,
              "--meteor-opacity": meteor.opacity,
            } as CSSProperties
          }
        />
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
