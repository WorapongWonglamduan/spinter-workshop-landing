'use client';

import React, { useEffect, useState } from 'react';

interface LoadingBarProps {
  color?: string;
  height?: number;
  duration?: number;
  autoHide?: boolean;
}

export default function LoadingBar({ 
  color = '#ffcc00', 
  height = 4, 
  duration = 2000,
  autoHide = false
}: LoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      // คำนวณความคืบหน้าโดยใช้ easeInOut เพื่อให้การเคลื่อนไหวดูเป็นธรรมชาติ
      const rawProgress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOut(rawProgress);
      
      // กำหนดความคืบหน้าแบบไม่เป็นเส้นตรง (เร็วในช่วงแรก ช้าลงเมื่อใกล้เสร็จ)
      // เพื่อให้ดูเหมือนกำลังโหลดข้อมูล
      let calculatedProgress;
      
      if (rawProgress < 0.8) {
        // เร็วในช่วงแรก (0-80%)
        calculatedProgress = easedProgress * 80;
      } else {
        // ช้าลงในช่วงท้าย (80-95%)
        calculatedProgress = 80 + (easedProgress - 0.8) * 75;
      }
      
      // จำกัดที่ 95% เพื่อให้ดูเหมือนรอการตอบสนองจากเซิร์ฟเวอร์
      calculatedProgress = Math.min(calculatedProgress, 95);
      
      setProgress(calculatedProgress);
      
      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else if (autoHide) {
        // ถ้า autoHide เป็น true ให้ซ่อน loading bar เมื่อเสร็จสิ้น
        setProgress(100);
        setTimeout(() => setIsAnimating(false), 300);
      }
    };
    
    // เริ่มการเคลื่อนไหว
    if (isAnimating) {
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, isAnimating, autoHide]);
  
  // ฟังก์ชันสำหรับการเคลื่อนไหวแบบ easeInOut
  const easeInOut = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  // สามารถเพิ่มฟังก์ชันสำหรับทำให้โหลดเสร็จสมบูรณ์ได้ที่นี่ถ้าต้องการ

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {isAnimating && (
        <div 
          className="h-[4px] bg-gradient-to-r from-yellow-400 to-yellow-500"
          style={{ 
            height: `${height}px`, 
            width: `${progress}%`, 
            backgroundColor: color,
            transition: 'width 0.2s ease-out'
          }}
        />
      )}
    </div>
  );
}

// ฟังก์ชันสำหรับทำให้โหลดเสร็จสมบูรณ์
export function completeLoading(setProgressFn: React.Dispatch<React.SetStateAction<number>>, setIsAnimatingFn: React.Dispatch<React.SetStateAction<boolean>>) {
  setProgressFn(100);
  setTimeout(() => setIsAnimatingFn(false), 300);
}

// ส่งออก component เพื่อให้สามารถเรียกใช้จากภายนอกได้
