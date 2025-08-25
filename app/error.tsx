'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // ส่ง error ไปยัง error reporting service
    console.error('เกิดข้อผิดพลาด:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-bold text-red-600 mb-2">Oops!</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            เกิดข้อผิดพลาดบางอย่าง
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            ขออภัย เกิดข้อผิดพลาดในการแสดงหน้านี้
            {error.digest && (
              <span className="block mt-1">
                รหัสข้อผิดพลาด: <code className="bg-gray-100 p-1 rounded">{error.digest}</code>
              </span>
            )}
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <button
            onClick={reset}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ลองอีกครั้ง
          </button>
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            กลับไปหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
