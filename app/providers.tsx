"use client";

import Navbar from "@/components/Navbar";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#1e40af"
        height={4}
        showSpinner={false}
        shadow="0 0 20px #1e40af, 0 0 10px #1e40af"
        easing="linear"
        speed={100}
        showAtBottom={false}
      />
      <Navbar />
      {children}
    </>
  );
}
