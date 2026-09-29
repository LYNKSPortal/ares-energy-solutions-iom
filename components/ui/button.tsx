import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-black text-brand-white hover:bg-brand-dark-grey focus-visible:outline-brand-black",
  secondary:
    "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-brand-white focus-visible:outline-brand-black",
  ghost:
    "bg-transparent text-brand-black border border-brand-light-grey hover:border-brand-black focus-visible:outline-brand-black",
  onDark:
    "bg-brand-off-white text-brand-black hover:bg-brand-white focus-visible:outline-brand-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    showArrow,
    children,
  } = props;

  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {children}
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
