import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GeometricBorder from "@/components/geometry/GeometricBorder";
import Button from "@/components/ui/Button";

const partners = [
  { name: "LUMS", logo: "/images/partners/lums.svg" },
  { name: "NUST", logo: "/images/partners/nust.svg" },
  { name: "FAST-NUCES", logo: "/images/partners/fast.svg" },
  { name: "GIKI", logo: "/images/partners/giki.svg" },
  { name: "NED University", logo: "/images/partners/ned.svg" },
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
          <div className="mt-10">
            <h3 className="text-xs uppercase tracking-[0.3em] text-deep-ink/40 mb-4">In Conversation With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {partners.map((p) => (
                <div key={p.name} className="flex items-center justify-center px-4 py-5 rounded-xl bg-white border border-deep-ink/8 hover:border-pakistan-green/20 hover:shadow-sm transition-all">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={160}
                    height={48}
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12"><Button href="mailto:partners@zahin.ai" variant="secondary">Become a Partner</Button></div>
        </div>
      </GeometricBorder>
    </SectionWrapper>
  );
}
