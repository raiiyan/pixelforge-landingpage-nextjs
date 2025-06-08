import Link from "next/link";
import { FaTwitter, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Brand Info */}
        <div>
          <h3
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            PixelForge Studio
          </h3>
          <p className="text-gray-400 mb-4">
            Forging pixel-perfect products for startups and beyond. 🚀
          </p>
          <p className="text-gray-500">Think. Forge. Launch.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-center mt-12 space-x-6">
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          className="hover:text-white transition"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="https://github.com"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://dribbble.com"
          aria-label="Dribbble"
          className="hover:text-white transition"
        >
          <FaDribbble className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} PixelForge Studio. All rights
        reserved.
      </div>
    </footer>
  );
}
