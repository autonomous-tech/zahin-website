import Link from "next/link";
import StarPattern from "@/components/geometry/StarPattern";

export default function Footer() {
  return (
    <footer className="bg-deep-ink text-white/70 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <StarPattern size={24} color="var(--color-pakistan-green)" animateOnScroll={false} />
              <span className="font-display text-xl font-bold text-white">zahin</span>
            </div>
            <p className="text-sm leading-relaxed">Building Pakistan&apos;s sovereign AI. A non-profit initiative incubated by Autonomous Technologies.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#crisis" className="hover:text-pakistan-green transition-colors">The Crisis</Link></li>
              <li><Link href="/#vision" className="hover:text-pakistan-green transition-colors">Our Vision</Link></li>
              <li><Link href="/#why-pakistan" className="hover:text-pakistan-green transition-colors">Why Pakistan</Link></li>
              <li><Link href="/#leadership" className="hover:text-pakistan-green transition-colors">Leadership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Engage</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#research" className="hover:text-pakistan-green transition-colors">Research</Link></li>
              <li><Link href="/journal" className="hover:text-pakistan-green transition-colors">Journal</Link></li>
              <li><Link href="/join" className="hover:text-pakistan-green transition-colors">Join Zahin</Link></li>
              <li><Link href="/#fund" className="hover:text-pakistan-green transition-colors">Fund the Future</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/zahin-ai" className="hover:text-pakistan-green transition-colors">GitHub</a></li>
              <li><a href="https://x.com/zahin_ai" className="hover:text-pakistan-green transition-colors">X / Twitter</a></li>
              <li><a href="mailto:hello@zahin.ai" className="hover:text-pakistan-green transition-colors">hello@zahin.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Zahin. Non-profit sovereign AI initiative.</p>
          <p>Founded by <a href="https://autonomoustech.ca" className="hover:text-white/60 transition-colors">Autonomous Technologies</a></p>
        </div>
      </div>
    </footer>
  );
}
