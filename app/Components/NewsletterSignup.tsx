"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integrate your backend/email service here (e.g., Mailchimp, ConvertKit)
    setSubmitted(true);
  };

  return (
    <section className=" text-white py-16 px-6 md:px-12 pt-30 pb-30">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-black"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Stay Ahead in Design & Dev
        </h2>
        <p className="text-gray-400 mb-6">
          Join our newsletter for the latest UI/UX tips, frontend trends, and
          project insights no fluff.
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl w-full sm:w-auto text-black placeholder-gray-500 border-indigo-400 border-2"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-xl font-semibold cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium mt-4">
            Thanks for subscribing! ✨
          </p>
        )}
      </div>
    </section>
  );
}
