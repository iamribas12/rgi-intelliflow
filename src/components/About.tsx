import { TrendingUp, Users, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "150+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "50+",
      label: "Expert Team Members",
    },
    {
      icon: Target,
      value: "8",
      label: "Core Services",
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">RGI Intelligence</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of intelligent business solutions
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 lg:p-12 mb-12 shadow-card hover:shadow-hover transition-all animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At RGI Intelligence, we believe that every business deserves
                  access to cutting-edge technology. Our mission is to empower
                  organizations with AI-driven automation, intelligent software
                  development, and custom solutions that drive real results.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We combine deep technical expertise with a passion for
                  innovation to deliver scalable, future-ready solutions that
                  transform how businesses operate.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  To be the trusted partner for businesses seeking to harness
                  the power of artificial intelligence and automation in their
                  digital transformation journey.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We envision a world where intelligent systems work seamlessly
                  alongside human expertise, creating unprecedented efficiency
                  and innovation.
                </p>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-card hover:shadow-hover transition-all hover:scale-105 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
