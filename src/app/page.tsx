import Script from "next/script";
import Hero from "@/components/sections/Hero";
import Crisis from "@/components/sections/Crisis";
import Vision from "@/components/sections/Vision";
import WhyPakistan from "@/components/sections/WhyPakistan";
import Leadership from "@/components/sections/Leadership";
import Partners from "@/components/sections/Partners";
import Research from "@/components/sections/Research";
import FundTheFuture from "@/components/sections/FundTheFuture";
import ArabesqueDivider from "@/components/geometry/ArabesqueDivider";

export default function Home() {
  return (
    <main id="main-content">
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Zahin",
            alternateName: "Zahin AI",
            url: "https://zahin.ai",
            description: "Non-profit sovereign AI lab building foundation models for Pakistan\'s languages and needs.",
            foundingDate: "2026",
            founders: [
              { "@type": "Person", name: "Rizwan Qaiser" },
              { "@type": "Person", name: "Abdullah Abid" },
            ],
            sameAs: [
              "https://github.com/zahin-ai",
              "https://x.com/zahin_ai",
            ],
          }),
        }}
      />
      <Hero />
      <ArabesqueDivider />
      <Crisis />
      <ArabesqueDivider waves={10} amplitude={15} color="var(--color-terracotta)" />
      <Vision />
      <ArabesqueDivider />
      <WhyPakistan />
      <ArabesqueDivider waves={12} amplitude={12} color="var(--color-pakistan-green)" />
      <Leadership />
      <ArabesqueDivider waves={6} amplitude={18} color="var(--color-terracotta)" />
      <Partners />
      <ArabesqueDivider />
      <Research />
      <ArabesqueDivider waves={10} amplitude={15} color="var(--color-pakistan-green)" />
      <FundTheFuture />
    </main>
  );
}
