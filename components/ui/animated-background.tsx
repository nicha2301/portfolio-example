"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

// Các thông số cấu hình cho mỗi section
const sectionConfig = {
  hero: {
    primaryColor: 'bg-gradient-to-br from-purple-500/30 to-blue-500/30',
    secondaryColor: 'bg-gradient-to-br from-pink-500/20 to-purple-500/20',
    tertiaryColor: 'bg-gradient-to-tr from-indigo-500/10 to-violet-500/10',
    scale: 1,
    rotation: 0,
  },
  about: {
    primaryColor: 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30',
    secondaryColor: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20',
    tertiaryColor: 'bg-gradient-to-tr from-blue-500/10 to-teal-500/10',
    scale: 1.2,
    rotation: 15,
  },
  skills: {
    primaryColor: 'bg-gradient-to-br from-cyan-500/30 to-teal-500/30',
    secondaryColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    tertiaryColor: 'bg-gradient-to-tr from-teal-500/10 to-green-500/10',
    scale: 0.9,
    rotation: -15,
  },
  projects: {
    primaryColor: 'bg-gradient-to-br from-violet-500/30 to-purple-500/30',
    secondaryColor: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20',
    tertiaryColor: 'bg-gradient-to-tr from-purple-500/10 to-fuchsia-500/10',
    scale: 1.1,
    rotation: 10,
  },
  contact: {
    primaryColor: 'bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30',
    secondaryColor: 'bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20',
    tertiaryColor: 'bg-gradient-to-tr from-pink-500/10 to-rose-500/10',
    scale: 0.95,
    rotation: -10,
  },
};

// Spring animation configs
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 30,
  mass: 1
};

const fadeTransition = {
  type: "tween", 
  ease: [0.4, 0.0, 0.2, 1],
  duration: 1.2
};

// Interface cho particles
interface BackgroundParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  y1: number;
  y2: number;
  duration: number;
  delay: number;
}

// Component riêng cho phần particles để tránh lỗi hooks
function BackgroundParticles() {
  const [particles, setParticles] = useState<BackgroundParticle[]>([]);
  
  useEffect(() => {
    // Chỉ tạo particles ở phía client
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1,
      scale: Math.random() * 0.5 + 0.5,
      y1: Math.random() * 100,
      y2: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5
    }));
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{ 
            y: [`${particle.y1}%`, `${particle.y2}%`],
            opacity: [0.1, 0.3, 0.1],
            scale: [particle.scale, particle.scale * 1.3, particle.scale]
          }}
          transition={{ 
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function MovingBlob({ className, duration = 20, delay = 0, amplitude = 50 }) {
  const controls = useAnimationControls();
  
  useEffect(() => {
    controls.start({
      y: [0, amplitude, -amplitude, 0],
      x: [0, -amplitude/2, amplitude/2, 0],
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, 10, -10, 0],
      transition: { 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay
      }
    });
  }, [controls, amplitude, delay, duration]);
  
  return (
    <motion.div 
      className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
      animate={controls}
    />
  );
}

// 3D Grid effect
function Grid3D() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] opacity-[0.15]">
      <motion.div 
        className="w-full h-full"
        animate={{
          rotateX: [0, 5, 0],
          rotateY: [0, -3, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          transformPerspective: '1000px',
        }}
      />
    </div>
  );
}

export function AnimatedBackground() {
  const [activeSection, setActiveSection] = useState('hero');
  const [prevSection, setPrevSection] = useState('hero');
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef(null);
  
  // Theo dõi section hiện tại dựa vào scroll position - chỉ chạy ở client
  useEffect(() => {
    setIsMounted(true);
    
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportMiddle = scrollY + viewportHeight / 2;
      
      // Tìm section gần nhất với giữa viewport
      let closestSection = 'hero';
      let closestDistance = Infinity;
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const sectionMiddle = scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(viewportMiddle - sectionMiddle);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = sectionId;
        }
      });
      
      // Sử dụng debounce để giảm số lần thay đổi section
      if (closestSection !== activeSection) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = setTimeout(() => {
          setPrevSection(activeSection);
          setActiveSection(closestSection);
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Chạy một lần khi component mount để xác định section ban đầu
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeSection]);
  
  // Không render gì khi chưa mount (phía server)
  if (!isMounted) {
    return <div className="fixed inset-0 -z-10" />;
  }
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <AnimatePresence mode="sync">
        <motion.div 
          key={activeSection}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fadeTransition}
        >
          {/* Main background blob */}
          <motion.div
            className={`absolute w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] rounded-[40%] opacity-40 ${sectionConfig[activeSection].primaryColor}`}
            initial={{ 
              scale: 0.9, 
              rotate: sectionConfig[prevSection].rotation,
              filter: "blur(70px)"
            }}
            animate={{ 
              scale: sectionConfig[activeSection].scale,
              rotate: sectionConfig[activeSection].rotation,
              filter: "blur(100px)"
            }}
            transition={springTransition}
          />
          
          {/* Moving blobs that float and add depth */}
          <div className="absolute inset-0">
            {/* Large floating blobs */}
            <motion.div
              className={`absolute top-[10%] right-[15%] w-[40vw] h-[40vw] rounded-[60%] opacity-30 ${sectionConfig[activeSection].secondaryColor}`}
              initial={{ 
                x: 50, 
                y: 20, 
                scale: 0.8,
                filter: "blur(80px)"
              }}
              animate={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                filter: "blur(90px)"
              }}
              transition={{
                ...springTransition,
                delay: 0.1
              }}
            />
            
            <motion.div
              className={`absolute bottom-[5%] left-[20%] w-[35vw] h-[35vw] rounded-[50%] opacity-30 ${sectionConfig[activeSection].tertiaryColor}`}
              initial={{ 
                x: -30, 
                y: 40, 
                scale: 0.7,
                filter: "blur(70px)"
              }}
              animate={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                filter: "blur(80px)"
              }}
              transition={{
                ...springTransition,
                delay: 0.2
              }}
            />
            
            {/* Smaller decorative blobs with continuous motion */}
            <MovingBlob 
              className={`top-[30%] left-[10%] w-[15vw] h-[15vw] ${sectionConfig[activeSection].secondaryColor}`}
              duration={25}
              amplitude={60}
            />
            
            <MovingBlob 
              className={`bottom-[25%] right-[15%] w-[20vw] h-[20vw] ${sectionConfig[activeSection].primaryColor}`}
              duration={30}
              delay={5}
              amplitude={40}
            />
            
            <MovingBlob 
              className={`top-[15%] left-[40%] w-[10vw] h-[10vw] ${sectionConfig[activeSection].tertiaryColor}`}
              duration={18}
              delay={2}
              amplitude={30}
            />
          </div>
          
          {/* 3D Grid effect */}
          <Grid3D />
          
          {/* Particles */}
          <BackgroundParticles />
          
          {/* Overlay to improve content readability */}
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 