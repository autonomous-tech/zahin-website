import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import GeometricBorder from "@/components/geometry/GeometricBorder";
import StarPattern from "@/components/geometry/StarPattern";

const tiers = [
  { name: "Institutional Partner", description: "Government bodies, international development organizations, and foundations.", cta: "Discuss Partnership", href: "mailto:partners@zahin.ai", featured: true },
  { name: "Corporate Sponsor", description: "Technology companies and enterprises. Compute credits, talent exchange, and brand alignment.", cta: "Sponsor Zahin", href: "mailto:sponsors@zahin.ai", featured: false },
  { name: "Academic Collaborator", description: "Universities and research institutions. Joint research, shared datasets, student fellowships.", cta: "Collaborate", href: "mailto:research@zahin.ai", featured: false },
  { name: "Individual Supporter", description: "Pakistani diaspora and global citizens. Your contribution funds compute, talent, and open research.", cta: "Support Zahin", href: "mailto:support@zahin.ai", featured: false },
];

export default function FundTheFuture() {
  return (
    <SectionWrapper id="fund">
      <div className="text-center max-w-3xl mx-auto">
        <StarPattern size={48} points={12} color="var(--color-pakistan-green)" className="mx-auto mb-6" />
        <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Fund the Future</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Invest in Pakistan&apos;s AI independence</h2>
        <p className="mt-6 text-lg text-deep-ink/60 leading-relaxed">
          Every dollar funds compute, talent, and open research. Zahin is a non-profit — your support builds sovereign AI that belongs to Pakistan.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiers.map((tier) => (
          <GeometricBorder key={tier.name} color={tier.featured ? "var(--color-pakistan-green)" : "var(--color-terracotta)"}>
            <div className={`p-8 rounded-xl h-full ${tier.featured ? "bg-pakistan-green/5 border-2 border-pakistan-green/20" : "bg-white border border-deep-ink/10"}`}>
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <p className="mt-3 text-sm text-deep-ink/60 leading-relaxed">{tier.description}</p>
              <div className="mt-6"><Button href={tier.href} variant={tier.featured ? "primary" : "secondary"}>{tier.cta}</Button></div>
            </div>
          </GeometricBorder>
        ))}
      </div>
    </SectionWrapper>
  );
}
