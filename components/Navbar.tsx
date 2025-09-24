"use client";

import DelayedLink from "./DelayedLink";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  return (
    <>
      <nav
        className={`flex justify-between items-center px-6 text-white sticky top-0 z-10 transition-all duration-300 ${
          scrolled ? "bg-[#213559] shadow-lg py-3" : "bg-[#263f6b] py-5"
        }`}
      >
        <div className="flex items-center">
          <DelayedLink
            href="/"
            className="flex items-center gap-2 text-xl font-bold mr-8 cursor-pointer hover:scale-105 transition-transform"
            delay={800}
          >
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-[#213559] font-bold text-sm">SP</span>
            </div>
            <div>
              <span className="font-extrabold">SP INTER SERVICE & SUPPLY</span>
              {/* <span className="font-medium">Workshop</span> */}
            </div>
          </DelayedLink>

          <div className="hidden md:flex gap-8">
            <DelayedLink
              href={isHomePage ? "#home" : "/"}
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#team" : "/our-team"}
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Our Team
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#services" : "/services"}
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
            <DelayedLink
              href="/track-record"
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Track Record
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
            <DelayedLink
              href="/vacancies"
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Open Vacancies
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#contact" : "/contact"}
              className="hover:text-blue-200 transition-all cursor-pointer relative group font-medium"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </DelayedLink>
          </div>
        </div>

        <div className="flex items-center">
          {/* <div className="hidden md:flex gap-4">
            <DelayedLink
              href="/login"
              className="bg-white text-blue-600 hover:bg-blue-100 px-5 py-2 rounded-full transition-colors cursor-pointer font-medium"
              delay={800}
            >
              Login
            </DelayedLink>
            <DelayedLink
              href="/register"
              className="border border-white hover:bg-white hover:text-blue-600 px-5 py-2 rounded-full transition-colors cursor-pointer font-medium"
              delay={800}
            >
              Register
            </DelayedLink>
          </div> */}

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none p-2 hover:bg-blue-700 rounded-md transition-colors"
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-[#182a45] text-white py-4 px-6 shadow-lg sticky transition-all duration-300 ${
            scrolled ? "tra top-16" : "top-20"
          } z-2`}
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
              Home
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#team" : "/our-team"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Our Team
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#services" : "/services"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Services
            </DelayedLink>
            <DelayedLink
              href="/track-record"
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Track Record
            </DelayedLink>
            <DelayedLink
              href="/vacancies"
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Open Vacancies
            </DelayedLink>
            <DelayedLink
              href={isHomePage ? "#contact" : "/contact"}
              className="hover:bg-[#263f6b] py-2 px-3 rounded-md transition-colors"
              delay={800}
              callback={() => {
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </DelayedLink>
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
