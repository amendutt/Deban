import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Shield,
  Phone,
  Bot,
  Mic,
  Activity,
  Banknote,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import heroServices from "@/assets/hero-services.jpg";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";
import bgRedPattern from "@/assets/bg-red-pattern.jpg";
import bgPurpleSoft from "@/assets/bg-purple-soft.jpg";
import consultingIndian from "@/assets/consulting-indian.jpg";
import analyticsIndian from "@/assets/analytics-indian.jpg";
import callcenterIndian from "@/assets/callcenter-indian.jpg";
import ccOutboundCalls from "@/assets/cc-outbound-calls.jpg";
import ccCustomerRecovery from "@/assets/cc-customer-recovery.jpg";
import ccFeedbackCalls from "@/assets/cc-feedback-calls.jpg";
import ccWhatsappSms from "@/assets/cc-whatsapp-sms.jpg";
import ccVoicebot from "@/assets/cc-voicebot.jpg";
import ccVerification from "@/assets/cc-verification.jpg";
import financialConsultation from "@/assets/financial-consultation.jpg";
import financialTelesales from "@/assets/financial-telesales.jpg";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const managementConsulting = {
    title: "Management Consulting",
    icon: Target,
    description: "OKR & CFR design, performance frameworks, process consulting",
    image: consultingIndian,
    offerings: [
      "Design & rollout of OKR frameworks",
      "Implementation of CFR (Conversations, Feedback, Recognition)",
      "Process mapping & SOP creation",
      "Customer lifecycle process engineering",
      "Governance dashboards & performance frameworks",
    ],
    impacts: [
      { icon: TrendingUp, text: "Clear strategic direction" },
      { icon: Activity, text: "Improved execution discipline" },
      { icon: Shield, text: "Stronger accountability" },
      { icon: BarChart3, text: "Predictable performance" },
    ],
  };

  const portfolioModelling = {
    title: "Portfolio Risk & Recovery Modelling",
    icon: BarChart3,
    description:
      "Early-stage portfolio strategies, analytics-driven engagement models",
    image: analyticsIndian,
    capabilities: [
      "Pre-due & early-stage recovery frameworks",
      "Customer contactability & engagement modelling",
      "Capacity & performance analytics",
      "Early warning & behavioural insights",
      "Digital nudges & self-service journeys",
      "Promise propensity modelling",
      "KPI dashboards for daily, weekly, monthly governance",
    ],
    benefits: [
      { icon: TrendingUp, text: "Higher recovery outcomes" },
      { icon: Users, text: "Better customer experience" },
      { icon: Activity, text: "Predictable performance" },
      { icon: Shield, text: "Strong risk visibility" },
    ],
  };

  const contactCenter = {
    title: "Contact Center Operations (Owned)",
    icon: Headphones,
    description:
      "Outbound & inbound engagement, CX, voice-bot enabled workflows",
    image: callcenterIndian,
    operations: [
      { text: "Outbound engagement calls", image: ccOutboundCalls },
      { text: "Early-stage customer recovery", image: ccCustomerRecovery },
      { text: "Customer experience & feedback calls", image: ccFeedbackCalls },
      { text: "WhatsApp/SMS reminders", image: ccWhatsappSms },
      { text: "Voice-bot enabled workflows", image: ccVoicebot },
      { text: "Verification calls", image: ccVerification },
    ],
    infrastructure: [
      { icon: Phone, text: "Auto & predictive dialers" },
      { icon: Mic, text: "100% call recording & audit trails" },
      { icon: Activity, text: "Quality monitoring engine" },
      { icon: BarChart3, text: "Daily MIS & dashboards" },
      { icon: Bot, text: "Voice-bot integration" },
      { icon: Users, text: "Multilingual workforce" },
    ],
  };

  const financialProducts = {
    title: "Financial Product Sales & Distribution",
    icon: Banknote,
    description:
      "Loans & insurance sourcing through assisted and digital channels",
    products: [
      "Secured & unsecured loans",
      "MSME & retail lending products",
      "Insurance products (life & general, subject to partnerships)",
    ],
    channels: [
      "Assisted tele-sales",
      "Field coordination & lead conversion",
      "Digital and contact-center driven sourcing",
      "Partner-led distribution models",
    ],
    capabilities: [
      "Lead generation & qualification",
      "Customer education & need assessment",
      "Application assistance & documentation support",
      "Follow-ups, tracking & conversion support",
      "Compliance-aligned sales processes",
    ],
  };

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
          Management Consulting, Risk Modelling & Financial Sales Services |
          Deban India
        </title>

        <meta
          name="description"
          content="Deban offers management consulting services in India including OKR & CFR performance management, portfolio risk & recovery modelling, and loan & insurance sales outsourcing for enterprises, NBFCs, and fintechs."
        />

        <meta
          name="keywords"
          content="management consulting services India, OKR consulting services, CFR performance management consulting, portfolio risk modelling, recovery strategy consulting, financial product sales outsourcing, loan distribution services, insurance sales and distribution"
        />

        <link rel="canonical" href="https://deban.vercel.app/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Consulting, Risk Modelling & Financial Sales Services | Deban"
        />
        <meta
          property="og:description"
          content="OKR & CFR consulting, portfolio risk and recovery modelling, and financial product sales outsourcing services across India."
        />
        <meta property="og:url" content="https://deban.vercel.app/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <HeroBanner
          backgroundImage={heroServices}
          title="Our Services"
          subtitle="• Management Consulting • Portfolio Risk & Recovery Modelling • Contact Center Operations • Financial Product Sales & Distribution"
        >
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </HeroBanner>

        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <SectionTitle
              subtitle="Our Business Verticals"
              title="Our Services"
              description="Comprehensive solutions across consulting, operations, and distribution"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {[
                {
                  icon: Target,
                  title: "Management Consulting",
                  desc: "OKR & CFR design, performance frameworks, process consulting",
                },
                {
                  icon: BarChart3,
                  title: "Portfolio Risk & Recovery",
                  desc: "Early-stage portfolio strategies, analytics-driven engagement models",
                },
                {
                  icon: Headphones,
                  title: "Contact Center Operations",
                  desc: "Outbound & inbound engagement, CX, voice-bot enabled workflows",
                },
                {
                  icon: Banknote,
                  title: "Financial Product Sales",
                  desc: "Loans & insurance sourcing through assisted and digital channels",
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-xl p-6 shadow-brand border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Consulting */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  {managementConsulting.title}
                </h2>
                <p className="text-foreground text-lg mb-8">
                  {managementConsulting.description}
                </p>
                <h4 className="font-semibold text-foreground mb-4">
                  What We Offer:
                </h4>
                <motion.ul
                  className="space-y-3 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {managementConsulting.offerings.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-card/80 shadow-sm border border-border"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={managementConsulting.image}
                  alt="Management Consulting"
                  className="rounded-2xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Modelling */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgRedPattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-secondary/10" />
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <motion.img
                  src={portfolioModelling.image}
                  alt="Portfolio Risk & Recovery"
                  className="rounded-2xl shadow-2xl w-full mb-8"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mb-6">
                  <BarChart3 className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  {portfolioModelling.title}
                </h2>
                <p className="text-foreground text-lg mb-8">
                  {portfolioModelling.description}
                </p>
                <h4 className="font-semibold text-foreground mb-4">
                  Key Capabilities:
                </h4>
                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {portfolioModelling.capabilities.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-card/80 shadow-sm border border-border"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Center */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgPurpleSoft}
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 mx-auto">
                <Headphones className="w-10 h-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                {contactCenter.title}
              </h2>
              <p className="text-foreground text-lg max-w-2xl mx-auto">
                {contactCenter.description}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={contactCenter.image}
                  alt="Contact Center"
                  className="rounded-2xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-brand border border-border"
              >
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  Operational Capabilities
                </h4>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {contactCenter.operations.map((item) => (
                    <motion.div
                      key={item.text}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-lg overflow-hidden group"
                    >
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-2">
                        <span className="text-background text-xs font-medium">
                          {item.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-brand border border-border"
              >
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Infrastructure & Governance
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {contactCenter.infrastructure.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Financial Product Sales & Distribution */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Banknote className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  {financialProducts.title}
                </h2>
                <p className="text-foreground text-lg mb-6">
                  Deban Infomatrix is actively engaged in sales and distribution
                  of financial products, working as a sourcing and engagement
                  partner.
                </p>
                <p className="text-foreground font-semibold mb-6">
                  Outcome: Scalable, ethical, and conversion-focused financial
                  product distribution.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.img
                    src={financialConsultation}
                    alt="Financial Consultation"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                    whileHover={{ scale: 1.02 }}
                  />
                  <motion.img
                    src={financialTelesales}
                    alt="Financial Telesales"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Products Covered */}
                <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Products Covered
                  </h4>
                  <ul className="space-y-2">
                    {financialProducts.products.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sales Channels */}
                <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Sales Channels
                  </h4>
                  <ul className="space-y-2">
                    {financialProducts.channels.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capabilities */}
                <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {financialProducts.capabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/85 to-secondary/90" />
          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Let's discuss how our services can help achieve your business
                goals.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us Today
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

export default Services;
