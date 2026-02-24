"use client";

import React from "react";
import DelayedLink from "./DelayedLink";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  // รายการเมนูสำหรับ Footer
  const menuItems = [
    { name: tNav('home'), href: "/" },
    { name: tNav('ourTeam'), href: "/our-team" },
    { name: tNav('services'), href: "/services" },
    { name: tNav('contact'), href: "/contact" },
  ];

  return (
    <footer className="bg-[#213559] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-[#213559] font-bold text-sm">SP</span>
              </div> */}
              <div className="font-bold text-xl">{t('companyName')}</div>
            </div>
            <p className="text-[#dbeafe] mb-4">
              {t('companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-[#182a45] pb-2">{t('quickLinks')}</h3>
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
            <h3 className="text-xl font-bold mb-4 border-b border-[#182a45] pb-2">{t('contactUs')}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#eff6ff]">{t('location')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="text-[#eff6ff]">Tel/Fax: {t('telFax')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[#eff6ff]">Tax ID: {t('taxId')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#eff6ff]">{t('email')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#eff6ff]">{t('phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#93c5fd] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-[#eff6ff]">
                  <div>{t('businessHours.weekdays')}</div>
                  <div>{t('businessHours.weekend')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#182a45] py-4">
        <div className="container mx-auto px-4 text-center text-[#dbeafe]">
          <p>&copy; {new Date().getFullYear()} SP INTER SERVICE & SUPPLY CO.,LTD. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
