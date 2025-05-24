"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MoveDown, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Github", icon: <Github className="h-5 w-5" />, url: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/yourusername" },
  { name: "Email", icon: <Mail className="h-5 w-5" />, url: "mailto:your.email@example.com" }
];

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-20"></div>
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-[15%] w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-3xl"
        />
      </div>
      
      {/* Social links */}
      <div className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50">
        <div className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <div className="w-px h-24 bg-foreground/20"></div>
      </div>
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container flex flex-col justify-center min-h-screen pt-20 pb-32"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight relative">
                <span className="mr-4">Xin chào, tôi là</span>
                <div className="relative inline-block group">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 group-hover:from-purple-500 group-hover:to-primary transition-all duration-700">[Tên của tôi]</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-4 left-0 h-3 lg:h-5 bg-primary/20 -z-10"
                  ></motion.span>
                </div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 max-w-3xl">
                Fullstack Developer chuyên về{" "}
                <span className="text-primary font-semibold">React</span> &{" "}
                <span className="text-primary font-semibold">Next.js</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Tôi thiết kế và xây dựng trải nghiệm web hiện đại, tập trung vào sự đơn giản,
              hiệu quả và trải nghiệm người dùng tuyệt vời.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <Button 
                asChild
                className="px-10 py-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
                size="lg"
              >
                <Link href="#projects" className="flex items-center gap-2">
                  <span>Xem dự án</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      repeatDelay: 1
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="px-10 py-8 text-lg rounded-full border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Link href="#contact">Liên hệ với tôi</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium mb-2">CUỘN XUỐNG</span>
            <MoveDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
} 