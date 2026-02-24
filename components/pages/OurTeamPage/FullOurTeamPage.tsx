"use client";

import React from "react";
import helper from "./helper";
import DelayedLink from "../../DelayedLink";
import { useTranslations } from "next-intl";

export default function FullOurTeamPage() {
  const { teamMembers } = helper();
  const t = useTranslations("ourTeam");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-[#213559] to-[#263f6b] rounded-full"></div>
            <span className="text-sm font-semibold text-[#263f6b] uppercase tracking-wider">Meet Our Team</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#263f6b] to-[#213559] rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#213559] mb-6 leading-tight">{t("title")}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="h-72 bg-gradient-to-br from-[#213559]/5 to-[#263f6b]/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#213559]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#213559] to-[#263f6b] flex items-center justify-center text-white text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(" ").map((n: string) => n[0]).join("")}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#213559] mb-2 group-hover:text-[#263f6b] transition-colors duration-300">{member.name}</h2>
                <p className="text-[#263f6b] font-semibold mb-4 text-sm uppercase tracking-wide">
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#213559] via-[#263f6b] to-[#213559] text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("joinTeam.title")}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{t("joinTeam.description")}</p>
            <DelayedLink
              href="/vacancies"
              className="group inline-flex items-center gap-3 bg-white text-[#213559] hover:bg-gray-50 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              delay={800}
            >
              <span className="text-lg">{t("joinTeam.button")}</span>
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
