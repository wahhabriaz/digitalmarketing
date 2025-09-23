import Image from "next/image";
import HeroHome from "./components/sections/HeroHome";
import WhoWeAre from "./components/sections/WhoWeAre";
import HeroHome2 from "./components/sections/HeroHome2";
import DataDrivenInsight from "./components/sections/DataDrivenInsight";
import ServicesOverview from "./components/sections/ServicesOverview";
import InsightsSection from "./components/sections/InsightsSection";

export default function Home() {
  return (
    <>
      <HeroHome />
      <HeroHome2 />
      <WhoWeAre />
      <DataDrivenInsight />
      <ServicesOverview />
      <InsightsSection />
    </>
  );
}
