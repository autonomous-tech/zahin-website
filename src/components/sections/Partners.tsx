import SectionWrapper from "@/components/ui/SectionWrapper";
import GeometricBorder from "@/components/geometry/GeometricBorder";
import Button from "@/components/ui/Button";
import LogoMark from "@/components/ui/LogoMark";

const tiers = [
  { label: "Academic Partners", partners: ["LUMS", "NUST", "FAST-NUCES", "GIKI", "NED University"] },
];

export default function Partners() {
  return (
    <SectionWrapper id="partners">
      <GeometricBorder color="var(--color-terracotta)">
        <div className="py-4">
          <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Partners & Supporters</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">Building together</h2>
          <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
            Sovereign AI isn&apos;t built alone. Zahin partners with universities, government, industry, and international organizations.
          </p>
          {tiers.map((tier) => (
            <div key={tier.label} className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-deep-ink/40 mb-4">{tier.label}</h3>
              {tier.label === "In Conversation With" ? (
                <div className="flex flex-wrap gap-3">
                  {tier.partners.map((p) => (
                    <div key={p} className="px-6 py-3 rounded-lg bg-white border border-deep-ink/10 text-sm font-medium text-deep-ink/70 hover:border-pakistan-green/30 transition-colors">{p}</div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {tier.partners.map((p) => (
                    <LogoMark key={p} name={p} />
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-12"><Button href="mailto:partners@zahin.ai" variant="secondary">Become a Partner</Button></div>
        </div>
      </GeometricBorder>
    </SectionWrapper>
  );
}
