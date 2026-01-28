import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Users,
  Shield,
  BarChart3,
  Building2,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import StatsCounter from "@/components/shared/StatsCounter";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
import doodlePattern from "@/assets/doodle-pattern.png";
import officeIndian from "@/assets/office-indian.jpg";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";
import bgRedPattern from "@/assets/bg-red-pattern.jpg";
import bgPurpleSoft from "@/assets/bg-purple-soft.jpg";
import ajayKumarYadav from "@/assets/ajay-kumar-yadav.png";
import dummyAvatarFemale from "@/assets/dummy-avatar-female.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const stats = [
    { value: 20, suffix: "+", label: "Years of Industry Experience" },
    { value: 100, suffix: "+", label: "Expert Team" },
  ];

  const approaches = [
    { icon: Target, text: "Intelligence + Execution" },
    { icon: BarChart3, text: "Data-backed modelling" },
    { icon: Users, text: "Customer-centric frameworks" },
    { icon: Eye, text: "Transparent KPIs" },
    { icon: Shield, text: "Operational excellence" },
    { icon: CheckCircle2, text: "Measurable outcomes" },
  ];

  const whyDeban = [
    "Strategy + Execution under one roof",
    "Deep domain strength across credit operations & customer management",
    "Proven modelling frameworks for performance improvement",
    "Owned contact center—with infrastructure & manpower",
    "Ethical & transparent governance",
    "Strong CSR backbone",
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
        <title>
          About Deban | Management Consulting & Financial Services Company in
          India
        </title>

        <meta
          name="description"
          content="Learn about Deban, a management consulting and financial services company in India specializing in OKR & CFR consulting, portfolio risk modelling, contact center operations, and financial product sales outsourcing."
        />

        <meta
          name="keywords"
          content="management consulting company India, business consulting firm India, portfolio risk modelling company, financial services company India"
        />

        <link rel="canonical" href="https://deban.vercel.app/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Deban | Consulting & Financial Services Company"
        />
        <meta
          property="og:description"
          content="Deban helps organizations scale through consulting, risk modelling, contact center operations, and financial product distribution."
        />
        <meta property="og:url" content="https://deban.vercel.app/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <HeroBanner
          backgroundImage={heroAbout}
          title="About Us"
          subtitle="Delivering strategic consulting, performance modelling and contact center operations across financial services and growth-focused enterprises."
        >
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </HeroBanner>

        {/* Company Overview - Who We Are */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
          {/* <div className="absolute inset-0 opacity-5">
          <img src={doodlePattern} alt="" className="w-full h-full object-cover" />
        </div> */}
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  subtitle="Company Overview"
                  title="Who We Are"
                  centered={false}
                />
                <p className="text-muted-foreground text-lg mb-6">
                  Deban Infomatrix Pvt. Ltd. is a multi-vertical organization
                  operating at the intersection of strategy, customer
                  operations, and financial product distribution.
                </p>
                <p className="text-muted-foreground mb-4">
                  We work with NBFCs, insurers, fintechs, service providers, and
                  consumers by delivering:
                </p>
                <ul className="text-muted-foreground mb-6 space-y-2 list-disc list-inside">
                  <li>Consulting-led performance frameworks</li>
                  <li>Portfolio risk & engagement models</li>
                  <li>Scalable contact center operations</li>
                  <li>Ethical, compliant sales of financial products</li>
                  <li>Education-focused CSR initiatives</li>
                </ul>
                <p className="text-muted-foreground mb-8 font-medium">
                  Our approach is execution-first, data-driven, and
                  outcome-oriented.
                </p>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {approaches.map((item, index) => (
                    <motion.div
                      key={item.text}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-brand border border-border"
                    >
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {item.text}
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
                  src={"/img/who_we_are.png"}
                  alt="Modern Office"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">10+ Years</p>
                    <p className="text-sm text-muted-foreground">Excellence</p>
                  </div>
                </div>
              </motion.div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsCounter stats={stats} />

        {/* Team Section - Redesigned */}
        <section
          id="our-team"
          className="py-12 md:py-16 relative overflow-hidden scroll-mt-24"
        >
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our People"
              title="Our Team"
              description="Experienced professionals driving business transformation"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ajay Kumar Yadav */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-2xl overflow-hidden shadow-brand border border-border"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-6">
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={ajayKumarYadav}
                      alt="Ajay Kumar Yadav"
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg bg-muted"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Ajay Kumar Yadav
                      </h3>
                      <p className="text-white/90 font-medium text-sm">
                        Founder & Managing Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground text-sm leading-relaxed mb-3">
                    An accomplished business leader with over two decades of
                    applied experience across financial services, credit
                    operations, customer lifecycle management, large-scale
                    contact center operations, and multi-geography supply chain
                    coordination.
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    He has successfully led and transformed operational units
                    across India and the GCC, managing high-volume portfolios,
                    designing strategic recovery and customer engagement
                    frameworks, and strengthening business performance through
                    structured process architecture.
                  </p>
                </div>
              </motion.div>

              {/* Pushpa Yadav */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-2xl overflow-hidden shadow-brand border border-border"
              >
                <div className="bg-gradient-to-r from-secondary to-primary p-6">
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={dummyAvatarFemale}
                      alt="Pushpa Yadav"
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg bg-muted"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Pushpa Yadav
                      </h3>
                      <p className="text-white/90 font-medium text-sm">
                        Co Founder & Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground text-sm leading-relaxed mb-3">
                    Provides strategic governance, administrative oversight,
                    financial discipline, and CSR leadership.
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    Pushpa drives institutional development for Deban Academy
                    and ensures strong governance across business and social
                    initiatives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section
          id="vision-mission"
          className="py-16 md:py-20 relative overflow-hidden scroll-mt-24"
        >
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container-wide relative z-10">
            <SectionTitle subtitle="Our Purpose" title="Vision & Mission" />
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-brand border border-border relative overflow-hidden group h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-foreground italic text-lg leading-relaxed flex-1">
                    "To empower businesses with intelligence and execution,
                    enabling sustainable growth and meaningful impact."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-brand border border-border relative overflow-hidden group h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-foreground italic text-lg leading-relaxed flex-1">
                    "To combine consulting expertise, operational excellence and
                    community responsibility to help organizations grow with
                    clarity and confidence."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Deban */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgRedPattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Advantage"
              title="Why Deban Infomatrix"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyDeban.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-brand border border-border"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-12 shadow-brand-lg border border-border"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Ready to Partner with Us?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how our expertise can help transform your business
                operations.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
