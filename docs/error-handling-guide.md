# คู่มือการจัดการข้อผิดพลาด (Error Handling) ใน Next.js

## การจัดการข้อผิดพลาดใน Next.js App Router

Next.js มีระบบจัดการข้อผิดพลาดที่มีประสิทธิภาพซึ่งช่วยให้คุณสามารถแสดงข้อมูลที่เป็นประโยชน์แก่ผู้ใช้เมื่อเกิดข้อผิดพลาดในแอปพลิเคชัน ในเอกสารนี้จะอธิบายวิธีการใช้งานคุณสมบัติต่างๆ ของ Next.js ในการจัดการข้อผิดพลาด

### 1. ไฟล์ error.tsx

ไฟล์ `error.tsx` ใช้สำหรับจัดการข้อผิดพลาดที่เกิดขึ้นในส่วน React component ของคุณ โดยจะทำงานเป็น Error Boundary ที่จับข้อผิดพลาดและแสดงหน้า fallback UI แทน

**ตำแหน่งที่ตั้ง:** สามารถวางไว้ในโฟลเดอร์ใดๆ ก็ได้ภายใน app directory เพื่อจัดการข้อผิดพลาดเฉพาะในโฟลเดอร์นั้นและโฟลเดอร์ย่อยของมัน

**ตัวอย่างการใช้งาน:**
```tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>เกิดข้อผิดพลาด!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>ลองอีกครั้ง</button>
    </div>
  );
}
```

**หมายเหตุ:**
- ต้องเป็น Client Component เสมอ (ใช้ 'use client' directive)
- รับ props สองตัวคือ `error` (วัตถุข้อผิดพลาด) และ `reset` (ฟังก์ชันสำหรับพยายามเรนเดอร์อีกครั้ง)
- ไฟล์ error.tsx จะไม่จับข้อผิดพลาดที่เกิดขึ้นในไฟล์ layout.tsx ที่อยู่ในระดับเดียวกัน

### 2. ไฟล์ global-error.tsx

ไฟล์ `global-error.tsx` ใช้สำหรับจัดการข้อผิดพลาดที่เกิดขึ้นในไฟล์ root layout.tsx

**ตำแหน่งที่ตั้ง:** วางไว้ในโฟลเดอร์ root ของ app directory

**ตัวอย่างการใช้งาน:**
```tsx
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>เกิดข้อผิดพลาดร้ายแรง!</h2>
        <p>{error.message}</p>
        <button onClick={reset}>ลองอีกครั้ง</button>
      </body>
    </html>
  );
}
```

**หมายเหตุ:**
- ต้องรวมแท็ก html และ body เนื่องจากจะแทนที่ root layout
- ใช้เฉพาะเมื่อต้องการจัดการข้อผิดพลาดที่เกิดขึ้นใน root layout เท่านั้น
- หากไม่มีการกำหนด global-error.tsx ระบบจะใช้ error.tsx ในระดับ root แทน

### 3. ไฟล์ not-found.tsx

ไฟล์ `not-found.tsx` ใช้สำหรับแสดงเมื่อฟังก์ชัน `notFound()` ถูกเรียกใช้หรือเมื่อ URL ไม่ตรงกับเส้นทางใดๆ

**ตำแหน่งที่ตั้ง:** สามารถวางไว้ในโฟลเดอร์ใดๆ ก็ได้ภายใน app directory

**ตัวอย่างการใช้งาน:**
```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>ไม่พบหน้าที่คุณต้องการ</h2>
      <p>ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา</p>
      <Link href="/">กลับไปหน้าหลัก</Link>
    </div>
  );
}
```

**การเรียกใช้ notFound() ในโค้ด:**
```tsx
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  const { id } = params;
  const product = getProduct(id);
  
  if (!product) {
    notFound(); // จะแสดงหน้า not-found.tsx
  }
  
  return <ProductDetails product={product} />;
}
```

## วิธีการใช้งานในโปรเจคของเรา

1. **การจัดการข้อผิดพลาดทั่วไป**
   - ใช้ไฟล์ `app/error.tsx` สำหรับจัดการข้อผิดพลาดทั่วไปในแอปพลิเคชัน
   - ใช้ไฟล์ `app/global-error.tsx` สำหรับจัดการข้อผิดพลาดในระดับ root layout

2. **การจัดการหน้าไม่พบ (404)**
   - ใช้ไฟล์ `app/not-found.tsx` สำหรับแสดงหน้า 404
   - เรียกใช้ฟังก์ชัน `notFound()` เมื่อไม่พบข้อมูลที่ต้องการ

3. **ตัวอย่างการใช้งาน**
   - ดูตัวอย่างการสร้างข้อผิดพลาดได้ที่ `app/error-example/page.tsx`
   - ดูตัวอย่างการใช้ notFound() ได้ที่ `app/not-found-example/page.tsx`

## ข้อแนะนำเพิ่มเติม

1. **การบันทึกข้อผิดพลาด**
   - ควรบันทึกข้อผิดพลาดไว้เพื่อการแก้ไขในอนาคต
   - พิจารณาใช้บริการบันทึกข้อผิดพลาดเช่น Sentry หรือ LogRocket

2. **การแสดงข้อมูลข้อผิดพลาด**
   - ในสภาพแวดล้อมการผลิต (production) ไม่ควรแสดงรายละเอียดข้อผิดพลาดทั้งหมดแก่ผู้ใช้
   - ใช้ error.digest เพื่ออ้างอิงข้อผิดพลาดโดยไม่ต้องเปิดเผยรายละเอียดทางเทคนิค

3. **การทดสอบ**
   - ทดสอบการจัดการข้อผิดพลาดในสภาพแวดล้อมต่างๆ
   - ตรวจสอบว่า UI สำหรับข้อผิดพลาดแสดงผลอย่างถูกต้องในอุปกรณ์ต่างๆ
