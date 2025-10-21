import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import NavLogo from "@/assets/nav_logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceCategories = [
    {
      category: "AI Solutions",
      items: [
        { title: "AI & Automation Systems", href: "/services#ai" },
        { title: "AI Chatbots & Custom AI Agents", href: "/services#chatbots" },
        { title: "Data-Driven Business Intelligence", href: "/services#data" },
      ]
    },
    {
      category: "Development",
      items: [
        { title: "Web & App Development", href: "/services#webapp" },
        { title: "Software & API Integration", href: "/services#api" },
        { title: "Enterprise Workflow Solutions", href: "/services#workflow" },
      ]
    },
    {
      category: "Infrastructure",
      items: [
        { title: "IT Support & Cloud Consulting", href: "/services#it" },
        { title: "Security & Compliance", href: "/services#security" },
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const hoverUnderlineClass =
    "relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0 hover:after:w-full";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-card shadow-md"
            : isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-card/90 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Increased Size */}
            <a href="/" className="flex items-center group">
              <div className="relative w-34 h-34 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={NavLogo}
                  alt="RGI Intelligence Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  } ${hoverUnderlineClass}`}
                >
                  {link.name}
                </a>
              ))}

              {/* Services Dropdown - Structured */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[700px] p-6 bg-card border border-border shadow-xl rounded-lg">
                        <div className="grid grid-cols-3 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.category} className="space-y-3">
                              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider border-b border-border pb-2">
                                {category.category}
                              </h3>
                              <div className="space-y-2">
                                {category.items.map((service) => (
                                  <a
                                    key={service.title}
                                    href={service.href}
                                    className="block rounded-md p-2 text-sm leading-snug text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                                  >
                                    {service.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  } ${hoverUnderlineClass}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="/contact">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navLinks.slice(0, 2).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile Services Dropdown - Structured */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-2 py-2 space-y-4">
                      {serviceCategories.map((category) => (
                        <div key={category.category} className="space-y-1">
                          <div className="px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                            {category.category}
                          </div>
                          {category.items.map((service) => (
                            <a
                              key={service.title}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                            >
                              {service.title}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.slice(2).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  <a href="/contact" onClick={closeMobileMenu}>
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navigation;