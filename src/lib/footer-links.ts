export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Protocol",
    links: [
      { label: "Instruments", href: "/instruments" },
      { label: "Mechanics", href: "/mechanics" },
      { label: "Ledger", href: "/ledger" },
      { label: "Staking", href: "/stake" },
      { label: "Providers", href: "/providers" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "BondDAO", href: "/governance" },
      { label: "Proposals", href: "/governance/proposals" },
      { label: "Treasury", href: "/governance/treasury" },
      { label: "Delegates", href: "/governance/delegates" },
      { label: "Forum", href: "https://forum.etherbonds.com", external: true },
      {
        label: "Snapshot",
        href: "https://snapshot.org/#/etherbonds.eth",
        external: true,
      },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Whitepaper", href: "/research/whitepaper.pdf" },
      { label: "Audits", href: "/research/audits" },
      { label: "Publications", href: "/research/publications" },
      { label: "Methodology", href: "/research/methodology" },
      { label: "Risk Analysis", href: "/research/risk" },
      { label: "Performance", href: "/research/performance" },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/etherbonds",
        external: true,
      },
      {
        label: "Documentation",
        href: "https://docs.etherbonds.com",
        external: true,
      },
      {
        label: "API Reference",
        href: "https://api.etherbonds.com",
        external: true,
      },
      {
        label: "Smart Contracts",
        href: "https://github.com/etherbonds/contracts",
        external: true,
      },
      {
        label: "Subgraph",
        href: "https://thegraph.com/explorer/subgraph/etherbonds",
        external: true,
      },
      {
        label: "Bug Bounty",
        href: "https://immunefi.com/bounty/etherbonds",
        external: true,
      },
    ],
  },
  {
    title: "Network",
    links: [
      {
        label: "Ethereum Mainnet",
        href: "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
        external: true,
      },
      {
        label: "Optimism",
        href: "https://optimistic.etherscan.io/address/0x0000000000000000000000000000000000000000",
        external: true,
      },
      {
        label: "ENS — etherbonds.eth",
        href: "https://app.ens.domains/etherbonds.eth",
        external: true,
      },
      { label: "IPFS Mirror", href: "#", external: true },
      { label: "Oracles", href: "https://data.chain.link", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "mail@etherbonds.com", href: "mailto:mail@etherbonds.com" },
      { label: "Forum", href: "https://forum.etherbonds.com", external: true },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Public Ledger",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/etherbonds",
        external: true,
      },
      {
        label: "Mirror",
        href: "https://mirror.xyz/etherbonds.eth",
        external: true,
      },
      { label: "X", href: "https://x.com/etherbonds", external: true },
      {
        label: "Farcaster",
        href: "https://warpcast.com/etherbonds",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Disclosures", href: "/legal/disclosures" },
      { label: "Risk", href: "/legal/risk" },
      { label: "Compliance", href: "/legal/compliance" },
      { label: "Transparency", href: "/legal/transparency" },
    ],
  },
];

export const DISCLOSURE_TEXT = `EtherBonds Protocol. Deployed to Ethereum Mainnet · Optimism. This is not an offering of securities. The $BOND token is a utility instrument granting access to computational infrastructure and participation in protocol governance. Yields are generated from real network utilisation and are not guaranteed. Participants should consult qualified counsel before acquiring any position. The protocol operates autonomously and is not administered by any individual or entity.`;

export const COPYRIGHT_TEXT =
  "© Public Domain — EtherBonds is released under CC0. All contracts are verified, open-source, and available on Etherscan.";

export const VERSION_TEXT = "Protocol v1.0.0 · Released MMXXV";
