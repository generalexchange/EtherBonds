"use client";

import { usePathname } from "next/navigation";
import SubFooter from "./SubFooter";

export default function SubFooterGate() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <SubFooter />;
}
