"use client";

import Navbar from "@/components/Navbar";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#213559"
        height={6}
        showSpinner={false}
        shadow="0 0 10px #263f6b, 0 0 5px #213559"
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
