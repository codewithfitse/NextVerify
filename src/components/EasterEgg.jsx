import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";
import {
  Sparkles,
  Zap,
  Star,
  Heart,
  Music,
  Palette,
  PartyPopper,
} from "lucide-react";

const EasterEgg = () => {
  const [konamiCode, setKonamiCode] = useState([]);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newKonamiCode = [...konamiCode, e.code];

      // Keep only the last 10 keys
      if (newKonamiCode.length > 10) {
        newKonamiCode.shift();
      }

      setKonamiCode(newKonamiCode);

      // Check if Konami code is complete
      if (newKonamiCode.length === 10) {
        const isKonami = newKonamiCode.every(
          (key, index) => key === konamiSequence[index]
        );

        if (isKonami) {
          activateEasterEgg();
          setKonamiCode([]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiCode]);

  const activateEasterEgg = () => {
    setIsEasterEggActive(true);
    setShowNotification(true);

    // Add party mode effects
    document.body.classList.add("party-mode");

    // Show notification
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    // Deactivate after 30 seconds
    setTimeout(() => {
      setIsEasterEggActive(false);
      document.body.classList.remove("party-mode");
    }, 30000);
  };

  const easterEggEffects = [
    { icon: Sparkles, delay: 0, x: 20, y: -20 },
    { icon: Star, delay: 0.5, x: -30, y: 10 },
    { icon: Heart, delay: 1, x: 40, y: -30 },
    { icon: Zap, delay: 1.5, x: -20, y: 40 },
    { icon: Music, delay: 2, x: 30, y: 20 },
    { icon: Palette, delay: 2.5, x: -40, y: -10 },
    { icon: PartyPopper, delay: 3, x: 10, y: 50 },
  ];

  return (
    <>
      {/* Easter Egg Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-3">
              <PartyPopper className="h-6 w-6 animate-bounce" />
              <div>
                <div className="font-bold text-lg">
                  🎉 Easter Egg Activated!
                </div>
                <div className="text-sm opacity-90">
                  Party mode enabled for 30 seconds!
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Effects */}
      <AnimatePresence>
        {isEasterEggActive && (
          <>
            {easterEggEffects.map((effect, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: effect.x,
                  y: effect.y,
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: effect.x * 2,
                  y: effect.y * 2,
                  scale: [0, 1, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  delay: effect.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="fixed pointer-events-none z-[9998]"
                style={{
                  left: `${50 + Math.random() * 20}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
              >
                <effect.icon className="h-8 w-8 text-accent" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Hidden Konami Code Indicator (for debugging) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 left-4 text-xs text-muted-foreground opacity-50">
          Konami: {konamiCode.length}/10
        </div>
      )}
    </>
  );
};

export default EasterEgg;
