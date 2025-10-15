import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const caseStudies = [
    {
      title: "Fortune 500 Manufacturing AI Integration",
      client: "Global Manufacturing Leader",
      description: "Implemented AI-powered predictive maintenance reducing downtime by 45% and saving $2.3M annually.",
      results: ["45% reduction in downtime", "$2.3M annual savings", "98% accuracy in failure prediction"],
      industry: "Manufacturing",
    },
    {
      title: "E-Commerce Platform Transformation",
      client: "Leading Retail Chain",
      description: "Built custom AI chatbot handling 50K+ daily interactions with 92% customer satisfaction rate.",
      results: ["50K+ daily interactions", "92% satisfaction rate", "60% reduction in support costs"],
      industry: "Retail",
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "Multi-Hospital Network",
      description: "Developed real-time analytics dashboard improving patient outcomes and operational efficiency.",
      results: ["30% faster diagnosis", "25% cost reduction", "Enhanced patient care"],
      industry: "Healthcare",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-16 sm:mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-default group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Case Studies Section */}
        <div id="case-studies" className="mt-16 sm:mt-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from our client partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 shadow-card hover:shadow-hover transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Badge className="mb-4 bg-accent/10 text-accent border-accent text-xs">{study.industry}</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary font-medium mb-3">{study.client}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Key Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
