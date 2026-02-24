"use client";

import React from "react";
import helper from "./helper";
import DelayedLink from "../../DelayedLink";
import { useTranslations } from "next-intl";

export default function FullServicesPage() {
  const { services, industries } = helper();
  const t = useTranslations("services");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-[#213559] to-[#263f6b] rounded-full"></div>
            <span className="text-sm font-semibold text-[#263f6b] uppercase tracking-wider">Our Services</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#263f6b] to-[#213559] rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#213559] mb-6 leading-tight">{t("title")}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                  <div className="mb-6 p-4 bg-gradient-to-br from-[#213559]/10 to-[#263f6b]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-[#213559]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={service.iconPath}
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#213559] text-center md:text-left group-hover:text-[#263f6b] transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{service.description}</p>
                  <div>
                    <h3 className="font-bold text-[#213559] mb-4 text-lg">{t("keyFeatures")}</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#263f6b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#213559] mb-4">
              {t("industries.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#213559] to-[#263f6b] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-[#213559]/5 to-[#263f6b]/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#213559]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <svg className="w-16 h-16 text-[#213559] opacity-20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#213559] mb-3 group-hover:text-[#263f6b] transition-colors duration-300">{industry.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#213559] via-[#263f6b] to-[#213559] text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{t("cta.description")}</p>
            <DelayedLink
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#213559] hover:bg-gray-50 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              delay={800}
            >
              <span className="text-lg">{t("cta.button")}</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </DelayedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
