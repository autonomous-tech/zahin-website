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
