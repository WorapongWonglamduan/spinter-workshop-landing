"use client";

import Navbar from "@/components/Navbar";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#2563eb"
        height={6}
        showSpinner={false}
        shadow="0 0 10px #2563eb, 0 0 5px #2563eb"
        easing="linear"
        speed={100}
        showAtBottom={false}
        zIndex={9999}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
