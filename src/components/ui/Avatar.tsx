interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Avatar({ name, size = 64, className = "" }: AvatarProps) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Geometric background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id={`avatar-grad-${name.replace(/\s/g, "")}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#01796F" />
            <stop offset="100%" stopColor="#0D2847" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#avatar-grad-${name.replace(/\s/g, "")})`} />
        {/* Subtle geometric pattern inside */}
        <rect x="15" y="15" width="70" height="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" rx="2" />
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="white" strokeWidth="0.3" opacity="0.08" rx="1" />
      </svg>
      <span className="relative z-10 font-display font-bold text-white" style={{ fontSize: size * 0.35 }}>
        {initials}
      </span>
    </div>
  );
}
