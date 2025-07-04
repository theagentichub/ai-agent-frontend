"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "w-full fixed top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-white/10"
          : "bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo with AI-themed glow effect */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md group-hover:bg-cyan-400/30 transition-all duration-300"></div>
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:block text-white">
            AgenticHub
          </span>
        </Link>

        {/* Desktop Nav with AI-themed hover effects */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium text-gray-300 hover:text-white transition-all duration-300",
                "relative group px-3 py-2",
                "after:content-[''] after:absolute after:-bottom-1 after:left-0",
                "after:w-0 after:h-0.5 after:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400",
                "after:transition-all after:duration-300 hover:after:w-full",
                "before:content-[''] before:absolute before:inset-0 before:bg-white/5",
                "before:rounded-lg before:opacity-0 before:transition-all before:duration-300",
                "hover:before:opacity-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* AI-themed CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/get-started"
            className="group relative px-6 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Schedule a Call
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button with AI styling */}
        <button
          className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-all duration-300 relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {menuOpen ? (
            <X
              size={24}
              className="relative z-10 transform transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu
              size={24}
              className="relative z-10 transform transition-transform duration-300"
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown with AI-themed styling */}
      <div
        className={clsx(
          "md:hidden bg-gradient-to-b from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="px-6">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 text-base py-3 px-4 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 font-medium relative group border border-transparent hover:border-white/20"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: menuOpen
                    ? "slideInFromRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center px-6 py-3 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Bot className="w-4 h-4" />
                Schedule A Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
