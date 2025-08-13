import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Code,
  Clock,
  TrendingUp,
  Zap,
  Star,
  GitBranch,
  Eye,
  Calendar,
  ExternalLink,
  Play,
  BookOpen,
} from "lucide-react";

const NowSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => clearInterval(timer);
  }, []);

  const currentProjects = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description:
        "Building a real-time chat app with AI integration using React, Node.js, and OpenAI API.",
      tech: ["React", "Node.js", "OpenAI", "Socket.io"],
      progress: 75,
      status: "In Progress",
      github: "https://github.com/codewithfitse/ai-chat-app",
      demo: "https://ai-chat-demo.com",
      lastCommit: "2 hours ago",
      commits: 47,
      stars: 12,
    },
    {
      id: 2,
      title: "E-commerce Platform Redesign",
      description:
        "Modernizing an existing e-commerce platform with improved UX and performance optimizations.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      progress: 90,
      status: "Near Completion",
      github: "https://github.com/codewithfitse/ecommerce-redesign",
      demo: "https://ecommerce-redesign.com",
      lastCommit: "1 day ago",
      commits: 89,
      stars: 23,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description:
        "Developing a secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Node.js", "MongoDB", "AWS"],
      progress: 60,
      status: "Active Development",
      github: "https://github.com/codewithfitse/mobile-banking",
      demo: "https://mobile-banking-demo.com",
      lastCommit: "3 hours ago",
      commits: 156,
      stars: 8,
    },
  ];

  const recentActivity = [
    {
      type: "commit",
      message: "Add real-time chat functionality",
      repo: "ai-chat-app",
      time: "2 hours ago",
      icon: GitBranch,
    },
    {
      type: "star",
      message: "Received 3 new stars",
      repo: "ecommerce-redesign",
      time: "1 day ago",
      icon: Star,
    },
    {
      type: "issue",
      message: "Fixed authentication bug",
      repo: "mobile-banking",
      time: "2 days ago",
      icon: Code,
    },
    {
      type: "pull",
      message: "Merged performance improvements",
      repo: "portfolio-website",
      time: "3 days ago",
      icon: TrendingUp,
    },
  ];

  const learningGoals = [
    {
      skill: "Three.js & WebGL",
      progress: 40,
      description: "Learning 3D graphics for web applications",
      icon: Eye,
    },
    {
      skill: "Machine Learning",
      progress: 65,
      description: "Deepening AI/ML knowledge for better integrations",
      icon: Zap,
    },
    {
      skill: "DevOps & CI/CD",
      progress: 80,
      description: "Mastering deployment and automation",
      icon: Play,
    },
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="section-padding">
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
              Live Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I'm Working On
            <span className="text-gradient block">Right Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with my current projects, recent activity, and ongoing
            learning journey.
          </p>
        </motion.div>

        {/* Live Time & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="card mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 font-semibold">
              Currently Online
            </span>
          </div>
          <div className="text-2xl font-mono text-foreground mb-2">
            {formatTime(currentTime)}
          </div>
          <div className="text-muted-foreground">{formatDate(currentTime)}</div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Code className="h-6 w-6 text-accent" />
              Active Projects
            </h3>

            <div className="space-y-6">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Near Completion"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-blue-500/10 text-blue-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-accent to-accent-dark h-2 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted/50 text-xs text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-foreground">
                        {project.commits}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Commits
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">
                        {project.stars}
                      </div>
                      <div className="text-xs text-muted-foreground">Stars</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {project.lastCommit}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Last Commit
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm flex items-center gap-2 flex-1 justify-center"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm flex items-center gap-2 flex-1 justify-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity & Learning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Recent Activity */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Clock className="h-6 w-6 text-accent" />
                Recent Activity
              </h3>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="icon-box">
                      <activity.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">
                        {activity.message}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {activity.repo} • {activity.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-accent" />
                Currently Learning
              </h3>

              <div className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <motion.div
                    key={goal.skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-box">
                        <goal.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {goal.skill}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {goal.description}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-accent to-accent-dark h-2 rounded-full"
                      />
                    </div>
                    <div className="text-right text-xs text-muted-foreground mt-1">
                      {goal.progress}% complete
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to exciting new projects and collaborations. Let's
              build something amazing together!
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              Get In Touch
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NowSection;
