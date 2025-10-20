import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const HeroProjects = () => {
  const latestProjects = [
    {
      title: "Enterprise AI Chatbot Platform",
      description:
        "Developed a multi-channel AI chatbot system serving 50K+ daily users with 95% satisfaction rate.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "NLP", "React", "Python"],
      industry: "AI & Automation",
      link: "https://www.techugo.com/enterprise-ai-chatbot-development-company",
    },
    {
      title: "Healthcare Management System",
      description:
        "Built a comprehensive patient management and telemedicine platform for a leading healthcare provider.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["Healthcare", "React", "Node.js", "PostgreSQL"],
      industry: "Healthcare",
      link: "https://example-healthcare.com",
    },
    {
      title: "E-Commerce Automation Suite",
      description:
        "Created an automated inventory and order management system reducing processing time by 80%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["Automation", "API", "AWS", "MongoDB"],
      industry: "E-Commerce",
      link: "https://example-ecommerce.com",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-5"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our latest success stories and transformations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {latestProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-44 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                  {project.industry}
                </Badge>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all"
                >
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/portfolio" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
