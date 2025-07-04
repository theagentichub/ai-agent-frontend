"use client";

import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* CTA Section */}
      <div className="relative z-10 py-16 border-b border-white/10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s start work{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                together!
              </span>
            </h2>
            <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
              Partner with us to create intelligent, impactful, and future-ready AI solutions together.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 flex items-center justify-center gap-2">
              Let&apos;s Work Together
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <Image src="/logo_white.png" alt="Logo" width={160} height={80} />
            </div>
            <span className="text-orange-400 text-3xl">.</span>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+ (00) - 152 885 253</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">info@domainname.com</span>
              </div>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Location</h3>
            <div className="flex gap-3 text-center sm:text-left justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300 text-sm">
                <p>123 Lorem Street Suite 5B, Ips</p>
                <p>Park London, UK SW1A 1AA</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <form className="flex flex-col items-left gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-3 bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-lg hover:from-teal-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 py-6 border-t border-white/10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
