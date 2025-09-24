"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {
  // สร้าง refs แยกก่อน
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // คำนวณความสูงที่แท้จริงของหน้าจอ
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // ตั้งค่าเริ่มต้น
    setVh();

    // อัพเดทเมื่อมีการเปลี่ยนขนาดหน้าจอ
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Width Banner */}
      <section
        ref={heroRef}
        className="relative w-full h-[20vh]  md:h-[40vh] lg:h-[50vh] xl:h-screen"
      >
        {/* Hero Background Image - ใช้ relative แทน absolute */}
        <div className="w-full h-full relative">
          <div className="w-full h-full bg-[url('/images/SP-COMPANY-PROFILE-2025-01.png')] bg-cover bg-center"></div>
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/30"></div>
        </div>
      </section>
    </div>
  );
}
