import { CONTACT_EMAIL, PROTOCOL_NAME, TOKEN_SYMBOL } from "./constants";

export const COPY = {
  meta: {
    title: `${PROTOCOL_NAME} — Infrastructure as Pension`,
    description:
      "Decentralised pensions, secured by Ethereum. Backed by real computational yield.",
  },
  brand: {
    wordmark: "ETHERBONDS",
  },
  nav: {
    links: [
      { href: "#protocol", label: "Protocol" },
      { href: "#instruments", label: "Instruments" },
      { href: "#governance", label: "Governance" },
      { href: "#research", label: "Research" },
      { href: "#documentation", label: "Documentation" },
    ],
    viewLedger: "View Ledger",
    accessProtocol: "Access Protocol",
  },
  hero: {
    eyebrow: "PROTOCOL 001 — ETHEREUM MAINNET",
    headlineLines: [
      { words: [{ text: "Pensions,", italic: false }] },
      {
        words: [
          { text: "reimagined", italic: true },
          { text: "as", italic: false },
        ],
      },
      {
        words: [
          { text: "sovereign", italic: false },
          { text: "infrastructure.", italic: false },
        ],
      },
    ],
    subhead:
      "EtherBonds converts staked capital into sustained pension yield, underwritten by real computational demand on the Ethereum network. No intermediaries. No promises. Only mathematics, ledgered.",
    ctaPrimary: "Review the Instruments",
    ctaSecondary: "Read the Whitepaper",
    yieldLabels: {
      twelve: "CURRENT YIELD — 12M",
      thirtySix: "CURRENT YIELD — 36M",
      sixty: "CURRENT YIELD — 60M",
      tvl: "TOTAL VALUE LOCKED",
    },
    yieldQualifiers: {
      fixed: "fixed",
      networks: "mainnet + optimism",
    },
  },
  thesis: {
    eyebrow: "THESIS",
    headlineLine1: "The pension, as",
    headlineLine2: "we inherited it, is obsolete.",
    paragraphs: [
      "For three centuries, the pension has been a promise made by an institution, secured by a legal covenant, and honoured — or not — at the discretion of those who hold the capital. The instrument was defensible in an era when institutions outlived individuals.",
      "That era has ended.",
      "EtherBonds reconstructs the pension as an autonomous instrument: a programmable, publicly-auditable claim on the computational output of a decentralised network. The covenant is no longer issued by a party. It is executed by the protocol.",
    ],
    pullQuote: {
      lines: [
        "We did not build a better pension fund.",
        "We removed the pension fund",
        "and left the pension intact.",
      ],
      attribution: `— ${PROTOCOL_NAME.toUpperCase()} FOUNDING PRINCIPLE`,
    },
  },
  instruments: {
    id: "instruments",
    eyebrow: "INSTRUMENTS",
    headline: "Three tenors. One protocol.",
    cards: [
      {
        tenor: "TWELVE-MONTH",
        yieldLabel: "ANNUAL YIELD, FIXED",
        specs: [
          { label: "Minimum", value: `100 ${TOKEN_SYMBOL}` },
          { label: "Lock period", value: "12 months" },
          { label: "Compounding", value: "Monthly" },
          { label: "Early exit", value: "10% penalty" },
          { label: "Pension at $10k", value: "$33/month" },
        ],
        specLink: "Instrument specification",
      },
      {
        tenor: "THIRTY-SIX-MONTH",
        yieldLabel: "ANNUAL YIELD, FIXED",
        specs: [
          { label: "Minimum", value: `100 ${TOKEN_SYMBOL}` },
          { label: "Lock period", value: "36 months" },
          { label: "Compounding", value: "Monthly" },
          { label: "Early exit", value: "10% penalty" },
          { label: "Pension at $10k", value: "$67/month" },
        ],
        specLink: "Instrument specification",
      },
      {
        tenor: "SIXTY-MONTH",
        yieldLabel: "ANNUAL YIELD, FIXED",
        specs: [
          { label: "Minimum", value: `100 ${TOKEN_SYMBOL}` },
          { label: "Lock period", value: "60 months" },
          { label: "Compounding", value: "Monthly" },
          { label: "Early exit", value: "10% penalty" },
          { label: "Pension at $10k", value: "$100/month" },
        ],
        specLink: "Instrument specification",
      },
    ],
  },
  mechanics: {
    eyebrow: "MECHANICS",
    headline: "Yield, traced to its source.",
    subhead:
      "Every basis point paid by the protocol is sourced from a single, verifiable origin: the sale of computational capacity to the network.",
    steps: [
      {
        n: "01",
        title: "STAKE",
        body: "Capital is committed to a tenor of 12, 36, or 60 months.",
      },
      {
        n: "02",
        title: "PROVISION",
        body: "The protocol allocates compute resources across registered infrastructure nodes.",
      },
      {
        n: "03",
        title: "UTILISE",
        body: "External parties purchase computational capacity, settling in USDC.",
      },
      {
        n: "04",
        title: "DISTRIBUTE",
        body: "Yield is distributed: 60% to node operators, 20% to pension holders, 20% to treasury.",
      },
    ],
    footnote:
      "All distributions are executed by audited smart contracts on Ethereum mainnet. No administrator has authority to alter the allocation.",
  },
  ledger: {
    headline: "Everything is ledgered.",
    title: "PROTOCOL STATE",
    rows: [
      {
        left: "Total value locked",
        leftVal: "$0.00M",
        right: "Active instruments",
        rightVal: "0",
      },
      {
        left: "Pension holders",
        leftVal: "0",
        right: "Infrastructure nodes",
        rightVal: "0",
      },
      {
        left: "Yield distributed (all time)",
        leftVal: "$0.00M",
        right: "Protocol revenue (30d)",
        rightVal: "$0.00M",
      },
    ],
    footer:
      "Contract addresses · Audit reports · Governance proposals → view complete ledger",
  },
  governance: {
    headline: "Governed by holders. Not by us.",
    body: `${PROTOCOL_NAME} is not administered. Protocol parameters — yield rates, treasury allocation, infrastructure partners, fee structures — are set exclusively through token-weighted governance on the BondDAO. The founding team holds no veto. Once the genesis parameters have been ratified, we become holders like any other.`,
    link: "Review active proposals",
  },
  security: {
    eyebrow: "SECURITY",
    headline: "Audited. Ratified. Immutable.",
    columns: [
      {
        firm: "OpenZeppelin",
        report: "AUDIT REPORT — Q1 2025",
        summary: "No critical or high-severity findings. Full report available.",
        cta: "Download PDF",
      },
      {
        firm: "Trail of Bits",
        report: "AUDIT REPORT — Q1 2025",
        summary: "No critical or high-severity findings. Full report available.",
        cta: "Download PDF",
      },
      {
        firm: "Certora",
        report: "AUDIT REPORT — Q1 2025",
        summary: "No critical or high-severity findings. Full report available.",
        cta: "Download PDF",
      },
    ],
  },
  closing: {
    headlineLine1: "A pension that outlives",
    headlineLine2: "its institution.",
    body: `${PROTOCOL_NAME} exists as code. It requires no custodian, no administrator, and no trust beyond that placed in the Ethereum network itself. The protocol will continue to distribute yield to its holders so long as the network continues to exist — a duration that, by every available measure, exceeds the lifespan of any contemporary financial institution.`,
    cta: "Access the Protocol",
    finePrint: `Contracts verified on Etherscan`,
  },
  footer: {
    tagline: "Infrastructure as Pension.",
    columns: {
      protocol: {
        title: "PROTOCOL",
        links: [
          { href: "#instruments", label: "Instruments" },
          { href: "#mechanics", label: "Mechanics" },
          { href: "#ledger", label: "Ledger" },
        ],
      },
      governance: {
        title: "GOVERNANCE",
        links: [
          { href: "#governance", label: "BondDAO" },
          { href: "#governance", label: "Proposals" },
          { href: "#governance", label: "Treasury" },
        ],
      },
      research: {
        title: "RESEARCH",
        links: [
          { href: "#research", label: "Whitepaper" },
          { href: "#security", label: "Audits" },
          { href: "#research", label: "Publications" },
        ],
      },
      contact: {
        title: "CONTACT",
        email: CONTACT_EMAIL,
      },
    },
    disclaimer:
      "EtherBonds Protocol. Deployed to Ethereum Mainnet · Optimism.\nThis is not an offering of securities. The $BOND token is a utility instrument. Participants should consult qualified counsel.",
    version: "EtherBonds Protocol · Protocol v1.0.0 · Released MMXXVI",
  },
  research: {
    eyebrow: "RESEARCH",
    headline: "Publications and model documentation.",
    body:
      "The whitepaper sets out the economic design, risk factors, and governance boundaries of the protocol. Supplementary notes cover parameter selection, stress scenarios, and the operational assumptions underpinning yield forecasts.",
    whitepaper: "Read the whitepaper",
    publications: "Browse publications",
  },
  documentation: {
    eyebrow: "DOCUMENTATION",
    headline: "Technical reference for integrators and auditors.",
    body:
      "Contract interfaces, deployment manifests, and change logs are maintained alongside the on-chain deployment. Integrators should treat these documents as the canonical description of behaviour at each release tag.",
    docs: "Open documentation",
  },
  anchors: {
    protocol: "protocol",
    documentation: "documentation",
    research: "research",
    ledger: "ledger",
    mechanics: "mechanics",
    security: "security",
    governance: "governance",
  },
  aria: {
    skipToContent: "Skip to main content",
  },
} as const;
