import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { accreditation } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AccreditationBlock({
  tone = "light",
  category,
}: {
  tone?: "light" | "dark";
  category?: string;
}) {
  return (
    <section
      className={cn(
        "border-y",
        tone === "light"
          ? "border-brand-light-grey bg-brand-white"
          : "border-brand-dark-grey bg-brand-black"
      )}
    >
      <Container className="flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border",
              tone === "light"
                ? "border-brand-light-grey text-brand-black"
                : "border-brand-dark-grey text-brand-white"
            )}
          >
            <BadgeCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.1em]",
                tone === "light" ? "text-brand-black" : "text-brand-white"
              )}
            >
              {accreditation.title}
            </p>
            <p
              className={cn(
                "mt-1 text-sm",
                tone === "light" ? "text-brand-dark-grey" : "text-brand-light-grey"
              )}
            >
              {category ?? accreditation.categories.join(" • ")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
