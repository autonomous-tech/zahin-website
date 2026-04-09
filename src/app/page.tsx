import Hero from "@/components/sections/Hero";
import Crisis from "@/components/sections/Crisis";
import Vision from "@/components/sections/Vision";
import WhyPakistan from "@/components/sections/WhyPakistan";
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
    </main>
  );
}
