import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  MessageSquare,
  Code,
  Workflow,
  Database,
  Cloud,
  Zap,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Automation Systems",
      description:
        "Intelligent automation solutions that streamline operations, reduce manual tasks, and enhance decision-making processes.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Custom AI Agents",
      description:
        "Advanced conversational AI and custom agents tailored to your business needs, providing 24/7 customer support and engagement.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description:
        "Full-stack development services for web and mobile applications using modern frameworks and best practices.",
    },
    {
      icon: Workflow,
      title: "Software & API Integration",
      description:
        "Seamless integration of third-party services, custom APIs, and legacy systems to create unified digital ecosystems.",
    },
    {
      icon: Database,
      title: "Data-Driven Business Intelligence",
      description:
        "Transform raw data into actionable insights with our analytics platforms, dashboards, and reporting systems.",
    },
    {
      icon: Cloud,
      title: "IT Support & Cloud Consulting",
      description:
        "Comprehensive cloud migration, infrastructure management, and ongoing technical support for your business.",
    },
    {
      icon: Zap,
      title: "Enterprise Workflow Solutions",
      description:
        "Future-ready solutions designed to optimize enterprise workflows and boost organizational efficiency.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Robust security implementations and compliance solutions to protect your digital assets and meet regulatory requirements.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".service-card")?.clientWidth || 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            digital transformation.
          </p>
        </div>

        {/* SCROLLABLE SECTION */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Arrows */}
          {canScrollLeft && (
            <Button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 shadow-md items-center justify-center"
              size="icon"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 shadow-md items-center justify-center"
              size="icon"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          )}

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth no-scrollbar flex gap-4 sm:gap-6 pb-4"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card flex-shrink-0 w-[85vw] sm:w-80 md:w-96 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex justify-center gap-3 mt-5 lg:hidden">
            <Button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              size="icon"
              variant="outline"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
