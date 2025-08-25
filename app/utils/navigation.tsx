"use client";

import { useRouter as useNextRouter } from "next/navigation";
import { useCallback } from "react";

export function useRouter() {
  const router = useNextRouter();

  const push = useCallback(
    (href: string, delayMs: number = 1000) => {
      setTimeout(() => {
        router.push(href);
      }, delayMs);
    },
    [router]
  );

  const back = useCallback(
    (delayMs: number = 1000) => {
      setTimeout(() => {
        router.back();
      }, delayMs);
    },
    [router]
  );

  const forward = useCallback(
    (delayMs: number = 1000) => {
      setTimeout(() => {
        router.forward();
      }, delayMs);
    },
    [router]
  );

  return {
    ...router,
    push,
    back,
    forward,
  };
}
