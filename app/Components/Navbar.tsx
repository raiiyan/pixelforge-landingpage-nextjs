"use client";

import { useState } from "react";
import Link from "next/link";
import { navbarLinks } from "@/data/navdata";
import { Menu, X } from "lucide-react";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#040505] backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/">
          <Image src="/logos/logo-nav.png" alt="" width={150} height={150} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {(navbarLinks as NavItem[]).map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white hover:text-gray-400 transition-colors font-medium"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col pl-10 py-4 space-y-4">
              {navbarLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
