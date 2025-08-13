import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
  Heart,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Fitsum transformed our entire user experience. His attention to detail and technical expertise delivered a solution that exceeded our expectations. The performance improvements alone were game-changing.",
      project: "E-commerce Platform Redesign",
      impact: "↑ 45% conversion rate",
      duration: "3 months",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "/avatar2.jpg",
      rating: 5,
      text: "Working with Fitsum was a revelation. He not only delivered exceptional code but also provided strategic insights that improved our entire development process. Highly recommend!",
      project: "Mobile Banking App",
      impact: "↑ 2.1x user engagement",
      duration: "6 months",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      avatar: "/avatar3.jpg",
      rating: 5,
      text: "Fitsum's ability to translate complex design requirements into flawless code is unmatched. His collaborative approach and technical brilliance made our vision a reality.",
      project: "Portfolio Website Suite",
      impact: "↑ 60% client satisfaction",
      duration: "2 months",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "Innovation Labs",
      avatar: "/avatar4.jpg",
      rating: 5,
      text: "Fitsum delivered a scalable solution that grew with our business. His expertise in modern technologies and commitment to quality made him an invaluable partner.",
      project: "SaaS Platform",
      impact: "↑ 300% revenue growth",
      duration: "8 months",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP Engineering",
      company: "Enterprise Solutions",
      avatar: "/avatar5.jpg",
      rating: 5,
      text: "Fitsum's technical depth and business acumen are rare. He consistently delivered high-quality solutions on time and within budget. A true professional.",
      project: "API Gateway Service",
      impact: "↑ 99.9% uptime",
      duration: "4 months",
    },
  ];

  const stats = [
    {
      icon: Star,
      value: "5.0",
      label: "Average Rating",
      description: "Perfect scores across all projects",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      value: "50+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Success Rate",
      description: "All projects delivered on time",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      value: "24/7",
      label: "Support Available",
      description: "Always here when you need me",
      color: "from-red-500 to-red-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding background-accent">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients
            <span className="text-gradient block">Say About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working together and the results we've achieved.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main Testimonial */}
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-4 right-4 text-accent/10">
                <Quote className="h-24 w-24" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">
                    Project
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.project}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">
                    Impact
                  </div>
                  <div className="font-semibold text-green-600">
                    {currentTestimonial.impact}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">
                    Duration
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.duration}
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-accent-dark flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-muted hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join My Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together and add your success story
              to this list.
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <Award className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
