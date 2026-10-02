import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label = "Image Coming Soon",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-brand-light-grey/30 text-brand-mid-grey",
        className
      )}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.14em]">{label}</span>
    </div>
  );
}
