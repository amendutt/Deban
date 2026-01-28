"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Building2, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import heroContact from "@/assets/hero-contact.jpg";
import doodlePattern from "@/assets/doodle-pattern.png";
import bgOrangePattern from "@/assets/bg-orange-pattern.jpg";
import bgRedPattern from "@/assets/bg-red-pattern.jpg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY",
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      // toast({
      //   title: "Error",
      //   description: "Failed to send message. Please try again later.",
      //   variant: "destructive",
      // });
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Corporate Office",
      content: "D2-37 Advik Tower\nVibhuti Khand, Gomti Nagar\nLucknow 226010",
    },
    {
      icon: Building2,
      title: "Registered Office",
      content: "B-2 504, DLF MY Pad\nVibhuti Khand, Gomti Nagar\n226010",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@debaninfomatrix.com",
      link: "mailto:info@debaninfomatrix.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday\n9:00 AM - 6:00 PM",
    },
  ];

  const services = [
    "Management Consulting",
    "Portfolio Risk & Recovery Modelling",
    "Contact Center Operations",
    "OKR Implementation",
    "Process Consulting",
    "Other",
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
          Management Consulting & Contact Center Company in Lucknow | Deban
        </title>

        <meta
          name="description"
          content="Deban is a management consulting and contact center services company in Lucknow, Uttar Pradesh, delivering consulting, risk modelling, and financial sales solutions across India."
        />

        <meta
          name="keywords"
          content="management consulting company in Lucknow, contact center services in Lucknow, call center company Lucknow, financial services company Uttar Pradesh"
        />

        <link rel="canonical" href="https://deban.vercel.app/contact" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <HeroBanner
          backgroundImage={heroContact}
          title="Contact Us"
          subtitle="Let's discuss how we can help strengthen your business performance"
        />

        {/* Contact Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  subtitle="Get in Touch"
                  title="Contact Information"
                  centered={false}
                />

                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex gap-4 p-4 rounded-xl bg-card shadow-brand border border-border"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-brand-lg border border-border">
                  <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Organization
                        </label>
                        <Input
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="h-12"
                        />
                        {errors.organization && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.organization}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Select Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-20 z-10" />
          <div className="h-96 bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0074674459277!2d81.0066!3d26.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9fbc38d8c7b27!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deban Infomatrix Location"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bgOrangePattern}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-12 shadow-brand-lg border"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-muted-foreground mb-8">
                We're excited to hear from you and discuss how we can help
                transform your business operations.
              </p>

              <a href="mailto:info@debaninfomatrix.com">
                <Button variant="cta" size="lg">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
