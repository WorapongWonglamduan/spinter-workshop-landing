"use client";

import Navbar from "@/components/Navbar";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#1e40af"
        height={6}
        showSpinner={false}
        // shadow="0 0 20px #1e40af, 0 0 10px #1e40af"
        easing="linear"
        speed={100}
        showAtBottom={false}
        zIndex={50}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
