import { Card } from "@/components/ui/card";
import { Rocket, Eye, Users, Lightbulb } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Scalable Technology",
      description:
        "Our solutions are built to grow with your business, ensuring long-term value and adaptability to changing needs.",
    },
    {
      icon: Eye,
      title: "Transparent Workflow",
      description:
        "Complete visibility into project progress with regular updates, clear communication, and collaborative development processes.",
    },
    {
      icon: Users,
      title: "Dedicated Expert Team",
      description:
        "Work with experienced professionals who are committed to delivering excellence and driving your success.",
    },
    {
      icon: Lightbulb,
      title: "Automation-First Mindset",
      description:
        "We prioritize intelligent automation to maximize efficiency, reduce costs, and accelerate time-to-market.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">RGI Intelligence</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in digital transformation and innovation
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-default animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
