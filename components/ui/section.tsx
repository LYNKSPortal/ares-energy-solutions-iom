import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionTone = "light" | "white" | "dark";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-brand-off-white text-brand-black",
  white: "bg-brand-white text-brand-black",
  dark: "bg-brand-black text-brand-off-white",
};

export function Section({
  className,
  containerClassName,
  tone = "light",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
  containerClassName?: string;
}) {
  return (
    <section
      className={cn("py-20 sm:py-24 lg:py-28", toneClasses[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
