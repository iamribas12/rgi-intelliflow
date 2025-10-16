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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { title: "AI & Automation Systems", href: "/services" },
    { title: "AI Chatbots & Custom AI Agents", href: "/services" },
    { title: "Web & App Development", href: "/services" },
    { title: "Software & API Integration", href: "/services" },
    { title: "Data-Driven Business Intelligence", href: "/services" },
    { title: "IT Support & Cloud Consulting", href: "/services" },
    { title: "Enterprise Workflow Solutions", href: "/services" },
    { title: "Security & Compliance", href: "#services" },
  ];

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
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src={NavLogo} 
                  alt="RGI Intelligence Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
                <span className="text-accent">RGI</span> <span className="text-primary">Intelligence</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card border border-border shadow-lg">
                        {services.map((service) => (
                          <a
                            key={service.title}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
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
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 py-2 space-y-1">
                      {services.map((service) => (
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

      {/* Mobile Menu Overlay - Prevents scrolling and clicking behind */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-40 lg:hidden"
          style={{ top: '64px' }}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navigation;