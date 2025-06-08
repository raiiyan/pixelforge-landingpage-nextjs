"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import { FiLinkedin, FiGithub, FiDribbble } from "react-icons/fi";

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Who’s Behind PixelForge?
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3 text-indigo-600">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="w-5 h-5 hover:text-indigo-800 transition" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="w-5 h-5 hover:text-indigo-800 transition" />
                  </a>
                )}
                {member.dribbble && (
                  <a
                    href={member.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDribbble className="w-5 h-5 hover:text-pink-500 transition" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
