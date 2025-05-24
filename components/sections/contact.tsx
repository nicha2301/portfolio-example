"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, AlertCircle, Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  email: z.string().email({ message: "Email không hợp lệ." }),
  message: z.string().min(5, { message: "Tin nhắn phải có ít nhất 5 ký tự." }),
});

const contactCards = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Địa chỉ",
    value: "Hà Nội, Việt Nam",
    link: "https://maps.google.com",
    color: "bg-red-500/10 text-red-500"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Điện thoại",
    value: "+84 123 456 789",
    link: "tel:+84123456789",
    color: "bg-green-500/10 text-green-500"
  }
];

const socialLinks = [
  { name: "Github", icon: <Github className="h-5 w-5" />, url: "https://github.com/yourusername", color: "hover:bg-neutral-800" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/yourusername", color: "hover:bg-blue-600" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com/yourusername", color: "hover:bg-sky-500" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    errors: null
  });
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setFormState({ ...formState, submitting: true, succeeded: false });
    
    setTimeout(() => {
      console.log("Form submitted with data:", data);
      setFormState({ 
        submitting: false, 
        succeeded: true,
        errors: null
      });
      reset();
    }, 1500);
  };

  return (
    <Section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-20"></div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-[120px]"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
            y: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-full blur-[100px]"
        />
      </div>
      
      <motion.div 
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
        <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading 
            title="Liên hệ" 
            subtitle="Hãy kết nối và trao đổi ý tưởng"
          />
          <p className="text-muted-foreground mt-6">
            Tôi luôn mở với các cơ hội dự án mới, cộng tác hoặc những cuộc trò chuyện thú vị về công nghệ và thiết kế.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form column */}
          <motion.div variants={fadeIn}>
            <div className="bg-foreground/[0.02] backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 h-full shadow-lg shadow-primary/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                <span>Gửi tin nhắn</span>
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">Tên của bạn</label>
                      <div className="relative">
                        <input
                          id="name"
                          placeholder="Nhập tên của bạn"
                          className={`w-full px-4 py-3 bg-white/10 border border-foreground/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all placeholder:text-foreground/40 text-foreground ${
                            errors.name ? "border-red-500" : ""
                          }`}
                          {...register("name")}
                        />
                        {errors.name && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email của bạn</label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          className={`w-full px-4 py-3 bg-white/10 border border-foreground/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all placeholder:text-foreground/40 text-foreground ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          {...register("email")}
                        />
                        {errors.email && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Tin nhắn của bạn</label>
                    <textarea
                      id="message"
                      placeholder="Hãy chia sẻ ý tưởng hoặc dự án của bạn..."
                      rows={6}
                      className={`w-full px-4 py-3 bg-white/10 border border-foreground/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all placeholder:text-foreground/40 text-foreground ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={formState.submitting} 
                  className="w-full py-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 group"
                >
                  {formState.submitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Đang gửi...</span>
                    </div>
                  ) : formState.succeeded ? (
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 mr-1" />
                      <span>Đã gửi thành công</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Gửi tin nhắn</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info column */}
          <motion.div variants={fadeIn} className="flex flex-col gap-8">
            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.title}
                  href={card.link}
                  target={card.title === "Địa chỉ" ? "_blank" : undefined}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-foreground/[0.02] backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group shadow-md shadow-primary/5"
                >
                  <div className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1">{card.title}</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{card.value}</p>
                </motion.a>
              ))}
            </div>
            
            {/* Map or additional content */}
            <motion.div
              variants={fadeIn}
              className="bg-foreground/[0.02] backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 flex-grow shadow-md shadow-primary/5"
            >
              <h3 className="text-2xl font-bold mb-6">Theo dõi tôi</h3>
              <p className="text-muted-foreground mb-6">
                Hãy kết nối với tôi trên các nền tảng mạng xã hội để cập nhật những tin tức mới nhất và dự án của tôi.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className={`w-12 h-12 bg-white/10 ${link.color} hover:text-white rounded-full flex items-center justify-center transition-all duration-300`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <h4 className="text-lg font-medium mb-4">Thời gian làm việc</h4>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Thứ Hai - Thứ Sáu:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ Bảy:</span>
                    <span>9:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span>Nghỉ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-32 text-center text-sm text-muted-foreground"
      >
        <p>© {new Date().getFullYear()} • Thiết kế và phát triển với 💜</p>
      </motion.div>
    </Section>
  );
}