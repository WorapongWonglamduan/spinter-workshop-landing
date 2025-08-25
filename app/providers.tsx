"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#7fba00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
