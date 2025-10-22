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
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const aboutDropdown = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Careers", href: "/careers" },
  ];

  const industryCategories = [
    { name: "E-learning", href: "/industries/e-learning", icon: "GraduationCap" },
    { name: "Healthcare", href: "/industries/healthcare", icon: "Heart" },
    { name: "Entertainment", href: "/industries/entertainment", icon: "Tv" },
    { name: "Food Industry", href: "/industries/food", icon: "UtensilsCrossed" },
    { name: "Social Networking", href: "/industries/social", icon: "Share2" },
    { name: "Ecommerce", href: "/industries/ecommerce", icon: "ShoppingCart" },
    { name: "Travel & Tourism", href: "/industries/travel", icon: "Plane" },
    { name: "Fintech", href: "/industries/fintech", icon: "CreditCard" },
    { name: "Sports App", href: "/industries/sports", icon: "Trophy" },
    { name: "E-scooter", href: "/industries/escooter", icon: "Bike" },
    { name: "On-Demand", href: "/industries/on-demand", icon: "Package" },
    { name: "Drone App", href: "/industries/drone", icon: "Plane" },
  ];

  const serviceCategories = [
    {
      category: "Mobile Development",
      items: [
        { title: "Android Development", href: "/services/android" },
        { title: "iOS Development", href: "/services/ios" },
        { title: "Ionic Development", href: "/services/ionic" },
        { title: "Flutter", href: "/services/flutter" },
        { title: "React Native", href: "/services/react-native" },
        { title: "Cross Platform App", href: "/services/cross-platform" },
      ]
    },
    {
      category: "Web Development",
      items: [
        { title: "PHP/Node JS Development", href: "/services/php-node" },
        { title: "React Development", href: "/services/react" },
        { title: "Progressive Web App", href: "/services/pwa" },
        { title: "Cloud Computing", href: "/services/cloud" },
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        { title: "Blockchain Development", href: "/services/blockchain" },
        { title: "Artificial Intelligence", href: "/services/ai" },
        { title: "Augmented Reality", href: "/services/ar" },
        { title: "VR Development", href: "/services/vr" },
        { title: "Internet of Things", href: "/services/iot" },
        { title: "Chatbots", href: "/services/chatbots" },
      ]
    },
    {
      category: "Design & Quality",
      items: [
        { title: "UI/UX Design", href: "/services/ui-ux" },
        { title: "Testing & QA", href: "/services/testing" },
        { title: "Wearables", href: "/services/wearables" },
        { title: "POS Software", href: "/services/pos" },
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
              <div className="relative w-28 h-16 sm:w-32 sm:h-20 lg:w-36 lg:h-24 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={NavLogo}
                  alt="RGI Intelligence Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <a
                href="/"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPath === "/"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                } ${hoverUnderlineClass}`}
              >
                Home
              </a>

              {/* About Us Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[220px] p-4 bg-card border border-border shadow-xl rounded-lg">
                        <div className="space-y-1">
                          {aboutDropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md p-3 text-sm leading-snug text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Services Dropdown - Structured */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-6 bg-card border border-border shadow-xl rounded-lg max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-4 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.category} className="space-y-3">
                              <h3 className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-border pb-2">
                                {category.category}
                              </h3>
                              <div className="space-y-1">
                                {category.items.map((service) => (
                                  <a
                                    key={service.title}
                                    href={service.href}
                                    className="block rounded-md px-2 py-1.5 text-xs leading-snug text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
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

              {/* Industries Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[700px] p-6 bg-card border border-border shadow-xl rounded-lg">
                        <div className="grid grid-cols-3 gap-4">
                          {industryCategories.map((industry) => (
                            <a
                              key={industry.name}
                              href={industry.href}
                              className="flex items-center gap-3 rounded-md p-3 text-sm leading-snug text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary text-xs">●</span>
                              </div>
                              <span>{industry.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {navLinks.slice(1).map((link) => (
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
            <div className="lg:hidden pb-4 animate-fade-in max-h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <a
                  href="/"
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>

                {/* Mobile About Us Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between"
                  >
                    About Us
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-2 py-2 space-y-1">
                      {aboutDropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Services Dropdown - Structured */}
                <div>
                  <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                    Services
                  </div>
                  <div className="pl-2 py-2 space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.category} className="space-y-1">
                        <div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                </div>

                {/* Mobile Industries Dropdown */}
                <div>
                  <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                    Industries
                  </div>
                  <div className="pl-2 py-2 space-y-1">
                    {industryCategories.map((industry) => (
                      <a
                        key={industry.name}
                        href={industry.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                      >
                        {industry.name}
                      </a>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
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