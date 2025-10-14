import { Card } from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Code,
  Workflow,
  Database,
  Cloud,
  Zap,
  Shield,
} from "lucide-react";

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

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-default group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
