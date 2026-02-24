# 📸 Workshop Photos Implementation Guide

## ✅ สรุปการใช้งาน

ได้เพิ่มรูปภาพจริงของ **welding workshop training** จากโฟลเดอร์ `/public/images/photos` เข้าไปในเว็บไซต์แล้ว พร้อม UI ที่สวยงามและทันสมัย

## 📁 รูปภาพที่มี

มีรูปภาพทั้งหมด **113 รูป** ใน:
```
D:\MAMP\htdocs\general\spinter-workshop\spinter-workshop-landing\public\images\photos
```

ชื่อไฟล์: `LINE_ALBUM_7169_260224_1.jpg` ถึง `LINE_ALBUM_7169_260224_113.jpg`

## 🎨 Components ที่สร้างขึ้น

### 1. **WorkshopGallery** (`@/components/WorkshopGallery.tsx`)

Gallery แบบเต็มรูปแบบพร้อม:
- ✅ **Featured Image** - รูปใหญ่ด้านบนพร้อม overlay
- ✅ **Grid Gallery** - 16 รูปในรูปแบบ grid 2x3x4 columns
- ✅ **Lightbox Modal** - คลิกรูปเพื่อดูแบบเต็มหน้าจอ
- ✅ **Hover Effects** - ซูมและแสดงไอคอนเมื่อ hover
- ✅ **Scroll Animations** - fade in และ stagger delays
- ✅ **View More Button** - แสดงจำนวนรูปทั้งหมด

**การใช้งาน:**
```tsx
<WorkshopGallery
  photos={workshopPhotos}
  title="WELDING WORKSHOP TRAINING"
  description="Our professional welding training programs"
/>
```

**Props:**
- `photos: string[]` - array ของ path รูปภาพ
- `title?: string` - หัวข้อ (default: "WELDING WORKSHOP TRAINING")
- `description?: string` - คำอธิบาย

### 2. **WorkshopShowcase** (`@/components/WorkshopShowcase.tsx`)

Masonry grid layout พร้อม:
- ✅ **Large Featured Image** - 2x2 grid span พร้อม hover overlay
- ✅ **Small Images** - 5 รูปเล็กรอบๆ
- ✅ **Stats Section** - แสดงสถิติ 4 ข้อ
- ✅ **Background Pattern** - SVG pattern เบาๆ
- ✅ **Parallax Effects** - แต่ละรูปมี parallax offset ต่างกัน
- ✅ **Hover Animations** - scale, overlay, และ icon

**การใช้งาน:**
```tsx
<WorkshopShowcase />
```

**Stats ที่แสดง:**
- 500+ Trained Welders
- 15+ Years Experience
- 100% Safety Record
- 50+ Workshop Bays

## 🏗️ การใช้งานใน HomePage

### รูปภาพที่เลือกใช้

**Workshop Training Photos** (17 รูป):
```tsx
const workshopPhotos = [
  "/images/photos/LINE_ALBUM_7169_260224_1.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_5.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_10.jpg",
  // ... ทุกๆ 5 รูป จนถึง 80
];
```

**Facility Photos** (4 รูป สำหรับ BAY, OVERVIEW, STORAGE, MEETING ROOM):
```tsx
const facilityPhotos = [
  "/images/photos/LINE_ALBUM_7169_260224_2.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_3.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_4.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_6.jpg",
];
```

### ตำแหน่งที่แสดง

1. **Workshop Showcase Section** - หลัง Company Goal
   - Masonry grid layout
   - Stats section
   - 6 รูปภาพ

2. **Workshop Cards** - ใน Services Section
   - BAY, OVERVIEW, STORAGE, MEETING ROOM
   - ใช้รูปจริงแทน placeholder

3. **Workshop Gallery Section** - หลัง Services Section
   - Featured image + 16 รูป grid
   - Lightbox modal

## 🎯 Features ที่เพิ่มเข้ามา

### 1. **Lightbox Modal**
- คลิกรูปเพื่อดูแบบเต็มหน้าจอ
- ปิดได้ด้วยปุ่ม X หรือคลิกนอกรูป
- Smooth fade in/out animation
- Responsive และ mobile-friendly

### 2. **Hover Effects**
- **Image Zoom** - รูปซูมเมื่อ hover (scale: 1.1)
- **Overlay** - gradient overlay ปรากฏ
- **Icon** - แสดงไอคอนขยายหรือดู
- **Lift Effect** - card ยกขึ้นเล็กน้อย

### 3. **Scroll Animations**
- **Staggered Delays** - รูปปรากฏทีละรูปตามลำดับ
- **Parallax** - รูปเคลื่อนที่ด้วยความเร็วต่างกัน
- **Fade In Up** - เลื่อนขึ้นพร้อมจางเข้า
- **Scale** - ขยายจาก 0.8 เป็น 1

### 4. **Responsive Design**
- **Mobile** (1 column)
- **Tablet** (2-3 columns)
- **Desktop** (4 columns)
- ปรับขนาดรูปอัตโนมัติ

## 🎨 UI Design Patterns

### Featured Image Layout
```tsx
<div className="relative h-[500px] rounded-2xl overflow-hidden">
  <Image src={photo} fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#213559]/80">
    <div className="p-8 text-white">
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</div>
```

### Grid Gallery Layout
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {photos.map((photo, index) => (
    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image src={photo} fill className="object-cover" />
      <div className="hover:bg-[#213559]/40">
        <Icon />
      </div>
    </div>
  ))}
</div>
```

### Masonry Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Large: col-span-2 row-span-2 */}
  <div className="lg:col-span-2 lg:row-span-2 h-[600px]">
    <Image />
  </div>
  
  {/* Small: normal grid items */}
  {photos.map(photo => (
    <div className="h-[285px]">
      <Image />
    </div>
  ))}
</div>
```

## 📊 Image Optimization

### Next.js Image Component
ใช้ `next/image` สำหรับ:
- ✅ **Automatic Optimization** - ปรับขนาดและคุณภาพอัตโนมัติ
- ✅ **Lazy Loading** - โหลดเมื่อเลื่อนเข้ามาใกล้
- ✅ **WebP Format** - แปลงเป็น WebP อัตโนมัติ
- ✅ **Responsive Images** - ปรับขนาดตามหน้าจอ
- ✅ **Priority Loading** - featured images ใช้ `priority`

### Image Properties
```tsx
<Image
  src="/images/photos/photo.jpg"
  alt="Description"
  fill                    // เต็มพื้นที่ parent
  className="object-cover" // ครอบคลุมพื้นที่
  priority               // โหลดก่อน (สำหรับรูปสำคัญ)
/>
```

## 🎬 Animation Details

### Framer Motion Variants
```tsx
// Lightbox Modal
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.8 }}

// Card Hover
whileHover={{ y: -8, scale: 1.02 }}
transition={{ duration: 0.3 }}

// Staggered Grid
{photos.map((photo, index) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  />
))}
```

### CSS Transitions
```css
/* Image Zoom */
.group-hover:scale-110
transition-transform duration-500

/* Overlay */
.group-hover:bg-[#213559]/40
transition-all duration-300

/* Icon Fade */
.opacity-0 group-hover:opacity-100
transition-opacity duration-300
```

## 🔧 Customization

### เพิ่มรูปภาพเพิ่มเติม
```tsx
const morePhotos = [
  "/images/photos/LINE_ALBUM_7169_260224_85.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_90.jpg",
  "/images/photos/LINE_ALBUM_7169_260224_95.jpg",
  // เพิ่มได้ไม่จำกัด
];
```

### เปลี่ยนจำนวนรูปที่แสดง
```tsx
// แสดง 20 รูปแทน 16
{photos.slice(1, 21).map((photo, index) => (...))}

// แสดงทั้งหมด
{photos.slice(1).map((photo, index) => (...))}
```

### ปรับ Grid Columns
```tsx
// 5 columns บน desktop
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"

// 2 columns บน mobile
className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
```

### เปลี่ยนสีและ Theme
```tsx
// เปลี่ยนสี overlay
className="bg-gradient-to-t from-[#213559]/80"
// เป็น
className="bg-gradient-to-t from-blue-900/80"

// เปลี่ยนสีปุ่ม
className="bg-[#213559] hover:bg-[#263f6b]"
```

## 📱 Responsive Breakpoints

```tsx
// Tailwind CSS Breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large

// Grid Responsive
grid-cols-1           // Mobile: 1 column
md:grid-cols-2        // Tablet: 2 columns
lg:grid-cols-3        // Desktop: 3 columns
lg:grid-cols-4        // Desktop: 4 columns
```

## 🚀 Performance Tips

1. **ใช้ `priority` สำหรับรูปแรก** - โหลดเร็วขึ้น
2. **Lazy load รูปอื่นๆ** - ประหยัด bandwidth
3. **ใช้ `fill` แทน width/height** - responsive ง่าย
4. **ตั้งค่า `sizes`** - optimize responsive images
5. **ใช้ WebP format** - ไฟล์เล็กกว่า JPEG

## 🎉 ผลลัพธ์

เว็บไซต์ตอนนี้มี:
- ✅ **3 Photo Sections** - Showcase, Cards, Gallery
- ✅ **113 รูปพร้อมใช้งาน** - เลือกแสดง 27 รูป
- ✅ **Lightbox Modal** - ดูรูปแบบเต็มหน้าจอ
- ✅ **Smooth Animations** - parallax, hover, scroll
- ✅ **Responsive Design** - ทำงานทุกอุปกรณ์
- ✅ **Optimized Images** - Next.js Image optimization
- ✅ **Professional UI** - สวยงาม ทันสมัย น่าประทับใจ

## 📝 Next Steps

หากต้องการเพิ่มเติม:
1. **Photo Categories** - แยกหมวดหมู่รูป (Training, Equipment, Facilities)
2. **Filter System** - กรองรูปตามหมวดหมู่
3. **Infinite Scroll** - โหลดรูปเพิ่มเมื่อเลื่อนลง
4. **Image Captions** - เพิ่มคำอธิบายแต่ละรูป
5. **Share Buttons** - แชร์รูปบน social media
6. **Download Option** - ดาวน์โหลดรูป

รูปภาพทั้งหมดถูกนำมาใช้อย่างสวยงามและมีประสิทธิภาพแล้ว! 🎊
