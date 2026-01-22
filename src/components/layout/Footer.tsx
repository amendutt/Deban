import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "CSR", path: "/csr" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Management Consulting",
    "Portfolio Recovery",
    "Contact Center",
    "OKR Implementation",
    "Process Consulting",
  ];

  return (
    <footer className="relative overflow-hidden bg-primary/85">
      {/* Main Footer */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo}
              alt="Deban Infomatrix"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-white/90 mb-6 leading-relaxed">
              Empowering businesses with intelligence and execution, enabling
              sustainable growth and meaningful impact.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-accent transition-colors text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Corporate Office</p>
                  <span className="text-white/80">
                    D2-37 Advik Tower
                    <br />
                    Vibhuti Khand, Gomti Nagar
                    <br />
                    Lucknow 226010
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Registered Office</p>
                  <span className="text-white/80">
                    B-2 504, DLF MY Pad
                    <br />
                    Vibhuti Khand, Gomti Nagar
                    <br />
                    226010
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:info@debaninfomatrix.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                  info@debaninfomatrix.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} Deban Infomatrix Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
