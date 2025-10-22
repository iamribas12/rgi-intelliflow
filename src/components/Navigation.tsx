import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GraduationCap, Heart, Tv, UtensilsCrossed, Share2, ShoppingCart, Plane, CreditCard, Trophy, Bike, Package, Users, Briefcase, DollarSign, UserPlus } from "lucide-react";
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
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
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
    { 
      name: "About Us", 
      href: "/about",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      description: "Learn about our story"
    },
    { 
      name: "Portfolio", 
      href: "/portfolio",
      icon: Briefcase,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      description: "View our work"
    },
    { 
      name: "Pricing", 
      href: "/pricing",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-50",
      description: "Explore our plans"
    },
    { 
      name: "Careers", 
      href: "/careers",
      icon: UserPlus,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      description: "Join our team"
    },
  ];

  const getIndustryIcon = (iconName: string) => {
    const icons: any = {
      GraduationCap,
      Heart,
      Tv,
      UtensilsCrossed,
      Share2,
      ShoppingCart,
      Plane,
      CreditCard,
      Trophy,
      Bike,
      Package,
    };
    const IconComponent = icons[iconName] || Package;
    return IconComponent;
  };

  const industryCategories = [
    { name: "E-learning", href: "/industries/e-learning", icon: "GraduationCap", color: "text-blue-600", bgColor: "bg-blue-100" },
    { name: "Healthcare", href: "/industries/healthcare", icon: "Heart", color: "text-red-500", bgColor: "bg-red-100" },
    { name: "Entertainment", href: "/industries/entertainment", icon: "Tv", color: "text-purple-600", bgColor: "bg-purple-100" },
    { name: "Food Industry", href: "/industries/food", icon: "UtensilsCrossed", color: "text-orange-600", bgColor: "bg-orange-100" },
    { name: "Social Networking", href: "/industries/social", icon: "Share2", color: "text-indigo-600", bgColor: "bg-indigo-100" },
    { name: "Ecommerce", href: "/industries/ecommerce", icon: "ShoppingCart", color: "text-green-600", bgColor: "bg-green-100" },
    { name: "Travel & Tourism", href: "/industries/travel", icon: "Plane", color: "text-sky-600", bgColor: "bg-sky-100" },
    { name: "Fintech", href: "/industries/fintech", icon: "CreditCard", color: "text-emerald-600", bgColor: "bg-emerald-100" },
    { name: "Sports App", href: "/industries/sports", icon: "Trophy", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { name: "E-scooter", href: "/industries/escooter", icon: "Bike", color: "text-cyan-600", bgColor: "bg-cyan-100" },
    { name: "On-Demand", href: "/industries/on-demand", icon: "Package", color: "text-pink-600", bgColor: "bg-pink-100" },
    { name: "Drone App", href: "/industries/drone", icon: "Plane", color: "text-slate-600", bgColor: "bg-slate-100" },
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
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
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
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo - Responsive Size */}
            <a href="/" className="flex items-center group">
              <div className="relative w-20 h-12 sm:w-28 sm:h-18 lg:w-36 lg:h-24 flex items-center justify-center transition-transform group-hover:scale-105">
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
                className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors tracking-wide ${
                  currentPath === "/"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-primary"
                } ${hoverUnderlineClass}`}
              >
                Home
              </a>

              {/* About Us Dropdown - Enhanced */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary tracking-wide">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[320px] p-4 bg-gradient-to-br from-card to-card/95 border border-border shadow-2xl rounded-xl backdrop-blur-sm">
                        <div className="space-y-2">
                          {aboutDropdown.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-4 rounded-xl p-4 text-sm leading-snug hover:bg-accent/50 transition-all group hover:shadow-md border border-transparent hover:border-border/50"
                              >
                                <div className={`w-11 h-11 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                                  <Icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <div className="flex-1">
                                  <div className="font-bold text-foreground text-sm mb-0.5 tracking-wide">
                                    {item.name}
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary tracking-wide">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-6 bg-gradient-to-br from-card to-card/95 border border-border shadow-2xl rounded-xl max-h-[70vh] overflow-y-auto backdrop-blur-sm">
                        <div className="grid grid-cols-4 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.category} className="space-y-3">
                              <h3 className="text-[11px] font-bold text-primary uppercase tracking-widest border-b border-border pb-2.5 mb-2">
                                {category.category}
                              </h3>
                              <div className="space-y-1">
                                {category.items.map((service) => (
                                  <a
                                    key={service.title}
                                    href={service.href}
                                    className="block rounded-lg px-3 py-2 text-[13px] leading-relaxed text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all font-medium hover:translate-x-1"
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

              {/* Industries Dropdown with Colored Icons */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-secondary tracking-wide">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[720px] p-6 bg-gradient-to-br from-card to-card/95 border border-border shadow-2xl rounded-xl backdrop-blur-sm">
                        <div className="grid grid-cols-3 gap-3">
                          {industryCategories.map((industry) => {
                            const Icon = getIndustryIcon(industry.icon);
                            return (
                              <a
                                key={industry.name}
                                href={industry.href}
                                className="flex items-center gap-3 rounded-xl p-3 text-sm leading-snug hover:bg-accent/50 transition-all group hover:shadow-md border border-transparent hover:border-border/50"
                              >
                                <div className={`w-10 h-10 rounded-xl ${industry.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                                  <Icon className={`w-5 h-5 ${industry.color}`} />
                                </div>
                                <span className="font-semibold text-foreground text-[13px] tracking-wide">{industry.name}</span>
                              </a>
                            );
                          })}
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
                  className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors tracking-wide ${
                    currentPath === link.href
                      ? "text-primary font-bold"
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs xl:text-sm font-bold tracking-wide shadow-lg hover:shadow-xl transition-all"
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
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in max-h-[calc(100vh-4.5rem)] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <a
                  href="/"
                  className="px-4 py-3 text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors tracking-wide"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>

                {/* Mobile About Us Dropdown */}
                <div>
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between tracking-wide"
                  >
                    About Us
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isAboutOpen && (
                    <div className="pl-2 py-2 space-y-2 animate-fade-in">
                      {aboutDropdown.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                          >
                            <div className={`w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-4 h-4 ${item.color}`} />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{item.name}</div>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between tracking-wide"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-2 py-2 space-y-4 animate-fade-in">
                      {serviceCategories.map((category) => (
                        <div key={category.category} className="space-y-1">
                          <div className="px-4 py-1.5 text-[11px] font-bold text-primary uppercase tracking-widest">
                            {category.category}
                          </div>
                          {category.items.map((service) => (
                            <a
                              key={service.title}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2.5 text-[13px] text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors font-medium"
                            >
                              {service.title}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries Dropdown with Colored Icons */}
                <div>
                  <button
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-between tracking-wide"
                  >
                    Industries
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isIndustriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isIndustriesOpen && (
                    <div className="pl-2 py-2 space-y-1 animate-fade-in">
                      {industryCategories.map((industry) => {
                        const Icon = getIndustryIcon(industry.icon);
                        return (
                          <a
                            key={industry.name}
                            href={industry.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                          >
                            <div className={`w-9 h-9 rounded-lg ${industry.bgColor} flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-4 h-4 ${industry.color}`} />
                            </div>
                            <span className="font-semibold text-foreground">{industry.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors tracking-wide"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 text-sm font-bold tracking-wide shadow-lg"
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
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navigation;