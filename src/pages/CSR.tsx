import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Users,
  Home,
  Heart,
  Award,
  CheckCircle2,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import StatsCounter from "@/components/shared/StatsCounter";
import { Button } from "@/components/ui/button";
import heroCSR from "@/assets/hero-csr.jpg";
import debanAcademyLogo from "@/assets/deban-academy-logo.png";
import debanAcademyBuilding from "@/assets/deban-academy-building.jpg";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";
import bgPurpleSoft from "@/assets/bg-purple-soft.jpg";
import bgRedPattern from "@/assets/bg-red-pattern.jpg";
import csrComputerAnime from "@/assets/csr-computer-anime.jpg";
import csrFacilitiesAnime from "@/assets/csr-facilities-anime.jpg";
import trainedTeachers from "@/assets/trained-teachers.png";
import csrAffordableAnime from "@/assets/csr-affordable-anime.jpg";
import csrModernAnime from "@/assets/csr-modern-anime.jpg";
import csrSkillsAnime from "@/assets/csr-skills-anime.jpg";
import csrStudentsBus from "@/assets/csr-students-bus.jpg";
import CsrStatsCounter from "@/components/shared/CsrStatsCounter";
import { Helmet } from "react-helmet-async";

const CSR = () => {
  const stats = [
    { value: 6000, suffix: "+", label: "Students Educated" },
    { value: 50, suffix: "+", label: "Faculty and Support Staff" },
    { value: 10, suffix: "+", label: "Years of Impact" },
  ];

  const offerings = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "PG to Class 8 education with modern curriculum",
      image: csrComputerAnime,
    },
    {
      icon: Home,
      title: "Modern Facilities",
      description: "Safe learning spaces with libraries and activity areas",
      image: csrFacilitiesAnime,
    },
    {
      icon: Users,
      title: "Trained Teachers",
      description: "Qualified educators with academic planning expertise",
      image: trainedTeachers,
    },
    {
      icon: Heart,
      title: "Affordable Access",
      description: "Low fee structure for rural families",
      image: csrAffordableAnime,
    },
    {
      icon: Award,
      title: "Skill Building",
      description: "Community upliftment and skill development programs",
      image: csrSkillsAnime,
    },
    {
      icon: GraduationCap,
      title: "Modern Exposure",
      description: "Latest learning methods in rural areas",
      image: csrModernAnime,
    },
  ];

  const impacts = [
    "Hundreds of children educated annually",
    "Employment for local teachers and staff",
    "Modern learning exposure in rural areas",
    "Community empowerment through education",
    "Breaking cycle of limited opportunities",
    "Building future leaders",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>CSR Initiatives & Social Impact Programs | Deban India</title>

        <meta
          name="description"
          content="Explore Deban’s CSR initiatives focused on education, community development, and social responsibility. Our commitment reflects responsible growth and long-term impact across India."
        />

        <meta
          name="keywords"
          content="CSR initiatives India, corporate social responsibility India, education CSR programs, social impact initiatives"
        />

        <link rel="canonical" href="https://deban.vercel.app/csr" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="CSR Initiatives & Social Impact | Deban"
        />
        <meta
          property="og:description"
          content="Deban’s corporate social responsibility programs support education and community development across India."
        />
        <meta property="og:url" content="https://deban.vercel.app/csr" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <HeroBanner
          backgroundImage={debanAcademyBuilding}
          title="CSR – Deban Academy"
          subtitle="Growing Business While Growing Communities"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Support Our Initiative
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </HeroBanner>

        {/* Intro Section - Our Commitment to Education */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Title with Logo beside it */}
                <div className="flex items-center gap-6 mb-8">
                  <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Our Commitment to Education
                  </motion.h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Deban Academy represents our deep commitment to community
                  development. We believe that education is the most powerful
                  tool for creating lasting positive change in society.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Through Deban Academy, we're building a foundation for the
                  next generation while empowering local communities with
                  knowledge, skills, and opportunities for a brighter future.
                </p>
                <Link to="/contact">
                  <Button variant="cta" size="lg" className="group">
                    Support Education
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                {/* Logo Wrapper */}
                <motion.div
                  className="w-1/2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={debanAcademyLogo}
                    alt="Deban Academy"
                    className="w-full max-w-lg md:max-w-sm bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
                  />
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-3 left-10 bg-card rounded-xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">
                        Lives Impacted
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <CsrStatsCounter stats={stats} />

        {/* What We Provide */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-primary/10" />
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Programs"
              title="What We Provide"
              description="Comprehensive educational infrastructure for rural communities"
            />
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {offerings.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-brand border border-border group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform -mt-12 relative bg-card border border-border">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Section - Making a Difference */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  subtitle="Making a Difference"
                  title="Our Impact"
                  centered={false}
                />
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {impacts.map((impact, index) => (
                    <motion.div
                      key={impact}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm border border-border"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        {impact}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={csrStudentsBus}
                  alt="Community Impact"
                  className="rounded-2xl shadow-2xl w-full mb-6"
                />
                <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <p className="text-muted-foreground italic text-lg">
                      "Education is not preparation for life; education is life
                      itself."
                    </p>
                    <p className="text-primary font-medium mt-4">
                      — John Dewey
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Academy Address Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={debanAcademyBuilding}
              alt="Deban Academy Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-sm rounded-xl p-6 text-center max-w-md mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                Deban Academy
              </h3>
              <p className="text-muted-foreground text-sm">
                Village Hardaulpur, Chaudagra
                <br />
                Pin - 212665, Dist Fatehpur
                <br />
                Uttar Pradesh
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgRedPattern}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-secondary/80 to-accent/85" />
          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Join Us in Making a Difference
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Support our initiative to bring quality education to rural
                communities
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Support Our Initiative
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CSR;
