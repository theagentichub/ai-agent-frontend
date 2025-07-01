"use client";

import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Top CTA Section */}
      <div className="relative z-10 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Let&apos;s start work{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  together!
                </span>
              </h2>
              <p className="text-gray-300 text-lg lg:text-xl max-w-2xl">
                Partner with us to create intelligent, impactful, and
                future-ready AI solutions together.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 flex items-center gap-2">
                Let&apos;s Work Together
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <Image
                    src="/logo_white.png"
                    alt="Logo"
                    width={160}
                    height={80}
                  />
                  <span className="text-orange-400 text-2xl">.</span>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">+ (00) - 152 885 253</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">info@domainname.com</span>
                </div>
              </div>
            </div>

            {/* Our Location */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                Our Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>123 Lorem Street Suite 5B, Ips</p>
                  <p>Park London, UK SW1A 1AA</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-6">
                Subscribe Newsletter&apos;s
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 py-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              Copyright © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
