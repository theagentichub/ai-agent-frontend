
'use client';

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Target,
  Code,
  Database,
  Palette,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function AboutUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamRoles = [
    {
      icon: Database,
      title: "Machine Learning Experts",
      description:
        "Designing predictive models that adapt and learn from your business data to generate measurable impact.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "AI System Engineers",
      description:
        "Architecting resilient and scalable AI infrastructures for real-time performance and decision-making.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "AI UX Researchers",
      description:
        "Ensuring human-centered design so users interact seamlessly with AI through intuitive and accessible experiences.",
      color: "from-cyan-500 to-indigo-500",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideLeftVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideRightVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Decorative Particles */}
      <motion.div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full" variants={pulseVariants} animate="pulse" />
      <motion.div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full" variants={pulseVariants} animate="pulse" transition={{ delay: 1 }} />
      <motion.div className="absolute bottom-20 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full" variants={pulseVariants} animate="pulse" transition={{ delay: 0.5 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              About Us
            </span>
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={slideLeftVariants}>
            <motion.h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Driving Innovation at the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Edge of Intelligence
              </span>
            </motion.h2>

            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a cross-functional team of AI experts, engineers, and creatives committed to transforming businesses through smart, scalable, and ethical artificial intelligence.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">70+</div>
                <div className="text-sm text-gray-400">AI Projects Delivered</div>
              </motion.div>
              <motion.div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </motion.div>
            </div>

            <motion.button
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.25)",
              }}
            >
              <Target className="w-5 h-5" />
              <span className="font-medium">Discover How We Innovate</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </motion.button>
          </motion.div>

          {/* Team Roles */}
          <motion.div variants={slideRightVariants}>
            <div className="space-y-6">
              {teamRoles.map((role, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 cursor-pointer"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div className={`p-3 bg-gradient-to-r ${role.color} rounded-xl shadow-lg`}>
                      <role.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${hoveredCard === index ? "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent" : "text-white"}`}>
                        {role.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{role.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
