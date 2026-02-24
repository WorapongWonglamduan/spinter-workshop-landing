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
        height={4}
        showSpinner={false}
        shadow="0 0 15px #213559, 0 0 8px #263f6b"
        easing="ease"
        speed={200}
        showAtBottom={false}
        zIndex={9999}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
