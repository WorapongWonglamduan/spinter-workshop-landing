"use client";

import { useEffect, useRef } from "react";


export default function HomePage() {
  // สร้าง refs แยกก่อน
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // คำนวณความสูงที่แท้จริงของหน้าจอ
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // ตั้งค่าเริ่มต้น
    setVh();
    
    // อัพเดทเมื่อมีการเปลี่ยนขนาดหน้าจอ
    window.addEventListener('resize', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Width Banner */}
      <section ref={heroRef} className="relative w-full h-screen" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-blue-900">
          <div className="absolute inset-0 bg-[url('/images/SP-COMPANY-PROFILE-2025-01.png')] bg-cover bg-[position:65%_center] md:bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/70 md:to-blue-900/50"></div>
        </div>
      </section>
      

    </div>
  );
}
