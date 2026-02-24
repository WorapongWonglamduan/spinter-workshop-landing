"use client";

import DelayedLink from "./DelayedLink";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const isHomePage = pathname === "/" || pathname === `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const switchLanguage = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#213559]/95 backdrop-blur-md shadow-2xl py-3" 
            : "bg-gradient-to-r from-[#213559] via-[#263f6b] to-[#213559] py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <DelayedLink
              href="/"
              className="flex items-center gap-3 text-white cursor-pointer hover:scale-105 transition-all duration-300 group z-10"
              delay={800}
            >
              {/* <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-[#213559] font-bold text-base">SP</span>
              </div> */}
              <div className="hidden lg:block">
                <span className="font-extrabold text-lg tracking-wide">{t('companyName')}</span>
              </div>
              <div className="lg:hidden">
                <span className="font-extrabold text-base">SP INTER</span>
              </div>
            </DelayedLink>

            {/* Navigation Menu - Center */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 border border-white/20">
              <DelayedLink
                href={isHomePage ? "#home" : "/"}
                className="px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer relative group font-medium"
                delay={800}
                callback={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {t('home')}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </DelayedLink>
              <DelayedLink
                href={isHomePage ? "#team" : "/our-team"}
                className="px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer relative group font-medium"
                delay={800}
                callback={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {t('ourTeam')}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </DelayedLink>
              <DelayedLink
                href={isHomePage ? "#services" : "/services"}
                className="px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer relative group font-medium"
                delay={800}
                callback={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {t('services')}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </DelayedLink>
              <DelayedLink
                href={isHomePage ? "#contact" : "/contact"}
                className="px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer relative group font-medium"
                delay={800}
                callback={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {t('contact')}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </DelayedLink>
            </div>

            {/* Language Switcher - Right */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                <button
                  onClick={() => switchLanguage('th')}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                    locale === 'th'
                      ? 'bg-white text-[#213559] shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  TH
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                    locale === 'en'
                      ? 'bg-white text-[#213559] shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        mobileMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-[#182a45]/98 backdrop-blur-md text-white py-4 px-6 shadow-2xl sticky transition-all duration-300 ${
            scrolled ? "top-[60px]" : "top-[72px]"
          } z-50 border-t border-white/10`}
        >
          <div className="flex flex-col gap-4">
            <DelayedLink
              href={isHomePage ? "#home" : "/"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              {t('home')}
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#team" : "/our-team"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              {t('ourTeam')}
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#services" : "/services"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              {t('services')}
            </DelayedLink>
            {/* Track Record - ปิดไว้ก่อน */}
            {/* <DelayedLink
              href="/track-record"
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Track Record
            </DelayedLink> */}
            
            {/* Open Vacancies - ปิดไว้ก่อน */}
            {/* <DelayedLink
              href="/vacancies"
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Open Vacancies
            </DelayedLink> */}
            <DelayedLink
              href={isHomePage ? "#contact" : "/contact"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              {t('contact')}
            </DelayedLink>
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
              <button
                onClick={() => switchLanguage('th')}
                className={`flex-1 px-3 py-2 rounded-md transition-all font-medium ${
                  locale === 'th'
                    ? 'bg-white text-[#213559]'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                ไทย
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={`flex-1 px-3 py-2 rounded-md transition-all font-medium ${
                  locale === 'en'
                    ? 'bg-white text-[#213559]'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                English
              </button>
            </div>
            {/* <div className="flex gap-4 mt-4">
              <DelayedLink
                href="/login"
                className="bg-white text-blue-600 hover:bg-blue-100 px-5 py-2 rounded-full transition-colors cursor-pointer font-medium flex-1 text-center"
                delay={800}
              >
                Login
              </DelayedLink>
              <DelayedLink
                href="/register"
                className="border border-white hover:bg-white hover:text-blue-600 px-5 py-2 rounded-full transition-colors cursor-pointer font-medium flex-1 text-center"
                delay={800}
              >
                Register
              </DelayedLink>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
