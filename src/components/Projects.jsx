import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Star,
  TrendingUp,
  Users,
  Clock,
  Eye,
  Play,
} from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
      image: "/project1.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      features: [
        "Payment Processing",
        "Admin Dashboard",
        "Inventory Management",
        "User Authentication",
      ],
      stats: [
        { label: "Performance", value: "95%", icon: TrendingUp },
        { label: "Users", value: "10K+", icon: Users },
        { label: "Load Time", value: "1.2s", icon: Clock },
      ],
      color: "from-blue-500 to-blue-600",
      icon: Globe,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Modern task management application with real-time collaboration and advanced filtering.",
      image: "/project2.jpg",
      category: "frontend",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/username/task-app",
      features: [
        "Real-time Sync",
        "Advanced Filtering",
        "Team Collaboration",
        "Dark Mode",
      ],
      stats: [
        { label: "Tasks", value: "50K+", icon: TrendingUp },
        { label: "Users", value: "5K+", icon: Users },
        { label: "Performance", value: "98%", icon: Star },
      ],
      color: "from-green-500 to-green-600",
      icon: Code,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with interactive animations and responsive design.",
      image: "/project3.jpg",
      category: "frontend",
      technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      features: [
        "Interactive Animations",
        "Responsive Design",
        "Dark Mode",
        "SEO Optimized",
      ],
      stats: [
        { label: "Performance", value: "100%", icon: Star },
        { label: "Accessibility", value: "95%", icon: Eye },
        { label: "Load Time", value: "0.8s", icon: Clock },
      ],
      color: "from-purple-500 to-purple-600",
      icon: Palette,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/project4.jpg",
      category: "mobile",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://banking-app-demo.com",
      githubUrl: "https://github.com/username/banking-app",
      features: [
        "Biometric Auth",
        "Real-time Transactions",
        "Push Notifications",
        "Security",
      ],
      stats: [
        { label: "Security", value: "99.9%", icon: Star },
        { label: "Users", value: "25K+", icon: Users },
        { label: "Uptime", value: "99.9%", icon: TrendingUp },
      ],
      color: "from-red-500 to-red-600",
      icon: Smartphone,
    },
    {
      id: 5,
      title: "API Gateway Service",
      description:
        "High-performance API gateway with rate limiting, caching, and authentication.",
      image: "/project5.jpg",
      category: "backend",
      technologies: ["Node.js", "Redis", "Docker", "Kubernetes"],
      liveUrl: "https://api-gateway-demo.com",
      githubUrl: "https://github.com/username/api-gateway",
      features: ["Rate Limiting", "Caching", "Authentication", "Monitoring"],
      stats: [
        { label: "Requests/sec", value: "10K+", icon: TrendingUp },
        { label: "Uptime", value: "99.9%", icon: Clock },
        { label: "Latency", value: "50ms", icon: Zap },
      ],
      color: "from-orange-500 to-orange-600",
      icon: Database,
    },
    {
      id: 6,
      title: "AI Chat Application",
      description:
        "Intelligent chat application powered by AI with natural language processing.",
      image: "/project6.jpg",
      category: "ai",
      technologies: ["React", "Python", "OpenAI", "WebSocket"],
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/username/ai-chat",
      features: [
        "AI Integration",
        "Real-time Chat",
        "Voice Recognition",
        "Multi-language",
      ],
      stats: [
        { label: "Accuracy", value: "95%", icon: Star },
        { label: "Languages", value: "10+", icon: Globe },
        { label: "Response Time", value: "2s", icon: Clock },
      ],
      color: "from-indigo-500 to-indigo-600",
      icon: Zap,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      label: "AI/ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-dark/20" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <Play className="h-12 w-12 mx-auto mb-2" />
            <span className="text-sm font-medium">View Details</span>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color}`}
        >
          {project.category.toUpperCase()}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
          >
            <project.icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-muted/50 text-xs text-muted-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.stats.slice(0, 3).map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <div className="text-sm font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 btn-outline text-sm py-2"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Live Demo
          </Button>
          <Button size="sm" className="flex-1 btn-primary text-sm py-2">
            <Github className="h-4 w-4 mr-1" />
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-muted/30 rounded-xl"
                  >
                    <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button asChild className="btn-primary flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="btn-outline flex items-center gap-2"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="projects" className="section-padding">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured
            <span className="text-gradient block">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work showcasing modern web development, innovative
            solutions, and exceptional user experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
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
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge
              technology.
            </p>
            <Link to="/Contact">
              <Button className="btn-primary inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
