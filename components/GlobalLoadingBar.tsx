'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingBar from './LoadingBar';

export default function GlobalLoadingBar() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // เริ่มแสดง LoadingBar เมื่อมีการเปลี่ยนหน้า
    setIsLoading(true);
    
    // ตั้งเวลาให้ซ่อน LoadingBar หลังจาก 2 วินาที
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // ทำงานเมื่อ pathname หรือ searchParams เปลี่ยนแปลง

  return isLoading ? <LoadingBar color="#7fba00" height={4} duration={2000} /> : null;
}
