# คู่มือการใช้งาน LoadingBar Component

## การติดตั้งและการใช้งานเบื้องต้น

LoadingBar เป็น component ที่ใช้สำหรับแสดงสถานะการโหลดข้อมูลในรูปแบบของแถบความคืบหน้า (Progress Bar) ที่ด้านบนของหน้าเว็บ คล้ายกับที่เห็นในเว็บไซต์ยอดนิยมต่างๆ

### การนำเข้า Component

```tsx
import LoadingBar from '@/components/LoadingBar';
```

### การใช้งานพื้นฐาน

```tsx
<LoadingBar />
```

## คุณสมบัติ (Props)

LoadingBar รับ props ดังต่อไปนี้:

| Props | ประเภท | ค่าเริ่มต้น | คำอธิบาย |
|-------|--------|------------|----------|
| `color` | string | '#ffcc00' | สีของแถบความคืบหน้า |
| `height` | number | 4 | ความสูงของแถบความคืบหน้า (หน่วย: พิกเซล) |
| `duration` | number | 2000 | ระยะเวลาในการแสดงอนิเมชัน (หน่วย: มิลลิวินาที) |
| `autoHide` | boolean | false | ซ่อนแถบความคืบหน้าโดยอัตโนมัติเมื่อเสร็จสิ้น |

## ตัวอย่างการใช้งาน

### การปรับแต่งสีและความสูง

```tsx
<LoadingBar color="#7fba00" height={6} />
```

### การปรับระยะเวลาในการแสดงอนิเมชัน

```tsx
<LoadingBar duration={3000} />
```

### การซ่อนแถบความคืบหน้าโดยอัตโนมัติ

```tsx
<LoadingBar autoHide={true} />
```

## การใช้งานร่วมกับ Next.js App Router

### การใช้งานใน loading.tsx

Next.js App Router มีไฟล์พิเศษชื่อ `loading.tsx` ที่จะแสดงเมื่อหน้าเว็บกำลังโหลด คุณสามารถใช้ LoadingBar ในไฟล์นี้ได้ดังนี้:

```tsx
// app/loading.tsx
import LoadingBar from '@/components/LoadingBar';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoadingBar color="#7fba00" height={4} duration={3000} />
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">กำลังโหลด...</h2>
        <p className="text-sm text-gray-500 mt-2">โปรดรอสักครู่</p>
      </div>
    </div>
  );
}
```

## การควบคุม LoadingBar ด้วยตนเอง

หากต้องการควบคุม LoadingBar ด้วยตนเอง คุณสามารถใช้ state ของ React ได้ดังนี้:

```tsx
'use client';

import { useState } from 'react';
import LoadingBar, { completeLoading } from '@/components/LoadingBar';

export default function MyComponent() {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // เริ่มการโหลด
  const startLoading = () => {
    setIsAnimating(true);
    setProgress(0);
    // ทำสิ่งที่ต้องการ...
  };
  
  // เสร็จสิ้นการโหลด
  const finishLoading = () => {
    completeLoading(setProgress, setIsAnimating);
  };
  
  return (
    <div>
      {isAnimating && <LoadingBar />}
      <button onClick={startLoading}>เริ่มการโหลด</button>
      <button onClick={finishLoading}>เสร็จสิ้นการโหลด</button>
    </div>
  );
}
```

## ตัวอย่างการใช้งานจริง

คุณสามารถดูตัวอย่างการใช้งานจริงได้ที่หน้า `/loading-example` ซึ่งมีการจำลองการโหลดข้อมูลและแสดงความคืบหน้าแบบต่างๆ

## ข้อควรระวัง

1. LoadingBar เป็น Client Component จึงต้องใช้กับหน้าที่มี directive `'use client'` เท่านั้น
2. หากใช้ใน `loading.tsx` ของ Next.js ไม่จำเป็นต้องใส่ `'use client'` เนื่องจาก Next.js จะจัดการให้โดยอัตโนมัติ
3. ควรกำหนดค่า `z-index` ที่เหมาะสมหากมีองค์ประกอบอื่นที่อาจทับกับ LoadingBar
