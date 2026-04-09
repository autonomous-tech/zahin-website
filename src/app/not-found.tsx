import Link from "next/link";
import StarPattern from "@/components/geometry/StarPattern";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <StarPattern size={48} points={8} color="var(--color-pakistan-green)" className="mx-auto mb-6" animateOnScroll={false} />
        <h1 className="text-6xl font-display font-bold text-deep-ink">404</h1>
        <p className="mt-4 text-lg text-deep-ink/60">This page doesn&apos;t exist yet.</p>
        <div className="mt-8">
          <Button href="/" variant="primary">Back to Home</Button>
        </div>
      </div>
    </main>
  );
}
