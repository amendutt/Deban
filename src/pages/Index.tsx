import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Users,
  Lightbulb,
  Heart,
  TrendingUp,
  Shield,
  Activity,
  Phone,
  Bot,
  Mic,
  FileText,
  MessageSquare,
  Wallet,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Typewriter from "@/components/shared/Typewriter";
import SectionTitle from "@/components/shared/SectionTitle";
import StatsCounter from "@/components/shared/StatsCounter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-indian.jpg";
import consultingImg from "@/assets/consulting-indian.jpg";
import analyticsImg from "@/assets/analytics-indian.jpg";
import callcenterImg from "@/assets/callcenter-indian.jpg";
import doodlePattern from "@/assets/doodle-pattern.png";
import bgBluePattern from "@/assets/bg-blue-pattern.jpg";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";
import bgRedPattern from "@/assets/bg-red-pattern.jpg";
import bgPurpleSoft from "@/assets/bg-purple-soft.jpg";
import officeIndian from "@/assets/office-indian.jpg";
import okrPlanningImg from "@/assets/okr-planning.jpg";
import processMappingImg from "@/assets/process-mapping-new.jpg";
import kpiDashboardImg from "@/assets/kpi-dashboard.jpg";
import recoveryFrameworkImg from "@/assets/recovery-framework.jpg";
import voicebotTechImg from "@/assets/voicebot-tech.jpg";
import qualityMonitoringImg from "@/assets/quality-monitoring.jpg";
import clientSatisfactionImg from "@/assets/client-satisfaction.jpg";
import financialTelesalesImg from "@/assets/financial-telesales.jpg";
import financialConsultationImg from "@/assets/financial-consultation.jpg";
import cfrImplementationImg from "@/assets/cfr-implementation.jpg";
import paymentPropensityImg from "@/assets/payment-propensity.jpg";
import capacityModellingImg from "@/assets/capacity-modelling.jpg";
import whatsappSmsImg from "@/assets/whatsapp-sms-comms.jpg";
import digitalSourcingImg from "@/assets/digital-sourcing.jpg";
import leadQualificationImg from "@/assets/lead-qualification.jpg";
import ccOutboundImg from "@/assets/cc-outbound-calls.jpg";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Years of Industry Experience" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 100, suffix: "+", label: "Expert Team" },
  ];

  const managementConsulting = {
    title: "Management Consulting",
    icon: Target,
    description:
      "Strategic consulting to transform your organizational performance and drive sustainable growth.",
    image: consultingImg,
    offerings: [
      {
        text: "Design & rollout of OKR frameworks",
        image: okrPlanningImg,
        description:
          "Implement Objectives & Key Results to align teams and drive measurable outcomes",
      },
      {
        text: "Implementation of CFR systems",
        image: cfrImplementationImg,
        description:
          "Conversations, Feedback, Recognition - building a culture of continuous improvement",
      },
      {
        text: "Process mapping & SOP creation",
        image: processMappingImg,
        description:
          "Document and optimize workflows for operational excellence",
      },
      {
        text: "Governance dashboards",
        image: kpiDashboardImg,
        description:
          "Real-time visibility into performance metrics and accountability",
      },
    ],
    impacts: [
      { icon: TrendingUp, text: "Clear strategic direction" },
      { icon: Activity, text: "Improved execution" },
      { icon: Shield, text: "Stronger accountability" },
      { icon: BarChart3, text: "Predictable performance" },
    ],
  };

  const portfolioModelling = {
    title: "Portfolio Risk & Recovery",
    icon: BarChart3,
    description:
      "Data-driven frameworks for optimized portfolio performance and recovery outcomes.",
    image: analyticsImg,
    capabilities: [
      {
        text: "Pre-due & early-stage recovery",
        image: recoveryFrameworkImg,
        description:
          "Proactive intervention strategies for early bucket management",
      },
      {
        text: "Capacity modelling",
        image: capacityModellingImg,
        description:
          "AI-powered engagement optimization for better reach rates",
      },
      {
        text: "Better payment propensity",
        image: paymentPropensityImg,
        description: "Predictive models for recovery likelihood assessment",
      },
      {
        text: "KPI dashboards & governance",
        image: analyticsImg,
        description:
          "Daily, weekly, monthly tracking for performance visibility",
      },
    ],
    benefits: [
      { icon: TrendingUp, text: "Higher recovery rates" },
      { icon: Users, text: "Better CX" },
      { icon: Activity, text: "Predictable outcomes" },
      { icon: Shield, text: "Risk visibility" },
    ],
  };

  const contactCenter = {
    title: "Contact Center Operations",
    icon: Headphones,
    description:
      "Owned facility with end-to-end operational capabilities and cutting-edge technology.",
    image: callcenterImg,
    operations: [
      {
        text: "Outbound engagement calls",
        image: ccOutboundImg,
        description: "Professional customer outreach with trained agents",
      },
      {
        text: "Voice-bot enabled workflows",
        image: voicebotTechImg,
        description: "AI-powered automation for scalable operations",
      },
      {
        text: "WhatsApp/SMS reminders",
        image: whatsappSmsImg,
        description: "Multi-channel customer communication",
      },
      {
        text: "Quality monitoring & audits",
        image: qualityMonitoringImg,
        description: "100% call recording with continuous improvement focus",
      },
    ],
    infrastructure: [
      { icon: Phone, text: "Auto & predictive dialers" },
      { icon: Mic, text: "100% call recording" },
      { icon: Bot, text: "Voice-bot integration" },
      { icon: Users, text: "Multilingual workforce" },
    ],
  };

  const financialProducts = {
    title: "Financial Product Sales & Distribution",
    icon: Wallet,
    description:
      "Scalable, ethical, and conversion-focused financial product distribution through assisted and digital channels.",
    image: financialConsultationImg,
    offerings: [
      {
        text: "Lead generation & qualification",
        image: leadQualificationImg,
        description:
          "Customer education, need assessment, and application assistance",
      },
      {
        text: "Assisted tele-sales & field coordination",
        image: financialTelesalesImg,
        description:
          "Professional sales team for loans, insurance, and MSME products",
      },
      {
        text: "Digital sourcing & partner distribution",
        image: digitalSourcingImg,
        description:
          "Contact-center driven sourcing with compliance-aligned processes",
      },
    ],
    benefits: [
      { icon: Wallet, text: "Loan & Insurance Sales" },
      { icon: UserCheck, text: "Lead Conversion" },
      { icon: ClipboardCheck, text: "Compliance-Aligned" },
      { icon: TrendingUp, text: "Scalable Distribution" },
    ],
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Intelligence",
      description: "Data-backed decision making",
    },
    { icon: Users, title: "Execution", description: "Results-driven approach" },
    {
      icon: Heart,
      title: "Responsibility",
      description: "Social impact at core",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>
          Management Consulting & Contact Center Services in India | Deban
        </title>

        <meta
          name="description"
          content="Deban is a leading management consulting company in India offering OKR consulting, CFR performance management, portfolio risk modelling, contact center operations, and loan & insurance distribution services."
        />

        <meta
          name="keywords"
          content="management consulting company India, management consulting services India, portfolio risk modelling, contact center operations India, loan distribution services, insurance sales and distribution"
        />

        <link rel="canonical" href="https://deban.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Management Consulting & Contact Center Services in India | Deban"
        />
        <meta
          property="og:description"
          content="Strategy execution, OKR consulting, portfolio risk modelling, scalable contact center operations, and financial product sales outsourcing."
        />
        <meta property="og:url" content="https://deban.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Management Consulting & Contact Center Services | Deban"
        />
        <meta
          name="twitter:description"
          content="OKR consulting, CFR frameworks, contact center services, and financial product distribution across India."
        />
      </Helmet>
      <Layout>
        {/* Hero Section - Enhanced with Blinkit Yellow */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Gradient Background - Lighter red theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/75 to-secondary/70" />

          {/* Doodle Pattern Overlay */}
          {/* <div className="absolute inset-0 opacity-5">
          <img src={doodlePattern} alt="" className="w-full h-full object-cover" />
        </div> */}

          {/* Animated Background Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent/20 blur-3xl hidden lg:block"
          />

          {/* Floating geometric shapes */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/5 w-20 h-20 border-2 border-accent/20 rounded-lg hidden lg:block"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-accent/20 rounded-full hidden lg:block"
          />

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className="absolute w-2 h-2 rounded-full bg-card/40"
              style={{
                left: `${20 + i * 15}%`,
                bottom: `${10 + i * 5}%`,
              }}
            />
          ))}

          <div className="container-wide relative z-10 py-20">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-8 leading-tight drop-shadow-lg">
                  {/* 9 Matrix Dots before text */}
                  <span className="inline-grid grid-cols-3 gap-1 mr-4 align-middle">
                    {[...Array(9)].map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"
                      ></span>
                    ))}
                  </span>
                  Empowering Business, <br className="hidden md:block" />
                  <span className="text-white block mt-2 underline decoration-white decoration-4 underline-offset-8">
                    <Typewriter
                      words={[
                        "Driving Growth",
                        "Building Trust",
                        "Creating Impact",
                      ]}
                    />
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
                >
                  <span className="flex flex-col gap-3 md:gap-2">
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/80"></span>
                      Management Consulting
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/80"></span>
                      Portfolio Modelling
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/80"></span>
                      Contact Center Operations
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/80"></span>
                      Financial Product Sales & Distribution
                    </span>
                  </span>
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="group">
                      Get in Touch
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex items-center gap-8 mt-12"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">
                      98% Satisfaction
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-5 hidden lg:block"
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.img
                    src={clientSatisfactionImg}
                    alt="Client Satisfaction - Call Center Professional"
                    className="rounded-3xl shadow-2xl w-full h-[330px] object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-5 shadow-xl border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-foreground">
                          98%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {/*<motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-foreground">500+</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </motion.div>*/}
                </div>
              </motion.div>
            </div>
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

        {/* Stats Section */}
        {/* <StatsCounter stats={stats} /> */}

        {/* Who We Are Section with Background */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={"bgPurpleSoft"}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
          {/* <div className="absolute inset-0 opacity-5">
          <img
            src={doodlePattern}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
          <div className="container-wide relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <SectionTitle
                  subtitle="Who We Are"
                  title="Deban Infomatrix"
                  centered={false}
                />
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Deban Infomatrix is a strategy-led consulting and operations
                  company delivering performance frameworks, customer engagement
                  solutions, and financial product distribution to institutions
                  and consumers.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We operate across Management Consulting, Portfolio Risk &
                  Recovery Modelling, Owned Contact Center Operations, and Sales
                  of Financial Products (Loans & Insurance)—combining
                  intelligence, analytics, and execution to create sustainable
                  growth.
                </p>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
                  variants={containerVariants}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-6 rounded-2xl bg-card shadow-brand border border-border"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                      </motion.div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="group">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <motion.img
                  src={"/img/who_we_are.png"}
                  alt="Modern Office"
                  className="rounded-2xl shadow-2xl w-full mb-6"
                  whileHover={{ scale: 1.02 }}
                />
                {/* <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8">
                <motion.div className="space-y-6" variants={containerVariants}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border"
                  >
                    <h4 className="font-display font-bold text-xl mb-3 text-foreground">
                      Our Vision
                    </h4>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "To empower businesses with intelligence and execution,
                      enabling sustainable growth and meaningful impact."
                    </p>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border"
                  >
                    <h4 className="font-display font-bold text-xl mb-3 text-foreground">
                      Our Mission
                    </h4>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "To combine consulting expertise, operational excellence
                      and community responsibility to help organizations grow
                      with clarity and confidence."
                    </p>
                  </motion.div>
                </motion.div>
              </div> */}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Three Pillars - Management Consulting */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Services"
              title={managementConsulting.title}
              description={managementConsulting.description}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.img
                  src={managementConsulting.image}
                  alt="Management Consulting"
                  className="rounded-3xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="grid grid-cols-2 gap-4">
                  {managementConsulting.impacts.map((impact, idx) => (
                    <motion.div
                      key={impact.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-xl p-5 shadow-brand border border-border flex items-center gap-3"
                    >
                      <impact.icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">
                        {impact.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {managementConsulting.offerings.map((offering, idx) => (
                  <motion.div
                    key={offering.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border flex gap-5 items-start"
                  >
                    <img
                      src={offering.image}
                      alt={offering.text}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {offering.text}
                      </h4>
                      <p className="text-muted-foreground">
                        {offering.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Pillars - Portfolio Risk & Recovery */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          {/* <div className="absolute inset-0 opacity-5">
          <img
            src={doodlePattern}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Services"
              title={portfolioModelling.title}
              description={portfolioModelling.description}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 order-2 lg:order-1"
              >
                {portfolioModelling.capabilities.map((capability, idx) => (
                  <motion.div
                    key={capability.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border flex gap-5 items-start"
                  >
                    <img
                      src={capability.image}
                      alt={capability.text}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        {capability.text}
                      </h4>
                      <p className="text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <motion.img
                  src={"/img/portfolio.png"}
                  alt="Portfolio Risk & Recovery"
                  className="rounded-3xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
                {/* <div className="grid grid-cols-2 gap-4">
                {portfolioModelling.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card rounded-xl p-5 shadow-brand border border-border flex items-center gap-3"
                  >
                    <benefit.icon className="w-8 h-8 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Pillars - Contact Center */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgRedPattern}
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Services"
              title={contactCenter.title}
              description={contactCenter.description}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.img
                  src={contactCenter.image}
                  alt="Contact Center Operations"
                  className="rounded-3xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="grid grid-cols-2 gap-4">
                  {contactCenter.infrastructure.map((item, idx) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-xl p-5 shadow-brand border border-border flex items-center gap-3"
                    >
                      <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                      <span className="font-medium text-foreground text-sm">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactCenter.operations.map((operation, idx) => (
                  <motion.div
                    key={operation.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border flex gap-5 items-start"
                  >
                    <img
                      src={operation.image}
                      alt={operation.text}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        {operation.text}
                      </h4>
                      <p className="text-muted-foreground">
                        {operation.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <Link to="/services">
                <Button variant="cta" size="lg" className="group">
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Financial Product Sales & Distribution */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Services"
              title={financialProducts.title}
              description={financialProducts.description}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {financialProducts.offerings.map((offering, idx) => (
                  <motion.div
                    key={offering.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-card rounded-2xl p-6 shadow-brand border border-border flex gap-5 items-start"
                  >
                    <img
                      src={offering.image}
                      alt={offering.text}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {offering.text}
                      </h4>
                      <p className="text-muted-foreground">
                        {offering.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.img
                  src={financialProducts.image}
                  alt="Financial Product Sales"
                  className="rounded-3xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="grid grid-cols-2 gap-4">
                  {financialProducts.benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-xl p-5 shadow-brand border border-border flex items-center gap-3"
                    >
                      <benefit.icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground text-sm">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CSR Banner with Background */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-card/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-card/20 blur-3xl"
          />
          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-3 bg-card/20 text-primary-foreground rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
              >
                🎓 Deban Academy
              </motion.span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Growing Business While <br className="hidden md:block" />
                Growing Communities
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our commitment to education and community development through
                Deban Academy - empowering the next generation of professionals
              </p>
              <Link to="/csr">
                <Button variant="hero" size="lg" className="group">
                  Explore Our CSR Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-brand-lg border border-border"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
                >
                  Ready to Strengthen Your <br className="hidden md:block" />
                  Business Performance?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                  Let's discuss how we can help transform your operations and
                  drive sustainable growth.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="group">
                      Contact Us Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
      <Helmet>
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Deban",
        "url": "https://deban.vercel.app",
        "description": "Management consulting, portfolio risk modelling, contact center operations, and financial product sales outsourcing company in India.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "areaServed": "IN"
        }
      }
    `}
        </script>
      </Helmet>
    </>
  );
};

export default Index;
