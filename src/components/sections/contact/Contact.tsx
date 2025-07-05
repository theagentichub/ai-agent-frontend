"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  Brain,
  Cpu,
  Zap,
  Bot,
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };


  const [animationStage, setAnimationStage] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setAnimationStage(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden ">
      <div className="max-w-6xl mx-auto py-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {[Brain, Cpu, Bot, Sparkles, Zap].map((Icon, index) => (
          <div
            key={index}
            className="absolute opacity-20 text-blue-400 animate-float"
            style={{
              left: `${10 + index * 20}%`,
              top: `${15 + index * 15}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index * 0.3}s`,
            }}
          >
            <Icon size={32 + index * 4} />
          </div>
        ))}

        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                animationStage >= 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Get in{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Touch
                </span>
                <div className="inline-block ml-2">
                  <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" />
                </div>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your business with AI? Let&apos;s discuss
                how our intelligent solutions can transform your operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6 p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.h2
                        className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
                        variants={itemVariants}
                      >
                        <Bot className="w-6 h-6 text-blue-400" />
                        Start Your AI Journey
                      </motion.h2>

                      <motion.div variants={itemVariants}>
                        <label className="flex text-gray-300 mb-2 items-center gap-2">
                          <User className="w-4 h-4" />
                          Name
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                          }`}
                          placeholder="Your full name"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.name && (
                          <motion.p
                            className="text-red-400 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className=" text-gray-300 mb-2 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                          }`}
                          placeholder="your@email.com"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.email && (
                          <motion.p
                            className="text-red-400 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className=" text-gray-300 mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone
                        </label>
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                          }`}
                          placeholder="+1 (555) 123-4567"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.phone && (
                          <motion.p
                            className="text-red-400 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className=" text-gray-300 mb-2 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Message
                        </label>
                        <motion.textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:border-blue-400 focus:ring-blue-400"
                          }`}
                          placeholder="Tell us about your project and how AI can help transform your business..."
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.message && (
                          <motion.p
                            className="text-red-400 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Message Sent Successfully!
                      </motion.h3>
                      <motion.p
                        className="text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        We&apos;ll get back to you within 24 hours with
                        AI-powered solutions tailored to your needs.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="space-y-8" variants={itemVariants}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Let&apos;s Connect
                  </h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <p className="text-white font-semibold">
                          contact@aiagency.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">Phone</p>
                        <p className="text-white font-semibold">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">Office</p>
                        <p className="text-white font-semibold">
                          123 AI Street, Tech City
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">Hours</p>
                        <p className="text-white font-semibold">
                          Mon-Fri: 9AM-6PM
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  {[
                    { number: "500+", label: "AI Projects", icon: Brain },
                    { number: "99%", label: "Success Rate", icon: Zap },
                    { number: "24/7", label: "Support", icon: Bot },
                    { number: "50+", label: "Industries", icon: Cpu },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
