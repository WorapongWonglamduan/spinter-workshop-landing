"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DelayedLink from "../../DelayedLink";
import AnimatedCard from "../../AnimatedCard";
import {
  ScrollReveal,
  ScrollScale,
  ScrollRotate,
  ScrollFade,
} from "../../ScrollAnimations";
import { useTranslations } from "next-intl";
import helper from "./helper";
import { useState, useEffect, useCallback } from "react";

export default function ServicesSection() {
  const { facilityPhotos, facilities, clients } = helper();
  const t = useTranslations("companyServices");

  // Custom slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive slides per view
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = clients.length;
  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  // const prevSlide = useCallback(() => {
  //   setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  // }, [maxSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#213559] mb-4">
            {t("title")}
          </h2>
          <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* SP Welding Workshop */}
        <ScrollScale scaleRange={[0.95, 1]} className="mb-20">
          <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  {/* <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex flex-col items-center justify-center w-20 h-20"
                  >
                    <div className="text-3xl font-bold">SP</div>
                    <div className="w-16 h-0.5 bg-white mt-1"></div>
                  </motion.div> */}
                  <h3 className="text-4xl font-bold">
                    {t("weldingWorkshop.title")}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-10">
              <div className="mb-10">
                <h4 className="text-2xl font-bold mb-6 text-[#213559]">
                  {t("weldingWorkshop.subtitle")}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.weldingMachine")}
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.consumables")}
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.more")}
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((item, index) => (
                  <ScrollRotate key={item} rotation={5}>
                    <AnimatedCard delay={index * 0.1}>
                      <div className="card-hover bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md">
                        <div className="h-48 relative overflow-hidden">
                          <Image
                            src={facilityPhotos[index]}
                            alt={item}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#213559]/90 to-transparent flex items-end justify-center pb-4">
                            <p className="text-white text-lg font-semibold">
                              {item}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white text-center font-bold text-lg">
                          {item}
                        </div>
                      </div>
                    </AnimatedCard>
                  </ScrollRotate>
                ))}
              </div>
            </div>
          </div>
        </ScrollScale>

        {/* Our Clients */}
        <ScrollFade className="mb-12">
          <div className="card-hover rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white">
              <h3 className="text-4xl font-bold">{t("ourClients.title")}</h3>
            </div>

            <div className="p-10 bg-gradient-to-br from-gray-50 to-white relative">
              {/* Slider Container */}
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Slides Wrapper */}
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: `calc(-${currentSlide * (100 / slidesPerView)}% - ${currentSlide * 2}rem)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {clients.map((client, index) => (
                    <motion.div
                      key={client.name}
                      className="group perspective-1000"
                      style={{
                        minWidth: `calc(${100 / slidesPerView}% - ${((slidesPerView - 1) * 2) / slidesPerView}rem)`,
                        maxWidth: `calc(${100 / slidesPerView}% - ${((slidesPerView - 1) * 2) / slidesPerView}rem)`,
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        rotateY: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#213559] via-[#263f6b] to-[#213559] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={false}
                        />

                        {/* Animated particles effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[
                            { x: 30, y: -20, left: 20, top: 30 },
                            { x: -40, y: 35, left: 70, top: 60 },
                            { x: 25, y: -30, left: 50, top: 80 }
                          ].map((particle, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white/30 rounded-full"
                              animate={{
                                x: [0, particle.x],
                                y: [0, particle.y],
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                              style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Logo container with animation */}
                          <motion.div
                            className="h-32 mb-6 flex items-center justify-center relative"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={client.logo}
                                alt={client.name}
                                width={300}
                                height={128}
                                unoptimized
                                priority
                                className="max-h-32 w-auto object-contain mx-auto transition-all duration-500"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                          </motion.div>

                          {/* Text content */}
                          <div className="text-center flex-1 flex flex-col justify-end">
                            <motion.h4
                              className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2"
                              initial={false}
                            >
                              {client.full}
                            </motion.h4>
                            <motion.p
                              className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 line-clamp-3"
                              initial={false}
                            >
                              {client.desc}
                            </motion.p>
                          </div>

                          {/* Animated border */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50"
                            initial={false}
                            animate={{
                              borderColor: [
                                "rgba(255,255,255,0)",
                                "rgba(255,255,255,0.5)",
                                "rgba(255,255,255,0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Navigation Buttons */}
                {/* <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-[#213559] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-[#213559] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8 pb-4">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-8 h-3 bg-[#213559]"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollFade>

        <ScrollReveal direction="up" className="text-center">
          <DelayedLink
            href="/services"
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
