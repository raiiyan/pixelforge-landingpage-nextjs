"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Client Praise
        </motion.h2>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-sm text-gray-700 italic mb-4">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
                {testimonial.companyLogo && (
                  <div className="ml-auto w-12 h-12 relative">
                    <Image
                      src={testimonial.companyLogo}
                      alt="Company logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
