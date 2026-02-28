"use client";

import { Controller } from "react-hook-form";
import contactHelper from "./helper";
import { ParallaxScroll, ScrollReveal } from "../../ScrollAnimations";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const { useContactForm } = contactHelper();
  const { control, handleSubmit, errors, formFieldsConfig } = useContactForm();
  const t = useTranslations("contact");

  return (
    <section className="py-20 bg-gray-50" id="contact">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div className="card-hover bg-white rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-[#213559]">
                {t("form.title")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Render form fields from JSON config */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFieldsConfig.map((field) => {
                    const isFullWidth = field.gridCol === "full";
                    const isTextarea = field.type === "textarea";

                    return (
                      <div
                        key={field.name}
                        className={isFullWidth ? "md:col-span-2" : ""}
                      >
                        <label
                          htmlFor={field.name}
                          className="block text-gray-700 font-semibold mb-2 text-lg"
                        >
                          {t(field.labelKey)}
                          {field.required && t("form.required")}
                        </label>

                        <Controller
                          name={field.name}
                          control={control}
                          rules={{
                            required: field.required,
                            pattern: field.validation?.pattern,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <>
                              {isTextarea ? (
                                <textarea
                                  id={field.name}
                                  rows={field.rows || 5}
                                  value={value}
                                  onChange={onChange}
                                  placeholder={field.placeholder}
                                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all resize-none ${
                                    errors[field.name]
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`}
                                />
                              ) : (
                                <input
                                  type={field.type}
                                  id={field.name}
                                  value={value}
                                  onChange={onChange}
                                  placeholder={field.placeholder}
                                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all ${
                                    errors[field.name]
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`}
                                />
                              )}
                              {errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {field.validation?.message
                                    ? t(field.validation.message)
                                    : t("form.validation.required")}
                                </p>
                              )}
                            </>
                          )}
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="btn-smooth w-full bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg"
                >
                  {t("form.submit")}
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ParallaxScroll offset={50}>
            <ScrollReveal direction="right">
              <div className="card-hover bg-gradient-to-br from-[#213559] to-[#263f6b] rounded-2xl shadow-xl p-10 text-white h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-8">{t("info.title")}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.address")}
                      </h4>
                      <p className="text-white/90">{t("info.location")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.telFax")}
                      </h4>
                      <p className="text-white/90">{t("info.telFaxNumber")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.taxId")}
                      </h4>
                      <p className="text-white/90">{t("info.taxIdNumber")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.email")}
                      </h4>
                      <p className="text-white/90">{t("info.emailAddress")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.phone")}
                      </h4>
                      <p className="text-white/90">{t("info.phoneNumber")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t("info.businessHours")}
                      </h4>
                      <p className="text-white/90">{t("info.weekdays")}</p>
                      <p className="text-white/90">{t("info.weekend")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  );
}
