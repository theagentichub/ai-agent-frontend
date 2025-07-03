"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import {
  Brain,
  Zap,
  Eye,
  MessageSquare,
  TrendingUp,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  Code,
  Database,
  Server,
  Globe,
  BarChart3,
  Cpu,
  Quote,
} from "lucide-react";

interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  heroImage: string;
  gallery: string[];
  technologies: {
    name: string;
    category: "Frontend" | "Backend" | "AI/ML" | "Database" | "Cloud" | "Tools";
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  timeline: {
    phase: string;
    duration: string;
    status: "completed" | "ongoing" | "upcoming";
    description: string;
  }[];
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
  year: string;
  client: string;
  status: "completed" | "ongoing" | "upcoming";
  duration: string;
  teamSize: number;
  budget: string;
  overview: string;
  caseStudy: {
    problem: string;
    solution: string;
    implementation: string;
    results: string;
  };
}

// Sample project data
const projectData: ProjectData = {
  id: 1,
  title: "Intelligent Customer Support AI",
  subtitle:
    "Revolutionizing Customer Experience with Advanced Conversational AI",
  description:
    "A cutting-edge AI-powered customer support system that handles complex inquiries, understands context, and provides personalized responses with human-like accuracy.",
  category: "Conversational AI",
  icon: MessageSquare,
  heroImage:
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  ],
  technologies: [
    { name: "React", category: "Frontend", icon: Code },
    { name: "Node.js", category: "Backend", icon: Server },
    { name: "GPT-4", category: "AI/ML", icon: Brain },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "AWS", category: "Cloud", icon: Globe },
    { name: "Docker", category: "Tools", icon: Cpu },
  ],
  results: [
    {
      metric: "Response Time",
      value: "< 2 seconds",
      description: "Average response time for customer queries",
      icon: Zap,
    },
    {
      metric: "Accuracy Rate",
      value: "95%",
      description: "Correct resolution of customer inquiries",
      icon: Target,
    },
    {
      metric: "Cost Reduction",
      value: "60%",
      description: "Reduction in customer support costs",
      icon: TrendingUp,
    },
    {
      metric: "Customer Satisfaction",
      value: "4.8/5",
      description: "Average customer satisfaction score",
      icon: Award,
    },
  ],
  timeline: [
    {
      phase: "Research & Planning",
      duration: "2 weeks",
      status: "completed",
      description:
        "Market research, requirement analysis, and system architecture design",
    },
    {
      phase: "AI Model Development",
      duration: "6 weeks",
      status: "completed",
      description: "Training custom NLP models and integrating with GPT-4",
    },
    {
      phase: "System Integration",
      duration: "4 weeks",
      status: "completed",
      description: "Backend development and API integration",
    },
    {
      phase: "Testing & Optimization",
      duration: "3 weeks",
      status: "completed",
      description: "Performance testing, bug fixes, and optimization",
    },
    {
      phase: "Deployment & Monitoring",
      duration: "1 week",
      status: "completed",
      description: "Production deployment and performance monitoring setup",
    },
  ],
  challenges: [
    {
      title: "Context Understanding",
      description:
        "The AI needed to understand complex customer queries and maintain context across multiple interactions.",
      solution:
        "Implemented advanced NLP techniques with memory management to track conversation history and context.",
    },
    {
      title: "Scalability",
      description:
        "System needed to handle thousands of concurrent conversations without performance degradation.",
      solution:
        "Used microservices architecture with auto-scaling capabilities and efficient caching strategies.",
    },
    {
      title: "Integration Complexity",
      description:
        "Integrating with existing CRM systems and maintaining data consistency was challenging.",
      solution:
        "Developed custom APIs and middleware to ensure seamless integration and real-time data synchronization.",
    },
  ],
  features: [
    {
      title: "Natural Language Processing",
      description:
        "Advanced NLP capabilities for understanding customer intent and context",
      icon: Brain,
    },
    {
      title: "Multi-language Support",
      description:
        "Support for 15+ languages with real-time translation capabilities",
      icon: Globe,
    },
    {
      title: "Sentiment Analysis",
      description:
        "Real-time emotion detection to provide empathetic responses",
      icon: Eye,
    },
    {
      title: "24/7 Availability",
      description:
        "Round-the-clock customer support with instant response times",
      icon: Clock,
    },
    {
      title: "Learning & Adaptation",
      description:
        "Continuous learning from interactions to improve response quality",
      icon: Lightbulb,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics and reporting for performance monitoring",
      icon: BarChart3,
    },
  ],
  testimonial: {
    quote:
      "This AI system has transformed our customer support operations. The accuracy and speed are incredible, and our customers love the instant, helpful responses.",
    author: "Sarah Johnson",
    position: "VP of Customer Experience",
    company: "TechCorp Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
  },
  year: "2024",
  client: "TechCorp Inc.",
  status: "completed",
  duration: "16 weeks",
  teamSize: 8,
  budget: "$250K - $500K",
  overview:
    "This project involved developing a sophisticated AI-powered customer support system that could handle complex customer inquiries with human-like accuracy. The system integrates advanced NLP capabilities, sentiment analysis, and machine learning to provide personalized, context-aware responses.",
  caseStudy: {
    problem:
      "TechCorp Inc. was facing challenges with their customer support operations. Long response times, inconsistent service quality, and high operational costs were impacting customer satisfaction and business growth.",
    solution:
      "We developed an intelligent conversational AI system that could understand customer queries, provide accurate responses, and escalate complex issues to human agents when necessary. The system was trained on historical support data and continuously learns from new interactions.",
    implementation:
      "The solution was implemented using a microservices architecture with Docker containers deployed on AWS. We used GPT-4 for natural language processing, PostgreSQL for data storage, and React for the frontend dashboard.",
    results:
      "The implementation resulted in 60% cost reduction, 95% accuracy rate, and significant improvement in customer satisfaction scores. The system now handles 95% of customer inquiries automatically.",
  },
};

export default function ProjectDetailsPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "features", label: "Features", icon: Sparkles },
    { id: "technology", label: "Technology", icon: Code },
    { id: "timeline", label: "Timeline", icon: Calendar },
    { id: "results", label: "Results", icon: BarChart3 },
    { id: "challenges", label: "Challenges", icon: Target },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statusColors = {
    completed: "text-green-400 bg-green-400/20",
    ongoing: "text-yellow-400 bg-yellow-400/20",
    upcoming: "text-blue-400 bg-blue-400/20",
  };

  const techCategories = {
    Frontend: "bg-blue-500/20 text-blue-300",
    Backend: "bg-green-500/20 text-green-300",
    "AI/ML": "bg-purple-500/20 text-purple-300",
    Database: "bg-orange-500/20 text-orange-300",
    Cloud: "bg-cyan-500/20 text-cyan-300",
    Tools: "bg-pink-500/20 text-pink-300",
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ y: backgroundY }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0">
            <img
              src={projectData.heroImage}
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/70 to-slate-900/90" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <ArrowLeft className="w-5 h-5 text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
              <span className="text-blue-400 font-medium">
                Back to Projects
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <projectData.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-left">
                <span className="text-blue-400 font-medium text-sm">
                  {projectData.category}
                </span>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[projectData.status]
                  } mt-1`}
                >
                  {projectData.status}
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {projectData.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              {projectData.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{projectData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{projectData.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{projectData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>{projectData.teamSize} team members</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-16"
            >
              {/* Project Overview */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Project Overview
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {projectData.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white">
                            {projectData.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Team Size:</span>
                          <span className="text-white">
                            {projectData.teamSize} members
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Budget:</span>
                          <span className="text-white">
                            {projectData.budget}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              statusColors[projectData.status]
                            }`}
                          >
                            {projectData.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Quick Stats
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {projectData.results
                          .slice(0, 4)
                          .map((result, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl font-bold text-blue-400">
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Gallery */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {projectData.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setIsImageModalOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Quote className="w-6 h-6 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">
                        Client Testimonial
                      </h3>
                    </div>
                    <p className="text-gray-300 italic mb-4">
                      {projectData.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={projectData.testimonial.avatar}
                        alt={projectData.testimonial.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {projectData.testimonial.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {projectData.testimonial.position}
                        </div>
                        <div className="text-blue-400 text-sm">
                          {projectData.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Case Study */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Case Study
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Problem",
                      content: projectData.caseStudy.problem,
                      icon: Target,
                    },
                    {
                      title: "Solution",
                      content: projectData.caseStudy.solution,
                      icon: Lightbulb,
                    },
                    {
                      title: "Implementation",
                      content: projectData.caseStudy.implementation,
                      icon: Code,
                    },
                    {
                      title: "Results",
                      content: projectData.caseStudy.results,
                      icon: Award,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Key Features
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-500/20 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Tab */}
          {activeTab === "technology" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Technology Stack
              </motion.h2>
              <div className="space-y-8">
                {Object.entries(
                  projectData.technologies.reduce((acc, tech) => {
                    if (!acc[tech.category]) acc[tech.category] = [];
                    acc[tech.category].push(tech);
                    return acc;
                  }, {} as Record<string, typeof projectData.technologies>)
                ).map(([category, techs]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {techs.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                        >
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <tech.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              {tech.name}
                            </div>
                            <div
                              className={`text-xs px-2 py-1 rounded ${
                                techCategories[tech.category]
                              } mt-1`}
                            >
                              {tech.category}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Project Timeline
              </motion.h2>
              <div className="space-y-6">
                {projectData.timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          phase.status === "completed"
                            ? "bg-green-400"
                            : phase.status === "ongoing"
                            ? "bg-yellow-400"
                            : "bg-gray-400"
                        }`}
                      />
                      {index < projectData.timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-600 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {phase.phase}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">
                            {phase.duration}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              statusColors[phase.status]
                            }`}
                          >
                            {phase.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === "results" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Project Results
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectData.results.map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                        <result.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">
                          {result.value}
                        </div>
                        <div className="text-blue-400 font-medium">
                          {result.metric}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{result.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Challenges & Solutions
              </motion.h2>
              <div className="space-y-8">
                {projectData.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {challenge.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-2">
                              Challenge
                            </h4>
                            <p className="text-gray-300">
                              {challenge.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-2">
                              Our Solution
                            </h4>
                            <p className="text-gray-300">
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="max-w-4xl w-full">
              <img
                src={projectData.gallery[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="flex items-center justify-between mt-4 text-white">
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? projectData.gallery.length - 1 : prev - 1
                    )
                  }
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous
                </button>
                <span className="text-sm">
                  {currentImageIndex + 1} / {projectData.gallery.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === projectData.gallery.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
