import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise AI Chatbot Platform",
      description:
        "Developed a multi-channel AI chatbot system serving 50K+ daily users with 95% satisfaction rate.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      tags: ["AI", "NLP", "React", "Python"],
      link: "https://example-chatbot-platform.com",
    },
    {
      title: "Healthcare Management System",
      description:
        "Built a comprehensive patient management and telemedicine platform for a leading healthcare provider.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      tags: ["Healthcare", "React", "Node.js", "PostgreSQL"],
      link: "https://example-healthcare-system.com",
    },
    {
      title: "E-Commerce Automation Suite",
      description:
        "Created an automated inventory and order management system reducing processing time by 80%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tags: ["Automation", "API", "AWS", "MongoDB"],
      link: "https://example-ecommerce-automation.com",
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "Real-time business intelligence platform providing actionable insights for financial institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["BI", "Data Analytics", "Vue.js", "Python"],
      link: "https://example-analytics-dashboard.com",
    },
    {
      title: "IoT Fleet Management System",
      description:
        "Smart tracking and management solution for logistics companies with 1000+ vehicles.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
      tags: ["IoT", "Real-time", "React Native", "GraphQL"],
      link: "https://example-fleet-management.com",
    },
    {
      title: "Custom CRM & Sales Pipeline",
      description:
        "Tailored customer relationship management system with advanced automation and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["CRM", "Automation", "Angular", "Django"],
      link: "https://example-crm-system.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and client transformations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer animate-slide-up h-full">
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
                  </div>
                </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
