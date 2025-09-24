"use client";

import React from "react";
import DelayedLink from "./DelayedLink";

// ข้อมูลติดต่อสำหรับ Footer
interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  businessHours: {
    weekdays: string;
    weekend: string;
  };
}

export default function Footer() {
  // ข้อมูลติดต่อ (hard-coded เพื่อไม่ต้องพึ่งพา helper)
  const contactInfo: ContactInfo = {
    location: '60 Paya Lebar Road, #11-11 Paya Lebar Square, Singapore 409051',
    email: 'contact@spinterworkshop.com',
    phone: '+65 6123 4567',
    businessHours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      weekend: 'Saturday - Sunday: Closed'
    }
  };

  // รายการเมนูสำหรับ Footer
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" },
    { name: "Services", href: "/services" },
    { name: "Track Record", href: "/track-record" },
    { name: "Open Vacancies", href: "/vacancies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#213559] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-[#213559] font-bold text-sm">SP</span>
              </div>
              <div className="font-bold text-xl">SP INTER SERVICE & SUPPLY</div>
            </div>
            <p className="text-[#dbeafe] mb-4">
              Your trusted partner for offshore success. We specialize in providing top-tier crew and manpower solutions for the demanding wind farm, oil & gas, and deep-sea shipping industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-[#182a45] pb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <DelayedLink 
                    href={item.href} 
                    className="text-[#dbeafe] hover:text-white transition-colors"
                    delay={500}
                  >
                    {item.name}
                  </DelayedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-[#182a45] pb-2">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#eff6ff]">{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#eff6ff]">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#eff6ff]">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-[#eff6ff]">
                  <div>{contactInfo.businessHours.weekdays}</div>
                  <div>{contactInfo.businessHours.weekend}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#182a45] py-4">
        <div className="container mx-auto px-4 text-center text-[#dbeafe]">
          <p>&copy; {new Date().getFullYear()} SP INTER SERVICE & SUPPLY CO.,LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
