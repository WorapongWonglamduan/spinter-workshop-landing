"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ParallaxScroll } from "../../ScrollAnimations";
import { useTranslations } from "next-intl";
import helper from "./helper";

export default function WorkshopGallery() {
  const { galleryData } = helper();
  const { photos } = galleryData;
  const t = useTranslations("workshopGallery");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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

          {/* Featured Large Image */}
          <ParallaxScroll offset={50} className="mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setSelectedImage(photos[0])}
            >
              <Image
                src={photos[0]}
                alt="Featured Workshop Training"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213559]/80 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {t("featuredTitle")}
                  </h3>
                  <p className="text-lg">{t("featuredDescription")}</p>
                </div>
              </div>
            </motion.div>
          </ParallaxScroll>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.slice(1, 17).map((photo, index) => (
              <ScrollReveal
                key={photo}
                direction="up"
                delay={index * 0.05}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <Image
                    src={photo}
                    alt={`Workshop Training ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#213559]/0 group-hover:bg-[#213559]/40 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* View More Button */}
          <ScrollReveal direction="up" className="mt-12 text-center">
            <button className="btn-smooth bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-10 rounded-md shadow-lg text-lg">
              {t("viewAllButton", { count: photos.length })}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Workshop Training"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
