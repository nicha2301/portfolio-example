"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Mail, ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="relative pt-10 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-transparent to-muted/20 blur-3xl opacity-50" />
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">P</div>
              <h3 className="font-bold text-xl">Portfolio</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Trang portfolio cá nhân được phát triển với Next.js, Tailwind CSS và Framer Motion.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@example.com
              </p>
              <p>Hà Nội, Việt Nam</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Follow</h3>
            <div className="flex gap-3">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full hover:bg-muted transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full hover:bg-muted transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full hover:bg-muted transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      
        <div className="py-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center"
          >
            © {new Date().getFullYear()} Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by [Tên của bạn]
          </motion.p>
          
          <Button
            variant="outline" 
            size="icon"
            className="rounded-full hover:bg-muted transition-colors"
            aria-label="Scroll to top"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
} 