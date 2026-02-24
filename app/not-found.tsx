'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23213559' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-2xl w-full space-y-8 text-center relative z-10">
        {/* 404 Number with Animation */}
        <div className="relative">
          <div className="inline-block">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#213559] to-[#263f6b] animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-[#213559] to-[#263f6b]"></div>
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#213559]/10 to-[#263f6b]/10 flex items-center justify-center">
              <svg className="w-16 h-16 text-[#213559]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#263f6b] rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#213559] to-[#263f6b] rounded-full"></div>
            <span className="text-sm font-semibold text-[#263f6b] uppercase tracking-wider">ไม่พบหน้า</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#263f6b] to-[#213559] rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#213559]">
            ไม่พบหน้าที่คุณต้องการ
          </h2>
          
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา หน้านี้อาจถูกย้ายหรือลบออกไปแล้ว
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#213559] to-[#263f6b] hover:from-[#263f6b] hover:to-[#213559] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>กลับไปหน้าหลัก</span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-[#213559] border-2 border-[#213559] hover:bg-[#213559] hover:text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>ติดต่อเรา</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="pt-8 text-sm text-gray-500">
          <p>หรือลองค้นหาสิ่งที่คุณต้องการจากเมนูด้านบน</p>
        </div>
      </div>
    </div>
  );
}
