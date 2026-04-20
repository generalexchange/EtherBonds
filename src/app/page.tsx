import FullFooter from "@/components/ui/FullFooter";
import { Navigation } from "@/components/ui/Navigation";
import { AnalyticsEngine } from "@/components/sections/AnalyticsEngine";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { DeveloperCLI } from "@/components/sections/DeveloperCLI";
import { DomainWallet } from "@/components/sections/DomainWallet";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Instruments } from "@/components/sections/Instruments";
import { Mechanics } from "@/components/sections/Mechanics";
import { RepositoryInstruments } from "@/components/sections/RepositoryInstruments";
import { Thesis } from "@/components/sections/Thesis";
import { StablecoinSettlement } from "@/components/sections/StablecoinSettlement";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { UseCases } from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Thesis />
        <Instruments />
        <Mechanics />
        <TrustedBy />
        <HowItWorks />
        <RepositoryInstruments />
        <DomainWallet />
        <AnalyticsEngine />
        <StablecoinSettlement />
        <DeveloperCLI />
        <UseCases />
        <ClosingCTA />
      </main>
      <FullFooter />
    </>
  );
}
