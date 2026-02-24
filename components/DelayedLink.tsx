"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ReactNode, useState } from "react";

interface DelayedLinkProps {
  href: string;
  delay?: number;
  children: ReactNode;
  className?: string;
  showLoading?: boolean;
  callback?: () => void;
}

export default function DelayedLink({
  href,
  delay = 500,
  className = "",
  children,
  callback,
  showLoading = false,
}: DelayedLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  
  // Add locale prefix if not already present and not a hash link
  const getLocalizedHref = (path: string) => {
    if (path.startsWith('#') || path.startsWith(`/${locale}/`)) {
      return path;
    }
    return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
  };
  
  const localizedHref = getLocalizedHref(href);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    callback?.();
    
    // ถ้าเป็นการ scroll ภายในหน้าเดียวกัน
    if (href.startsWith('#') || (href.includes('#') && pathname === href.split('#')[0])) {
      const sectionId = href.includes('#') ? href.split('#')[1] : href.substring(1);
      const section = document.getElementById(sectionId);
      
      if (section) {
        if (showLoading) setIsLoading(true);
        setTimeout(() => {
          // คำนวณ offset สำหรับ navbar (ประมาณ 80px)
          const navbarOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
          
          // เลื่อนไปยังตำแหน่งที่คำนวณแล้ว
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          if (showLoading) setIsLoading(false);
        }, delay);
        return;
      }
    }
    
    // ถ้าเป็นการนำทางไปหน้าอื่น
    if (showLoading) setIsLoading(true);
    setTimeout(() => {
      router.push(localizedHref);
    }, delay);
  };

  return (
    <Link href={localizedHref} onClick={handleClick} className={className}>
      <div className="relative inline-flex items-center">
        {children}
        {isLoading && showLoading && (
          <span className="ml-2 inline-block animate-spin">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
      </div>
    </Link>
  );
}
