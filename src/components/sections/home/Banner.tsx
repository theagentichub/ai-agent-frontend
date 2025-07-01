"use client";

import React, { useState, useEffect } from "react";
import { Brain, Cpu, Zap, Bot, Sparkles, ArrowRight } from "lucide-react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<
    {
      Icon: React.ComponentType<{ size?: number }>;
      id: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate floating icons
    const icons = [
      { Icon: Brain, id: 1, delay: 0 },
      { Icon: Cpu, id: 2, delay: 0.5 },
      { Icon: Bot, id: 3, delay: 1 },
      { Icon: Sparkles, id: 4, delay: 1.5 },
      { Icon: Zap, id: 5, delay: 2 },
    ];
    setFloatingIcons(icons);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Floating AI icons */}
      {floatingIcons.map(({ Icon, id, delay }) => (
        <div
          key={id}
          className={`absolute opacity-20 text-blue-400 animate-float`}
          style={{
            left: `${20 + id * 15}%`,
            top: `${10 + id * 10}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${3 + id * 0.5}s`,
          }}
        >
          <Icon size={40 + id * 8} />
        </div>
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated title */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Transform your business
              <br />
              <span className="relative">
                with the{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  power of AI
                </span>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
                </div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              In a world where automation is reshaping industries, your business
              deserves the most intelligent solutions. Our AI agents leverage
              cutting-edge machine learning to revolutionize your operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Deploy AI Agent
                </span>
              </button>
            </div>
          </div>

          {/* Feature highlights */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "Neural Processing",
                  desc: "Advanced AI reasoning",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Instant responses",
                },
                {
                  icon: Cpu,
                  title: "Smart Automation",
                  desc: "Intelligent workflows",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
