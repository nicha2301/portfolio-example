"use client";

import React from "react";
import { motion } from "framer-motion";

import { Section, SectionHeading } from "@/components/ui/section";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    description: "Xây dựng giao diện người dùng mượt mà, đáp ứng và dễ sử dụng",
    skills: [
      { name: "JavaScript", level: "Expert", icon: "/icons/javascript.svg" },
      { name: "TypeScript", level: "Advanced", icon: "/icons/typescript.svg" },
      { name: "React", level: "Expert", icon: "/icons/react.svg" },
      { name: "Next.js", level: "Advanced", icon: "/icons/nextjs.svg" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "/icons/html5.svg" },
      { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.svg" },
      { name: "Framer Motion", level: "Intermediate", icon: "/icons/framer.svg" },
      { name: "Redux", level: "Advanced", icon: "/icons/redux.svg" },
    ],
    bgGradient: "from-blue-400/5 to-cyan-400/5",
    accentColor: "blue-500"
  },
  {
    category: "Backend",
    icon: "⚙️",
    description: "Phát triển API và xử lý dữ liệu phía máy chủ",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "/icons/nodejs.svg" },
      { name: "Express", level: "Advanced", icon: "/icons/express.svg" },
      { name: "MongoDB", level: "Advanced", icon: "/icons/mongodb.svg" },
      { name: "PostgreSQL", level: "Intermediate", icon: "/icons/postgresql.svg" },
      { name: "GraphQL", level: "Intermediate", icon: "/icons/graphql.svg" },
      { name: "RESTful APIs", level: "Advanced", icon: "/icons/api.svg" },
      { name: "Authentication", level: "Advanced", icon: "/icons/auth.svg" },
    ],
    bgGradient: "from-indigo-400/5 to-purple-400/5",
    accentColor: "indigo-500"
  },
  {
    category: "Công cụ & Kỹ năng khác",
    icon: "🛠️",
    description: "Công cụ và quy trình làm việc để tối ưu hóa phát triển",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "/icons/github.svg" },
      { name: "Docker", level: "Intermediate", icon: "/icons/docker.svg" },
      { name: "CI/CD", level: "Intermediate", icon: "/icons/cicd.svg" },
      { name: "Testing", level: "Advanced", icon: "/icons/jest.svg" },
      { name: "Figma", level: "Advanced", icon: "/icons/figma.svg" },
      { name: "Responsive Design", level: "Expert", icon: "/icons/responsive.svg" },
      { name: "Performance", level: "Advanced", icon: "/icons/performance.svg" },
    ],
    bgGradient: "from-fuchsia-400/5 to-pink-400/5",
    accentColor: "fuchsia-500"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function SkillsSection() {
  return (
    <Section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-7xl">
        <motion.div
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
          <motion.div variants={fadeInUp}>
            <SectionHeading 
              title="Kỹ năng" 
              subtitle="Những công nghệ và công cụ tôi thành thạo"
            />
          </motion.div>
          
          <div className="mt-20 space-y-20">
            {skillCategories.map((category) => (
              <motion.div 
                key={category.category}
                variants={fadeInUp}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                    <p className="text-muted-foreground mt-2 max-w-xl">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.1 + index * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className={`h-full group rounded-2xl border border-${category.accentColor}/10 hover:border-${category.accentColor}/30 bg-white/5 dark:bg-white/[0.02] p-6 backdrop-blur-sm hover:shadow-xl hover:shadow-${category.accentColor}/5 transition-all duration-300`}>
                        <div className="flex flex-col h-full">
                          <div className="mb-4">
                            <div className="w-12 h-12 rounded-xl bg-foreground/[0.02] flex items-center justify-center">
                              <span className="text-2xl">{skill.icon ? "🔹" : "🔹"}</span>
                            </div>
                          </div>
                          
                          <h4 className="font-medium text-base mb-1">{skill.name}</h4>
                          <span className={`text-xs text-${category.accentColor}`}>{skill.level}</span>
                          
                          <div className="mt-4 pt-4 border-t border-foreground/5 flex-grow flex items-end">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              className={`w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden`}
                            >
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ 
                                  width: skill.level === "Expert" ? "100%" : 
                                         skill.level === "Advanced" ? "85%" : "70%" 
                                }}
                                transition={{ 
                                  duration: 1,
                                  delay: 0.2 + index * 0.1,
                                  ease: "easeOut" 
                                }}
                                viewport={{ once: true }}
                                className={`h-full bg-${category.accentColor} rounded-full`}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-28 text-center"
        >
          <div className="inline-block px-6 py-3 border border-foreground/10 rounded-full bg-foreground/[0.02] backdrop-blur-sm">
            <p className="text-muted-foreground">Luôn không ngừng học hỏi và cập nhật những công nghệ mới nhất</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
} 