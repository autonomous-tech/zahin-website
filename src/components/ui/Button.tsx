import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = "primary", className = "", onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-semibold text-sm tracking-wide transition-all duration-200";
  const variants = {
    primary: "bg-pakistan-green text-white hover:bg-pakistan-green/90 shadow-sm hover:shadow-md",
    secondary: "border border-deep-ink text-deep-ink hover:bg-deep-ink hover:text-parchment",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href?.startsWith("#")) return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
