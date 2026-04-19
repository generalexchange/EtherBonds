import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/ui/Navigation";

const Thesis = dynamic(() =>
  import("@/components/sections/Thesis").then((m) => ({ default: m.Thesis })),
);
const Instruments = dynamic(() =>
  import("@/components/sections/Instruments").then((m) => ({
    default: m.Instruments,
  })),
);
const Mechanics = dynamic(() =>
  import("@/components/sections/Mechanics").then((m) => ({
    default: m.Mechanics,
  })),
);
const Ledger = dynamic(() =>
  import("@/components/sections/Ledger").then((m) => ({ default: m.Ledger })),
);
const Governance = dynamic(() =>
  import("@/components/sections/Governance").then((m) => ({
    default: m.Governance,
  })),
);
const Security = dynamic(() =>
  import("@/components/sections/Security").then((m) => ({
    default: m.Security,
  })),
);
const Research = dynamic(() =>
  import("@/components/sections/Research").then((m) => ({
    default: m.Research,
  })),
);
const Documentation = dynamic(() =>
  import("@/components/sections/Documentation").then((m) => ({
    default: m.Documentation,
  })),
);
const Closing = dynamic(() =>
  import("@/components/sections/Closing").then((m) => ({ default: m.Closing })),
);
const Footer = dynamic(() =>
  import("@/components/ui/Footer").then((m) => ({ default: m.Footer })),
);

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" className="flex-1">
        <Hero />
        <Thesis />
        <Instruments />
        <Mechanics />
        <Ledger />
        <Governance />
        <Security />
        <Research />
        <Documentation />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
