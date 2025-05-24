"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, ChevronRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full featured e-commerce platform with product management, cart, checkout, and payment integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://demo-ecommerce.example.com",
    github: "https://github.com/yourusername/ecommerce",
    featured: true,
    color: "blue"
  },
  {
    title: "Task Management App",
    description: "A Trello-like task management application with drag-and-drop functionality and team collaboration.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    demo: "https://task-app.example.com",
    github: "https://github.com/yourusername/task-app",
    featured: true,
    color: "indigo"
  },
  {
    title: "Personal Blog",
    description: "A markdown-based blog with categories, tags, and comment system.",
    image: "/projects/blog.jpg",
    tags: ["Next.js", "MDX", "Tailwind"],
    demo: "https://blog.example.com",
    github: "https://github.com/yourusername/blog",
    featured: false,
    color: "purple"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with 7-day forecast, location search, and interactive maps.",
    image: "/projects/weather.jpg", 
    tags: ["React", "OpenWeather API", "Leaflet", "ChartJS"],
    demo: "https://weather.example.com",
    github: "https://github.com/yourusername/weather-app",
    featured: false,
    color: "cyan"
  },
  {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout plans, nutrition logs and progress visualization.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Redux", "Firebase", "Chart.js"],
    demo: "https://fitness.example.com",
    github: "https://github.com/yourusername/fitness-tracker",
    featured: false,
    color: "green"
  },
  {
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform with search, filtering, and user profiles.",
    image: "/projects/recipe.jpg",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    demo: "https://recipes.example.com",
    github: "https://github.com/yourusername/recipe-platform",
    featured: false,
    color: "orange"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// 3D tilt effect for project cards
const useTilt = (scale = 1.05, perspective = 1000, speed = 500) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(1);
  const springConfig = { damping: 25, stiffness: 300 };
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const scaleValue = useSpring(z, springConfig);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    z.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    z.set(1);
  };

  return {
    ref,
    style: {
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleValue})`,
      transition: `transform ${speed}ms`,
    },
    onMouseMove: handleMouse,
    onMouseLeave: handleMouseLeave
  };
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: { 
    scale: 1.03, 
    y: -10,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 }
  }
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Featured Project Component
const FeaturedProject = ({ project, index }) => {
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"]
  });
    
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 50]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]);

  return (
    <motion.div
      ref={projectRef}
      key={project.title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project Image */}
      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <motion.div
          style={{ 
            scale: imageScale,
            rotate: imageRotate,
            transformStyle: "preserve-3d",
            transformPerspective: "1000px"
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-video"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/20 z-10" />
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover"
          />
            
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex gap-4">
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
        
      {/* Project Info */}
      <motion.div
        style={{ y: textY }}
        className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>
            
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full text-xs bg-foreground/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
            
          <div className="flex gap-4">
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="group">
                  <Github className="h-4 w-4 mr-2" />
                  <span>Code</span>
                </Button>
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="group">
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Grid Project Component
const GridProject = ({ project, index }) => {
  const tiltProps = useTilt();
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="relative h-full"
    >
      <div 
        {...tiltProps}
        className="relative h-full group rounded-2xl overflow-hidden bg-foreground/[0.03] border border-foreground/10 hover:border-primary/20 transition-all duration-500 shadow-lg shadow-black/[0.03]"
      >
        {/* Project image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
          
        {/* Project content */}
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
            
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 rounded-full text-xs bg-foreground/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 rounded-full text-xs bg-foreground/5">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
            
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <Github className="h-4 w-4" />
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
              
            <Link href={project.demo || project.github || "#"} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1 text-xs font-normal opacity-80 hover:opacity-100 px-2 h-7"
              >
                <span>View Project</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const sectionRef = useRef(null);
  const [particles, setParticles] = useState([]);
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  // Update visible projects when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setVisibleProjects(projects);
    } else if (activeTab === "featured") {
      setVisibleProjects(featuredProjects);
    } else {
      setVisibleProjects(otherProjects);
    }
  }, [activeTab, featuredProjects, otherProjects]);

  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      duration: 10 + Math.random() * 20,
      yAnimation: [
        Math.random() * 100, 
        Math.random() * 100,
        Math.random() * 100
      ],
      rotate: Math.random() * 360,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <Section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* 3D particles background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                x: `${particle.x}%`, 
                y: `${particle.y}%`,
                opacity: particle.opacity,
                scale: particle.scale
              }}
              animate={{ 
                y: [
                  `${particle.yAnimation[0]}%`, 
                  `${particle.yAnimation[1]}%`,
                  `${particle.yAnimation[2]}%`
                ],
                rotate: [0, particle.rotate, 0],
              }}
              transition={{ 
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute rounded-full bg-gradient-to-r from-primary/5 to-primary/10 blur-xl"
              style={{ 
                width: `${particle.width}px`,
                height: `${particle.height}px`,
              }}
            />
          ))}
          
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity: opacitySection }}
        className="container max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div 
          variants={fadeIn}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title="Dự án" 
            subtitle="Những dự án tôi đã thực hiện"
          />

                <motion.div
            className="flex justify-center mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
          >
            <div className="flex overflow-hidden p-1 bg-foreground/5 backdrop-blur-sm rounded-full">
              {["all", "featured", "other"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-lg"
                      : "hover:bg-foreground/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tab === "all" ? "Tất cả" : tab === "featured" ? "Nổi bật" : "Khác"}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <div className="mt-20">
          {/* Featured Projects - Show in "all" and "featured" tabs */}
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "featured") && featuredProjects.length > 0 && (
              <motion.div 
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-32 mb-32"
              >
                {featuredProjects.map((project, index) => <FeaturedProject key={project.title} project={project} index={index} />)}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Grid Projects - Show in "all" and "other" tabs */}
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "other") && otherProjects.length > 0 && (
                  <motion.div
                key="grid"
                variants={fadeIn}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Only show heading if we're on the "all" tab and there are featured projects */}
                {activeTab === "all" && featuredProjects.length > 0 && (
                  <motion.h3 
                    className="text-2xl font-semibold mb-10 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span 
                      className="w-8 h-[2px] bg-primary mr-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    Các dự án khác
                  </motion.h3>
                )}
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {/* Show only 3 in "all" tab, but show all in "other" tab */}
                  {(activeTab === "all" ? otherProjects.slice(0, 3) : otherProjects).map(
                    (project, index) => <GridProject key={project.title} project={project} index={index} />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* No projects message */}
          {visibleProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">Không có dự án nào trong danh mục này.</p>
            </motion.div>
          )}
        </div>

        <motion.div
          variants={fadeIn}
          className="mt-20 flex justify-center"
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              asChild
              variant="outline"
              className="px-8 py-6 rounded-full text-lg group border-foreground/20 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span>Xem thêm dự án trên GitHub</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatDelay: 0.8,
                    duration: 1.5 
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
          </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
} 