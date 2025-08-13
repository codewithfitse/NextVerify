import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download, Sparkles, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider.jsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for theme toggle (Ctrl+T)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "t") {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleTheme]);

  const navItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/About", section: "about" },
    { name: "Projects", href: "/Project", section: "projects" },
    { name: "Services", href: "/Service", section: "services" },
    { name: "Contact", href: "/Contact", section: "contact" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Fitsum_Zerihun_Resume.pdf";
    link.click();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Elite Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <img
                src="/portfolioLogo.png"
                alt="Fitsum Zerihun"
                className="h-2 w-2 rounded-full object-cover ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-accent-dark/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-accent/20 border-t-accent"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                Fitsum
              </span>
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-accent" />
                Full Stack Developer
              </span>
            </div>
          </motion.div>

          {/* Elite Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    location.pathname === item.href ||
                    activeSection === item.section
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                  <motion.span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-accent to-accent-dark rounded-full transition-all duration-300 ${
                      location.pathname === item.href ||
                      activeSection === item.section
                        ? "w-4/5 -translate-x-1/2"
                        : "w-0 group-hover:w-4/5 group-hover:-translate-x-1/2"
                    }`}
                    layoutId="nav-underline"
                  />
                  {activeSection === item.section && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Elite Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Resume Download */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeDownload}
              className="group border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Resume
            </Button>

            {/* Elite Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden group hover:bg-accent/10 hover:scale-105 transition-all duration-300"
              title={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode (Ctrl+T)`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-accent group-hover:scale-110 transition-all duration-300" />
                ) : (
                  <Moon className="h-5 w-5 text-accent group-hover:scale-110 transition-all duration-300" />
                )}
              </motion.div>
              {/* Theme indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"
              />
            </Button>

            {/* Elite Status Indicator */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Available
              </span>
            </motion.div>
          </div>

          {/* Elite Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative hover:bg-accent/10 hover:scale-105 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Elite Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-6 space-y-4">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                          location.pathname === item.href
                            ? "text-accent bg-accent/10 font-medium"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Elite Mobile Actions */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={handleResumeDownload}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-center text-accent hover:bg-accent/10"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </Button>

                  {/* Mobile Status */}
                  <div className="flex items-center justify-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Available for new opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
