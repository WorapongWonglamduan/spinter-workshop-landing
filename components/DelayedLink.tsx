"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface DelayedLinkProps {
  href: string;
  delay?: number;
  children: ReactNode;
  className?: string;
  showLoading?: boolean;
}

export default function DelayedLink({
  href,
  delay = 500,
  className = "",
  children,
}: DelayedLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setTimeout(() => {
      router.push(href);
    }, delay);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
