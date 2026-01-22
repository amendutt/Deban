import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, centered = true, light = false }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {subtitle && (
        <span className={`text-sm font-semibold uppercase tracking-wider ${light ? 'text-primary-foreground/70' : 'text-primary'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4 ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
