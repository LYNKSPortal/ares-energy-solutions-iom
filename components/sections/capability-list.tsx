import { Check } from "lucide-react";

export function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-brand-dark-grey">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-black" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
