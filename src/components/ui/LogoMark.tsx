interface LogoMarkProps {
  name: string;
  className?: string;
}

const logoStyles: Record<string, string> = {
  "LUMS": "font-mono font-bold tracking-[0.15em]",
  "NUST": "font-mono font-bold tracking-[0.2em]",
  "FAST-NUCES": "font-mono font-semibold tracking-[0.1em] text-xs",
  "GIKI": "font-mono font-bold tracking-[0.25em]",
  "NED University": "font-mono font-semibold tracking-[0.05em] text-xs",
  "Google": "font-body font-medium",
  "Meta": "font-body font-bold",
  "OpenAI": "font-body font-semibold",
  "DeepMind": "font-mono font-semibold",
  "Microsoft": "font-body font-semibold",
  "Amazon": "font-body font-bold tracking-tight",
};

export default function LogoMark({ name, className = "" }: LogoMarkProps) {
  const style = logoStyles[name] || "font-mono font-semibold";
  return (
    <div className={`flex items-center justify-center px-6 py-4 rounded-lg border border-deep-ink/8 bg-white hover:border-pakistan-green/20 hover:shadow-sm transition-all ${className}`}>
      <span className={`text-deep-ink/50 hover:text-deep-ink/70 transition-colors text-sm ${style}`}>
        {name}
      </span>
    </div>
  );
}
