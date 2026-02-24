"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, ParallaxScroll } from "./ScrollAnimations";

export default function WorkshopShowcase() {
  const showcasePhotos = [
    "/images/photos/LINE_ALBUM_7169_260224_7.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_8.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_9.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_11.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_12.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_13.jpg",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23213559' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#213559] mb-4">
            WORKSHOP IN ACTION
          </h2>
          <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our state-of-the-art welding workshop and training facilities
          </p>
        </ScrollReveal>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Image */}
          <ParallaxScroll offset={40} className="lg:col-span-2 lg:row-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image
                src={showcasePhotos[0]}
                alt="Workshop Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213559]/90 via-[#213559]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2">Professional Training</h3>
                  <p className="text-lg">Expert instructors guiding students through hands-on welding techniques</p>
                </div>
              </div>
            </motion.div>
          </ParallaxScroll>

          {/* Small Images */}
          {showcasePhotos.slice(1).map((photo, index) => (
            <ParallaxScroll key={photo} offset={20 + index * 10}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-[285px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image
                  src={photo}
                  alt={`Workshop ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#213559]/0 group-hover:bg-[#213559]/60 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </ParallaxScroll>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollReveal direction="up" className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Trained Welders" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Safety Record" },
              { number: "50+", label: "Workshop Bays" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#213559] to-[#263f6b] text-white shadow-xl"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
