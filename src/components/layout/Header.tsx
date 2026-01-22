import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "CSR", path: "/csr" },
  { name: "Contact", path: "/contact" },
];

const aboutDropdownLinks = [
  { name: "Our Team", hash: "#our-team" },
  { name: "Vision & Mission", hash: "#vision-mission" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location]);

  const handleAboutLinkClick = (hash: string) => {
    setIsAboutDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (location.pathname === "/about") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/about${hash}`);
    }
  };

  return (
    <>
      {/* Top Bar - Dark Blue */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm p-0">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@debaninfomatrix.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@debaninfomatrix.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-brand"
            : "bg-card"
        }`}
      >
        <div className="container-custom p-0">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <motion.img
                src={logo}
                alt="Deban Infomatrix"
                className="h-12 md:h-14 w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
                {location.pathname === "/" && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative flex items-center gap-1 ${
                    location.pathname === "/about"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  {location.pathname === "/about" && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {isAboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-brand border border-border py-2 min-w-[180px] z-50"
                    >
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        About Us
                      </Link>
                      {aboutDropdownLinks.map((item) => (
                        <button
                          key={item.hash}
                          onClick={() => handleAboutLinkClick(item.hash)}
                          className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container-custom py-4 flex flex-col gap-2">
                <Link
                  to="/"
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === "/"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  Home
                </Link>

                {/* About with sub-links */}
                <div className="flex flex-col">
                  <Link
                    to="/about"
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === "/about"
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    About Us
                  </Link>
                  {aboutDropdownLinks.map((item) => (
                    <button
                      key={item.hash}
                      onClick={() => handleAboutLinkClick(item.hash)}
                      className="px-8 py-2 text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
