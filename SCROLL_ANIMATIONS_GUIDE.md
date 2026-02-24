# 🎬 Scroll Transform Animations Guide

## ✨ ภาพรวม

เพิ่ม **scroll-based transform animations** ที่สวยงามและน่าประทับใจให้กับเว็บไซต์ โดยใช้ Framer Motion เพื่อสร้างเอฟเฟกต์การเคลื่อนไหวที่ตอบสนองกับการเลื่อนหน้าจอ

## 🎯 Animation Components ที่สร้างขึ้น

### 1. **ParallaxScroll** - การเคลื่อนไหวแบบ Parallax
```tsx
<ParallaxScroll offset={100}>
  <YourContent />
</ParallaxScroll>
```
- **offset**: ระยะการเคลื่อนที่ (px) - ค่าบวก = เคลื่อนลง, ค่าลบ = เคลื่อนขึ้น
- ใช้กับ: รูปภาพพื้นหลัง, การ์ด, เนื้อหาที่ต้องการให้มีความลึก

**ตัวอย่างการใช้งาน:**
```tsx
// รูปภาพเคลื่อนลงช้ากว่าเนื้อหา
<ParallaxScroll offset={100}>
  <Image src="/hero.jpg" />
</ParallaxScroll>

// พื้นหลังเคลื่อนขึ้นช้ากว่าเนื้อหา
<ParallaxScroll offset={-80}>
  <BackgroundImage />
</ParallaxScroll>
```

### 2. **ScrollReveal** - เปิดเผยเนื้อหาเมื่อเลื่อนเข้ามา
```tsx
<ScrollReveal direction="up" delay={0.2}>
  <YourContent />
</ScrollReveal>
```
- **direction**: ทิศทางการเคลื่อนไหว - `"up"`, `"down"`, `"left"`, `"right"`
- **delay**: หน่วงเวลาก่อนเริ่มแอนิเมชัน (วินาที)
- ใช้กับ: หัวข้อ, ข้อความ, ส่วนต่างๆ ของหน้าเว็บ

**ตัวอย่างการใช้งาน:**
```tsx
// เนื้อหาเลื่อนขึ้นมา
<ScrollReveal direction="up">
  <h2>Company Profile</h2>
</ScrollReveal>

// เนื้อหาเลื่อนจากซ้าย
<ScrollReveal direction="left">
  <ImageSection />
</ScrollReveal>

// เนื้อหาเลื่อนจากขวาพร้อมหน่วงเวลา
<ScrollReveal direction="right" delay={0.3}>
  <TextContent />
</ScrollReveal>
```

### 3. **ScrollRotate** - หมุนเมื่อเลื่อน
```tsx
<ScrollRotate rotation={15}>
  <YourContent />
</ScrollRotate>
```
- **rotation**: มุมการหมุนสูงสุด (องศา)
- ใช้กับ: การ์ด, ไอคอน, องค์ประกอบที่ต้องการความเคลื่อนไหวพิเศษ

**ตัวอย่างการใช้งาน:**
```tsx
// การ์ดหมุนเล็กน้อยเมื่อเลื่อน
<ScrollRotate rotation={5}>
  <Card />
</ScrollRotate>
```

### 4. **ScrollScale** - ขยาย/ย่อเมื่อเลื่อน
```tsx
<ScrollScale scaleRange={[0.8, 1.2]}>
  <YourContent />
</ScrollScale>
```
- **scaleRange**: ช่วงการขยาย `[เริ่มต้น, สิ้นสุด]`
- ใช้กับ: รูปภาพ, การ์ด, องค์ประกอบที่ต้องการเน้น

**ตัวอย่างการใช้งาน:**
```tsx
// ขยายจาก 90% เป็น 105%
<ScrollScale scaleRange={[0.9, 1.05]}>
  <Image src="/product.jpg" />
</ScrollScale>

// ขยายจาก 95% เป็น 100% (subtle)
<ScrollScale scaleRange={[0.95, 1]}>
  <Section />
</ScrollScale>
```

### 5. **ScrollProgressBar** - แถบแสดงความคืบหน้าการเลื่อน
```tsx
<ScrollProgressBar />
```
- แสดงที่ด้านบนของหน้าเว็บ
- อัปเดตตามตำแหน่งการเลื่อน
- ใช้สีไล่ระดับตามธีมเว็บไซต์

**ตัวอย่างการใช้งาน:**
```tsx
// วางไว้ที่ด้านบนสุดของ component หลัก
export default function HomePage() {
  return (
    <div>
      <ScrollProgressBar />
      {/* เนื้อหาอื่นๆ */}
    </div>
  );
}
```

### 6. **ScrollFade** - จางหายเมื่อเลื่อน
```tsx
<ScrollFade fadeRange={[0, 1]}>
  <YourContent />
</ScrollFade>
```
- **fadeRange**: ช่วงความโปร่งใส `[เริ่มต้น, สิ้นสุด]`
- ใช้กับ: เนื้อหาที่ต้องการให้จางหายเมื่อเลื่อนผ่าน

**ตัวอย่างการใช้งาน:**
```tsx
// จางเข้า-จางออก
<ScrollFade fadeRange={[0, 1]}>
  <BackgroundElement />
</ScrollFade>
```

### 7. **ScrollPerspective** - มุมมอง 3D เมื่อเลื่อน
```tsx
<ScrollPerspective>
  <YourContent />
</ScrollPerspective>
```
- สร้างเอฟเฟกต์ 3D perspective
- ใช้กับ: ส่วนพิเศษที่ต้องการความโดดเด่น

**ตัวอย่างการใช้งาน:**
```tsx
// เอฟเฟกต์ 3D สำหรับ hero section
<ScrollPerspective>
  <HeroContent />
</ScrollPerspective>
```

### 8. **ScrollBlur** - เบลอเมื่อเลื่อน
```tsx
<ScrollBlur>
  <YourContent />
</ScrollBlur>
```
- สร้างเอฟเฟกต์เบลอตามการเลื่อน
- ใช้กับ: พื้นหลัง, องค์ประกอบตกแต่ง

## 🎨 การใช้งานใน HomePage

### Hero Section
```tsx
<EnhancedHero />
```
- มี parallax zoom effect
- Staggered text animations
- Animated scroll indicator

### Company Profile Section
```tsx
<ParallaxScroll offset={100}>
  <ScrollScale scaleRange={[0.9, 1.05]}>
    <Image />
  </ScrollScale>
</ParallaxScroll>

<ScrollReveal direction="right">
  <Content />
</ScrollReveal>
```
- รูปภาพมี parallax + scale effect
- เนื้อหาเลื่อนเข้ามาจากขวา

### Company Goal Section
```tsx
<ParallaxScroll offset={-80}>
  <BackgroundImage />
</ParallaxScroll>

<ScrollPerspective>
  <GoalContent />
</ScrollPerspective>
```
- พื้นหลังมี parallax เคลื่อนขึ้น
- เนื้อหามี 3D perspective effect

### Services Section
```tsx
<ScrollScale scaleRange={[0.95, 1]}>
  <ServiceCard />
</ScrollScale>

<ScrollRotate rotation={5}>
  <AnimatedCard>
    <WorkshopItem />
  </AnimatedCard>
</ScrollRotate>
```
- การ์ดบริการมี scale effect
- รายการ workshop มี rotation effect

### Team Section
```tsx
<ParallaxScroll offset={30}>
  <AnimatedCard>
    <TeamMember />
  </AnimatedCard>
</ParallaxScroll>
```
- การ์ดทีมมี parallax effect เล็กน้อย

### Contact Section
```tsx
<ScrollReveal direction="left">
  <ContactForm />
</ScrollReveal>

<ParallaxScroll offset={50}>
  <ScrollReveal direction="right">
    <ContactInfo />
  </ScrollReveal>
</ParallaxScroll>
```
- ฟอร์มเลื่อนเข้ามาจากซ้าย
- ข้อมูลติดต่อมี parallax + เลื่อนจากขวา

## 🎭 เทคนิคการใช้งานขั้นสูง

### 1. **Nested Animations** - ซ้อนแอนิเมชัน
```tsx
<ParallaxScroll offset={100}>
  <ScrollScale scaleRange={[0.9, 1.05]}>
    <ScrollRotate rotation={3}>
      <YourContent />
    </ScrollRotate>
  </ScrollScale>
</ParallaxScroll>
```
ผลลัพธ์: เคลื่อนที่แบบ parallax + ขยาย + หมุนพร้อมกัน

### 2. **Staggered Reveals** - เปิดเผยทีละชิ้น
```tsx
{items.map((item, index) => (
  <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
    <Card>{item}</Card>
  </ScrollReveal>
))}
```
ผลลัพธ์: การ์ดแต่ละใบปรากฏทีละใบตามลำดับ

### 3. **Directional Parallax** - Parallax หลายทิศทาง
```tsx
<ParallaxScroll offset={100}>  {/* เคลื่อนลง */}
  <LeftContent />
</ParallaxScroll>

<ParallaxScroll offset={-80}>  {/* เคลื่อนขึ้น */}
  <RightContent />
</ParallaxScroll>
```
ผลลัพธ์: เนื้อหาซ้าย-ขวาเคลื่อนที่ตรงข้ามกัน

## ⚡ Performance Tips

1. **ใช้ `once: true`** - ป้องกันการ re-animate
2. **Viewport margin** - ตั้งค่า offset เพื่อเริ่ม animation ก่อนเข้าหน้าจอ
3. **GPU Acceleration** - ใช้ transform และ opacity
4. **Spring Physics** - ใช้ `useSpring` สำหรับการเคลื่อนไหวที่นุ่มนวล

## 🎨 Customization

### ปรับแต่ง Spring Physics
```tsx
const smoothY = useSpring(y, { 
  stiffness: 100,  // ความแข็ง (เพิ่ม = เร็วขึ้น)
  damping: 30      // การหน่วง (เพิ่ม = นุ่มนวลขึ้น)
});
```

### ปรับแต่ง Scroll Offset
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
  // ["start end"] = เริ่มเมื่อ element เริ่มเข้าหน้าจอ
  // ["end start"] = จบเมื่อ element ออกจากหน้าจอ
});
```

## 📊 Animation Ranges

### Transform Ranges
```tsx
// Subtle (เบา)
const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

// Medium (กลาง)
const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

// Strong (แรง)
const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
```

### Scale Ranges
```tsx
// Subtle
scaleRange={[0.95, 1.05]}

// Medium
scaleRange={[0.9, 1.1]}

// Strong
scaleRange={[0.8, 1.2]}
```

### Rotation Ranges
```tsx
// Subtle
rotation={3}

// Medium
rotation={10}

// Strong
rotation={20}
```

## 🎯 Best Practices

1. **ใช้ Parallax สำหรับพื้นหลัง** - สร้างความลึก
2. **ใช้ ScrollReveal สำหรับเนื้อหา** - ดึงดูดความสนใจ
3. **ใช้ ScrollRotate แบบ subtle** - หมุนเล็กน้อย (3-5 องศา)
4. **ใช้ ScrollScale สำหรับเน้น** - ขยายเมื่อเข้าสู่ viewport
5. **รวม animations หลายแบบ** - สร้างเอฟเฟกต์ที่ซับซ้อน
6. **ใช้ delay แบบ staggered** - สร้างจังหวะ
7. **ทดสอบบนอุปกรณ์จริง** - ตรวจสอบ performance

## 🚀 ผลลัพธ์

เว็บไซต์ตอนนี้มี:
- ✅ **Scroll Progress Bar** - แถบแสดงความคืบหน้าด้านบน
- ✅ **Parallax Effects** - ความลึกและมิติ
- ✅ **Reveal Animations** - เปิดเผยเนื้อหาอย่างสวยงาม
- ✅ **Rotation Effects** - การหมุนเล็กน้อยที่น่าสนใจ
- ✅ **Scale Effects** - การขยายที่ดึงดูดสายตา
- ✅ **3D Perspective** - มุมมอง 3 มิติ
- ✅ **Smooth Transitions** - การเคลื่อนไหวที่นุ่มนวล
- ✅ **Performance Optimized** - ใช้ GPU acceleration

## 📱 Responsive Behavior

Animations ทั้งหมดทำงานได้ดีบนทุกอุปกรณ์:
- **Desktop**: เอฟเฟกต์เต็มรูปแบบ
- **Tablet**: เอฟเฟกต์ปานกลาง
- **Mobile**: เอฟเฟกต์เบา (ลด offset และ range)

## 🎬 สรุป

การเพิ่ม scroll transform animations ทำให้เว็บไซต์:
1. **น่าสนใจมากขึ้น** - ดึงดูดความสนใจผู้เยี่ยมชม
2. **ทันสมัย** - ตามเทรนด์เว็บไซต์ปัจจุบัน
3. **มีความลึก** - สร้างมิติและความน่าสนใจ
4. **ใช้งานง่าย** - Components สามารถนำไปใช้ซ้ำได้
5. **Performance ดี** - ใช้ GPU acceleration

ทุก animation ถูกออกแบบมาให้ **สวยงาม ลื่นไหล และไม่รบกวนการใช้งาน** 🎉
