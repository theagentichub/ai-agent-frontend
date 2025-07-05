"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Brain, Cog, Sparkles, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  visual: string;
  color: string;
  bgGradient: string;
}

const services: Service[] = [
  {
    title: "AI Strategy & Consulting",
    description:
      "We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.",
    icon: Brain,
    visual: "strategy",
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "AI Integration & Deployment",
    description:
      "Seamlessly integrate cutting-edge AI solutions into your existing workflows with minimal disruption and maximum efficiency.",
    icon: Cog,

    visual: "deployment",
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Tailored AI agents and machine learning models designed specifically for your unique business requirements and challenges.",
    icon: Sparkles,

    visual: "custom",
    color: "text-cyan-400",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
];

const ServiceVisual: React.FC<{ type: string; color: string }> = ({
  type,
  color,
}) => {
  const baseClasses = "absolute inset-0 flex items-center justify-center";

  if (type === "strategy") {
    return (
      <div className={baseClasses}>
        <div className="relative">
          {/* Animated nodes */}
          <motion.div
            className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ${color}`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-blue-300"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-purple-300"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          {/* Connecting lines */}
          <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
      </div>
    );
  }

  if (type === "deployment") {
    return (
      <div className={baseClasses}>
        <div className="relative">
          {/* Code blocks */}
          <motion.div
            className="w-16 h-12 bg-gray-800 rounded border border-gray-600 p-2"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="space-y-1">
              <div className="h-1 bg-purple-400 rounded w-8" />
              <div className="h-1 bg-blue-400 rounded w-6" />
              <div className="h-1 bg-cyan-400 rounded w-10" />
            </div>
            {/* Cursor */}
            <motion.div
              className="absolute bottom-1 right-1 w-1 h-3 bg-green-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          {/* Floating elements */}
          <motion.div
            className="absolute -top-2 -right-2 text-xs text-red-400 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            CSS
          </motion.div>
        </div>
      </div>
    );
  }


  return (
    <div className={baseClasses}>
      <div className="relative">
        {/* AI brain visualization */}
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(34, 211, 238, 0.3)",
              "0 0 30px rgba(34, 211, 238, 0.5)",
              "0 0 20px rgba(34, 211, 238, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
        </motion.div>
        {/* Orbiting elements */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2" />
            <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-1/2 -left-1 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      id="services"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm uppercase tracking-wider">
              Our Services
            </span>
            <Sparkles className="w-4 h-4 text-orange-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI-driven design services for
            <br />
            future{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              innovations
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div
                className={`relative h-96 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-gray-700 transition-all duration-300`}
              >
                {/* Visual section */}
                <div className="relative h-32 mb-6 bg-gray-900/50 rounded-xl border border-gray-800">
                  <ServiceVisual type={service.visual} color={service.color} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Bottom CTA */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`p-2 bg-gray-900/80 rounded-full border border-gray-700 ${service.color} backdrop-blur-sm`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
