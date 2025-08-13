import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Code,
  Sparkles,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/codewithfitse", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fitsum-zerihun-89aab02a9",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/lil_fitse?t=cmxfDqpAWbK_l75aeqygzg&s=09",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Project" },
    { name: "Services", href: "/Service" },
    { name: "Contact", href: "/Contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "fitsum@example.com",
      href: "mailto:fitsum@example.com",
    },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "Addis Ababa, Ethiopia", href: "#" },
  ];

  const stats = [
    { icon: Star, value: "5.0", label: "Client Rating" },
    { icon: TrendingUp, value: "50+", label: "Projects Delivered" },
    { icon: Zap, value: "< 24h", label: "Response Time" },
    { icon: Code, value: "3+", label: "Years Experience" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Elite Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-dark/5" />

      <div className="container py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Elite Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/portfolioLogo.png"
                  alt="Fitsum Zerihun"
                  className="h-12 w-12 rounded-full ring-2 ring-accent/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-accent/20 border-t-accent"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-accent/10"
                />
              </div>
              <div>
                <span className="font-bold text-2xl text-foreground">
                  Fitsum
                </span>
                <p className="text-accent font-medium text-sm flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences and
              building solutions that make a real impact. Let's bring your ideas
              to life with cutting-edge technology.
            </p>

            {/* Elite Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-lg font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Elite Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground font-medium">
                Connect:
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    className="icon-box group hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-accent group-hover:text-accent-dark transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Elite Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
              <Code className="h-5 w-5 text-accent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Elite Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.text}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="icon-box group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm">{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Elite Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-16 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Fitsum Zerihun. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center lg:justify-start gap-1">
                <Code className="h-3 w-3" />
                Crafted with modern technologies and best practices
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground font-medium">
                  Follow me:
                </span>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                      className="p-2 rounded-lg bg-muted/50 hover:bg-accent/10 transition-colors hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-accent" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Elite Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="icon-box group hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                title="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-accent group-hover:text-accent-dark transition-colors" />
              </motion.button>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm flex items-center justify-center gap-2"
            >
              Made with
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              by Fitsum Zerihun
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
