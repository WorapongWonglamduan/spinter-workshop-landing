"use client";

import { motion } from "framer-motion";
import DelayedLink from "../../DelayedLink";
import AnimatedCard from "../../AnimatedCard";
import { ParallaxScroll, ScrollReveal } from "../../ScrollAnimations";
import { useTranslations } from "next-intl";
import teamHelper from "./helper";

export default function OurTeamSection() {
  const t = useTranslations("ourTeamSection");
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#213559] mb-4">{t("title")}</h2>
          <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamHelper()
            .teamMembers.slice(0, 3)
            .map((member, index) => (
              <ParallaxScroll key={member.id} offset={30}>
                <AnimatedCard delay={index * 0.15}>
                  <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-72 bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe] flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-40 h-40 rounded-full bg-gradient-to-br from-[#213559] to-[#263f6b] flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
                      >
                        {member.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </motion.div>
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-2 text-[#213559]">
                        {member.name}
                      </h2>
                      <p className="text-[#263f6b] font-semibold mb-4 text-lg">
                        {member.position}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </ParallaxScroll>
            ))}
        </div>

        <ScrollReveal direction="up" className="mt-16 text-center">
          <DelayedLink
            href="/our-team"
            className="btn-smooth bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-10 rounded-md inline-block shadow-lg text-lg"
            delay={800}
            showLoading={true}
          >
            {t("viewAllButton")}
          </DelayedLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
