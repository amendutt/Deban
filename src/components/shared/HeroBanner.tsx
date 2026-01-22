import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  showTypewriter?: boolean;
  typewriterText?: string[];
}

const HeroBanner = ({
  backgroundImage,
  title,
  subtitle,
  children,
}: HeroBannerProps) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay - Lighter red theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/75 to-secondary/70" />

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-56 h-56 rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-secondary/20 blur-2xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-accent/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-primary-foreground/10 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* New Curved Wave Design */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,150 L0,150 Z"
            fill="hsl(var(--background))"
          />
          <path
            d="M0,120 C200,80 400,140 600,100 C800,60 1000,120 1200,100 C1350,85 1400,95 1440,90 L1440,150 L0,150 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
