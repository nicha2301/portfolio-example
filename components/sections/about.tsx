"use client";

import React from "react";
import { Calendar, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Section, SectionHeading } from "@/components/ui/section";

const timelineItems = [
  {
    title: "Vị trí hiện tại",
    description: "Senior Frontend Developer tại Công ty XYZ",
    date: "2022 - Hiện tại",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Vị trí cũ",
    description: "Web Developer tại Công ty ABC",
    date: "2019 - 2022",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Tốt nghiệp",
    description: "Đại học Công nghệ Thông tin",
    date: "2015 - 2019",
    icon: <GraduationCap className="h-4 w-4" />,
  },
];

const strengths = [
  "Phát triển Frontend với React, Next.js",
  "Thiết kế UI/UX sáng tạo",
  "RESTful API & GraphQL",
  "Làm việc nhóm hiệu quả",
  "Học hỏi công nghệ mới nhanh chóng"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function AboutSection() {
  return (
    <Section id="about" className="py-24 relative overflow-hidden">
      {/* Modern subtle background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/5 dark:to-fuchsia-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading 
              title="Về tôi" 
              subtitle="Con đường sự nghiệp và những điều tôi theo đuổi"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-10 mix-blend-overlay transition-opacity group-hover:opacity-70 duration-700" />
                
                {/* Profile image placeholder - replace with actual image */}
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <span className="text-4xl text-muted-foreground/20 font-medium">Your Photo</span>
                </div>
                
                {/* Subtle border effect */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-20" />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Điểm mạnh</h3>
                <div className="grid grid-cols-1 gap-3">
                  {strengths.map((strength, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-foreground/[0.03] px-4 py-3 rounded-lg hover:bg-foreground/[0.05] transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                      <span>{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-xl font-medium mb-6">Câu chuyện của tôi</h3>
                <p className="text-muted-foreground">
                  Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển web, tôi đã xây dựng nhiều dự án từ nhỏ đến lớn, 
                  từ landing page đơn giản đến ứng dụng phức tạp với nhiều người dùng.
                </p>
                <p className="text-muted-foreground">
                  Tôi chuyên về các công nghệ JavaScript hiện đại như React, Next.js, Node.js cùng với kiến thức 
                  về UX/UI design và tối ưu hiệu năng. Tôi luôn cập nhật những xu hướng công nghệ mới nhất.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-6">Kinh nghiệm</h3>
                <div className="space-y-5">
                  {timelineItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="flex gap-4"
                    >
                      <div className="relative">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/[0.03] border border-foreground/10">
                          {item.icon}
                        </div>
                        {index !== timelineItems.length - 1 && (
                          <div className="absolute top-10 left-1/2 h-full w-[1px] -translate-x-1/2 bg-foreground/10"></div>
                        )}
                      </div>
                      
                      <div className="pb-8">
                        <h4 className="text-lg font-medium">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground/80 mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" /> {item.date}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}