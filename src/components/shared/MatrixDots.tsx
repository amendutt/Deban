import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MatrixDotsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
  asLink?: boolean;
  linkTo?: string;
}

const MatrixDots = ({
  size = "md",
  className = "",
  animated = true,
  asLink = false,
  linkTo = "/",
}: MatrixDotsProps) => {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const gapClasses = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
  };

  const dotVariants = {
    initial: { scale: 1, opacity: 0.7 },
    hover: { scale: 1.2, opacity: 1 },
  };

  const containerVariants = {
    initial: {},
    hover: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const dots = [...Array(9)].map((_, i) => (
    <motion.span
      key={i}
      className={`${sizeClasses[size]} rounded-full bg-current`}
      variants={animated ? dotVariants : undefined}
      transition={{ duration: 0.2 }}
    />
  ));

  const content = (
    <motion.div
      className={`grid grid-cols-3 ${gapClasses[size]} ${className}`}
      variants={animated ? containerVariants : undefined}
      initial="initial"
      whileHover="hover"
    >
      {dots}
    </motion.div>
  );

  if (asLink) {
    return (
      <Link to={linkTo} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
};

export default MatrixDots;
