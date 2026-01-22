import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-primary-foreground"
    >
      {displayValue}
      {suffix}
    </span>
  );
};

const CsrStatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden -mt-1">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgOrangePattern}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-accent/90 to-secondary/95" />
      </div>

      {/* Decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full translate-x-1/3 translate-y-1/3"
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-primary-foreground/15 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/90 mt-3 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CsrStatsCounter;
