"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ParallaxScroll, ScrollPerspective } from "../../ScrollAnimations";
import { useTranslations } from 'next-intl';
import helper from "./helper";

export default function CompanyGoalSection() {
  const { goalData } = helper();
  const t = useTranslations('companyGoal');

  return (
    <section className="py-24 bg-gradient-to-br from-[#213559] via-[#263f6b] to-[#182a45] text-white relative overflow-hidden">
      <ParallaxScroll offset={-80} className="absolute inset-0 opacity-10">
        <Image
          src={goalData.backgroundImage}
          alt="Company Goal Background"
          fill
          className="object-cover object-center"
          priority
        />
      </ParallaxScroll>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollPerspective className="text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {t('title')}
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-12"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-custom bg-white/10 p-12 rounded-2xl shadow-2xl border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
              &ldquo;{t('quote')}&rdquo;
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              {t('description')}
            </p>
          </motion.div>
        </ScrollPerspective>
      </div>
    </section>
  );
}
