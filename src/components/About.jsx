import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Award,
  Clock,
  Users,
  Star,
  TrendingUp,
  Target,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Palette,
      skills: [
        {
          name: "React & Next.js",
          level: 95,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "JavaScript (ES6+)",
          level: 92,
          color: "from-yellow-500 to-yellow-600",
        },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700" },
        { name: "TailwindCSS", level: 90, color: "from-cyan-500 to-cyan-600" },
        {
          name: "HTML5 & CSS3",
          level: 95,
          color: "from-orange-500 to-orange-600",
        },
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      skills: [
        {
          name: "Node.js & Express",
          level: 90,
          color: "from-green-500 to-green-600",
        },
        {
          name: "MongoDB & PostgreSQL",
          level: 85,
          color: "from-emerald-500 to-emerald-600",
        },
        {
          name: "RESTful APIs",
          level: 92,
          color: "from-purple-500 to-purple-600",
        },
        { name: "GraphQL", level: 80, color: "from-pink-500 to-pink-600" },
        {
          name: "Authentication & Security",
          level: 88,
          color: "from-red-500 to-red-600",
        },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Zap,
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-600 to-gray-700" },
        { name: "Docker & AWS", level: 75, color: "from-blue-600 to-blue-700" },
        {
          name: "CI/CD Pipelines",
          level: 80,
          color: "from-indigo-500 to-indigo-600",
        },
        {
          name: "Figma & Adobe XD",
          level: 85,
          color: "from-purple-500 to-purple-600",
        },
        {
          name: "Agile & Scrum",
          level: 88,
          color: "from-teal-500 to-teal-600",
        },
      ],
    },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "Freelance & Contract",
      description:
        "Leading development of enterprise-level applications, mentoring junior developers, and implementing best practices for scalable solutions.",
      achievements: [
        "50+ projects delivered",
        "100% client satisfaction",
        "Mentored 10+ developers",
      ],
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      year: "2022 - 2023",
      title: "Full-Stack Developer",
      company: "Tech Startup",
      description:
        "Built scalable web applications, optimized performance, and collaborated with cross-functional teams to deliver exceptional user experiences.",
      achievements: [
        "Improved app performance by 40%",
        "Reduced load times by 60%",
        "Implemented CI/CD pipeline",
      ],
      icon: <Target className="h-5 w-5" />,
    },
    {
      year: "2021 - 2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Developed responsive interfaces, implemented modern design systems, and ensured cross-browser compatibility for client projects.",
      achievements: [
        "Built 20+ responsive websites",
        "Implemented design system",
        "Achieved 95% accessibility score",
      ],
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "50+",
      label: "Projects Completed",
      description: "Successfully delivered",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Clock,
      value: "3+",
      label: "Years Experience",
      description: "Professional expertise",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      value: "100%",
      label: "Client Satisfaction",
      description: "Happy clients",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Star,
      value: "24/7",
      label: "Support Available",
      description: "Always here to help",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const SkillBar = ({ skill }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-semibold text-sm">
          {skill.name}
        </span>
        <span className="text-accent font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`bg-gradient-to-r ${skill.color} h-full rounded-full relative overflow-hidden`}
        >
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section id="about" className="section-padding background-accent">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Elite Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Section Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  About Me
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              >
                Crafting Digital
                <span className="text-gradient block">Experiences</span>
              </motion.h2>
            </div>

            {/* Elite About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed text-lg"
            >
              <p>
                I'm a passionate full-stack developer with a deep love for
                creating exceptional digital experiences. My journey in
                technology began with curiosity and has evolved into a career of
                building solutions that make a real impact in people's lives.
              </p>
              <p>
                With expertise in modern web technologies, I specialize in
                React, Node.js, and AI integration. I believe in writing clean,
                maintainable code and creating user experiences that are both
                beautiful and functional. Every project is an opportunity to
                push boundaries and deliver excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always excited to take on new
                challenges and learn from every project.
              </p>
            </motion.div>

            {/* Elite Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Professional Journey
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-accent/30 hover:border-accent/60 transition-colors duration-300 group"
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gradient-to-r from-accent to-accent-dark rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-bold text-sm bg-accent/10 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                        <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-accent font-medium text-sm">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Elite Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Elite Skills Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Skills & Expertise
                </h3>
                <p className="text-muted-foreground text-lg">
                  Here's a comprehensive breakdown of my technical skills and
                  proficiency levels.
                </p>
              </div>

              <div className="space-y-10">
                {skills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="card card-hover group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-box-large group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <category.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {category.category}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {category.skills.length} technologies mastered
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Elite Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card text-center group hover:shadow-glow transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Elite Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 group hover:border-accent/40 transition-all duration-300"
            >
              <div className="text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  Ready to Work Together?
                </h4>
                <p className="text-muted-foreground">
                  Let's discuss your project and bring your ideas to life with
                  cutting-edge technology.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="btn-primary group-hover:scale-105 transition-transform duration-300">
                    View Projects
                  </button>
                  <button className="btn-outline group-hover:scale-105 transition-transform duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
