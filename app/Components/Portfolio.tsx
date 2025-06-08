"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Projects We've Forged
        </motion.h2>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all"
            >
              <Link href={project.link}>
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-left bg-white">
                  <p className="text-sm text-indigo-600 font-medium">
                    {project.type}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
