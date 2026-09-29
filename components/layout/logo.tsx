import Image from "next/image";
import Link from "next/link";

const LOGO_ASPECT_RATIO = 3000 / 838;

export function Logo({
  tone = "dark",
  className,
  height = 56,
}: {
  tone?: "dark" | "light";
  className?: string;
  height?: number;
}) {
  const width = Math.round(height * LOGO_ASPECT_RATIO);

  return (
    <Link
      href="/"
      className={className}
      aria-label="Ares Energy Solution Limited home"
    >
      <Image
        src={tone === "dark" ? "/logo/ares-logo-black.png" : "/logo/ares-logo-white.png"}
        alt="Ares Energy Solution Limited"
        width={width}
        height={height}
        priority
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
