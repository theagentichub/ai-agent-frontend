'use client'

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Brain,
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
      title: "Data Scientists",
      description:
        "Extracting insights from complex datasets to drive intelligent decisions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "AI Engineers",
      description:
        "Building robust machine learning systems and neural architectures",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UX Designers",
      description:
        "Crafting intuitive interfaces that make AI accessible and delightful",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideLeftVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideRightVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants: Variants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full"
        variants={pulseVariants}
        animate="pulse"
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full"
        variants={pulseVariants}
        animate="pulse"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full"
        variants={pulseVariants}
        animate="pulse"
        transition={{ delay: 0.5 }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              About Us
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={slideLeftVariants}>
            <motion.h2
              className="text-4xl font-bold text-white mb-8 leading-tight"
              variants={itemVariants}
            >
              Our team of{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                data scientists
              </motion.span>
              , engineers, and designers work at the intersection of{" "}
              <span className="relative">
                technology
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-6 h-6 text-blue-400" />
                </motion.div>
              </span>{" "}
              and{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                strategy
              </motion.span>
            </motion.h2>

            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Turning complex challenges into simple,{" "}
              <span className="text-white font-semibold">
                AI-powered solutions
              </span>{" "}
              that drive real business impact and innovation.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              <motion.div
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(59, 130, 246, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-3xl font-bold text-blue-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-400">AI Models Deployed</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(147, 51, 234, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-3xl font-bold text-purple-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.button
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full"
              whileHover={{
                scale: 1.05,
                backgroundImage:
                  "linear-gradient(to right, rgb(29, 78, 216), rgb(147, 51, 234))",
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Target className="w-5 h-5" />
              <span className="font-medium">Discover Our Mission</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Content - Team Cards */}
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
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      className={`p-3 bg-gradient-to-r ${role.color} rounded-xl shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <role.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className={`text-xl font-bold mb-2 transition-colors duration-200 ${
                          hoveredCard === index
                            ? "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                        transition={{ duration: 0.2 }}
                      >
                        {role.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 leading-relaxed"
                        whileHover={{ color: "rgb(209, 213, 219)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {role.description}
                      </motion.p>
                    </div>

                    <motion.div
                      animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 -z-10 blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom accent */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  variants={pulseVariants}
                  animate="pulse"
                />
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  variants={pulseVariants}
                  animate="pulse"
                  transition={{ delay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}