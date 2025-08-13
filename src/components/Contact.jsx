import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  Zap,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fitsum@example.com",
      href: "mailto:fitsum@example.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Call me directly",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
      description: "Based in Ethiopia",
    },
  ];

  const stats = [
    {
      icon: Clock,
      value: "< 24h",
      label: "Response Time",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageSquare,
      value: "100%",
      label: "Response Rate",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Star,
      value: "5.0",
      label: "Client Rating",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Zap,
      value: "50+",
      label: "Projects Completed",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Send instant reply
    const instantReply = {
      to: formData.email,
      subject: "Thanks for reaching out! - Fitsum Zerihun",
      message: `Hey ${formData.name},

Thanks for reaching out! I've received your message and I'll get back to you within 24 hours.

In the meantime, feel free to check out my latest work at [portfolio link] or connect with me on LinkedIn.

Best regards,
Fitsum Zerihun
Full Stack Developer`,
    };

    console.log("Instant reply sent:", instantReply);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-padding background-accent">
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="text-gradient block">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create
            exceptional digital experiences that drive results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Send Me a Message
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together
                to bring your vision to life.
              </p>
            </div>

            {/* Elite Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                      errors.name
                        ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                        : "border-border bg-background hover:border-accent/30"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                      errors.email
                        ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                        : "border-border bg-background hover:border-accent/30"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                    errors.subject
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : "border-border bg-background hover:border-accent/30"
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : "border-border bg-background hover:border-accent/30"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting || isSubmitted
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-accent to-accent-dark text-accent-foreground hover:shadow-2xl hover:shadow-accent/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending Message...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      I've sent you an instant reply. Check your email!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Let's Connect
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group"
                  >
                    <div className="icon-box group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Why Work With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Follow My Journey
              </h3>
              <div className="flex gap-4">
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
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="icon-box group hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-accent group-hover:text-accent-dark transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 group hover:border-accent/40 transition-all duration-300"
            >
              <div className="text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground">
                  Let's discuss your ideas and create something amazing
                  together.
                </p>
                <button className="btn-primary inline-flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
