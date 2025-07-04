"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView,Variants } from "framer-motion";
import {
  Brain,
  Bot,
  Eye,
  MessageSquare,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
  Award,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
  technologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
  year: string;
  client: string;
  status: "completed" | "ongoing" | "upcoming";
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Intelligent Customer Support AI",
    description:
      "Advanced conversational AI that handles 95% of customer inquiries with human-like responses and sentiment analysis.",
    category: "Conversational AI",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    technologies: ["GPT-4", "NLP", "Sentiment Analysis", "React", "Node.js"],
    results: [
      { metric: "Response Time", value: "< 2 sec" },
      { metric: "Accuracy", value: "95%" },
      { metric: "Cost Reduction", value: "60%" },
    ],
    year: "2024",
    client: "TechCorp Inc.",
    status: "completed",
    featured: true,
  },
  {
    id: 2,
    title: "Predictive Analytics Engine",
    description:
      "Machine learning system that forecasts market trends and customer behavior with 89% accuracy.",
    category: "Machine Learning",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "Apache Spark", "AWS", "Docker"],
    results: [
      { metric: "Prediction Accuracy", value: "89%" },
      { metric: "Processing Speed", value: "10x faster" },
      { metric: "ROI Increase", value: "180%" },
    ],
    year: "2024",
    client: "DataFlow Solutions",
    status: "completed",
    featured: true,
  },
  {
    id: 3,
    title: "Computer Vision Quality Control",
    description:
      "AI-powered visual inspection system that detects defects in manufacturing with superhuman precision.",
    category: "Computer Vision",
    icon: Eye,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    technologies: ["OpenCV", "PyTorch", "YOLO", "FastAPI", "Redis"],
    results: [
      { metric: "Defect Detection", value: "99.2%" },
      { metric: "False Positives", value: "< 0.5%" },
      { metric: "Efficiency Gain", value: "300%" },
    ],
    year: "2024",
    client: "Manufacturing Co.",
    status: "completed",
    featured: false,
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description:
      "Real-time fraud detection using advanced ML algorithms to protect financial transactions.",
    category: "Security AI",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["Scikit-learn", "Apache Kafka", "PostgreSQL", "Kubernetes"],
    results: [
      { metric: "Fraud Detection", value: "96%" },
      { metric: "False Alarms", value: "< 2%" },
      { metric: "Processing Time", value: "< 100ms" },
    ],
    year: "2024",
    client: "SecureBank",
    status: "ongoing",
    featured: true,
  },
  {
    id: 5,
    title: "Neural Network Optimizer",
    description:
      "Automated hyperparameter tuning system that optimizes neural networks for maximum performance.",
    category: "AutoML",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["AutoML", "Hyperopt", "MLflow", "Jupyter", "Python"],
    results: [
      { metric: "Model Performance", value: "+25%" },
      { metric: "Training Time", value: "-40%" },
      { metric: "Resource Usage", value: "-30%" },
    ],
    year: "2024",
    client: "AI Research Lab",
    status: "completed",
    featured: false,
  },
  {
    id: 6,
    title: "Intelligent Process Automation",
    description:
      "End-to-end workflow automation using AI agents for document processing and decision making.",
    category: "RPA + AI",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    technologies: ["UiPath", "OCR", "NLP", "Azure", "Power Automate"],
    results: [
      { metric: "Process Speed", value: "500% faster" },
      { metric: "Error Reduction", value: "85%" },
      { metric: "Cost Savings", value: "$2M/year" },
    ],
    year: "2024",
    client: "Enterprise Corp",
    status: "ongoing",
    featured: true,
  },
];

const categories = [
  "All",
  "Conversational AI",
  "Machine Learning",
  "Computer Vision",
  "Security AI",
  "AutoML",
  "RPA + AI",
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants : Variants = {
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



  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ y: backgroundY }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how we&apos;ve helped businesses across industries leverage the
            power of AI to achieve unprecedented growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            className="mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-yellow-400" />
              Featured Projects
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                  featured={true}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              All Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                  featured={false}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  featured: boolean;
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  featured,
}: ProjectCardProps) {
  const statusColors = {
    completed: "text-green-400 bg-green-400/20",
    ongoing: "text-yellow-400 bg-yellow-400/20",
    upcoming: "text-blue-400 bg-blue-400/20",
  };

  return (
    <motion.div
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: index * 0.1,
          },
        },
      }}
      whileHover="hover"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <motion.div
        variants={{
          hover: {
            scale: 1.02,
            transition: { duration: 0.2 },
          },
        }}
        className="relative h-full"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <project.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {project.results.map((result, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-white">
                  {result.value}
                </div>
                <div className="text-xs text-gray-400">{result.metric}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {project.client}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="text-sm">View Details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
}
