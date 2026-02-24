"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ParallaxScroll,
  ScrollReveal,
  ScrollScale,
} from "../../ScrollAnimations";
import { useTranslations } from "next-intl";
import helper from "./helper";

export default function CompanyProfileSection() {
  const { profileData } = helper();
  const t = useTranslations("companyProfile");
  const [isLoading, setIsLoading] = useState(false);

  const handleLearnMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-20">
          {/* Image with Parallax Animation */}
          <ParallaxScroll offset={100} className="w-full md:w-1/2">
            <ScrollScale scaleRange={[0.95, 1.02]}>
              <div className="relative image-zoom rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 hover:shadow-3xl transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#213559]/10 to-transparent z-10"></div>
                <Image
                  src={profileData.image}
                  alt="SP Inter Service & Supply Workshop"
                  width={600}
                  height={400}
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollScale>
          </ParallaxScroll>

          {/* Content with Scroll Reveal */}
          <ScrollReveal direction="right" className="w-full md:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-[#213559] to-[#263f6b] rounded-full"></div>
                <span className="text-sm font-semibold text-[#263f6b] uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#213559] mb-3 leading-tight">
                {t("title")}
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#213559] to-[#263f6b]">
              {t("companyName")}
            </h3>
            <div className="space-y-5">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t("description1")}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t("description2")}
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={handleLearnMoreClick}
                disabled={isLoading}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#213559] to-[#263f6b] hover:from-[#263f6b] hover:to-[#213559] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative z-10 text-base md:text-lg">{t("learnMore")}</span>
                {isLoading ? (
                  <span className="relative z-10 inline-block animate-spin">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                ) : (
                  <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
