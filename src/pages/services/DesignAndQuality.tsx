import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, TestTube, Shield, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesignAndQuality() {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Create intuitive and visually stunning user experiences",
    },
    {
      icon: <TestTube className="w-8 h-8 text-primary" />,
      title: "Quality Assurance Testing",
      description: "Comprehensive testing to ensure flawless functionality",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security Testing",
      description: "Identify and fix vulnerabilities before they become problems",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Usability Testing",
      description: "Validate designs with real users for optimal experience",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Accessibility Compliance",
      description: "Ensure your product is accessible to everyone",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Performance Testing",
      description: "Optimize speed, reliability, and scalability",
    },
  ];

  const benefits = [
    "Reduce development costs by catching bugs early",
    "Improve customer satisfaction and retention",
    "Increase conversion rates with better UX",
    "Build trust with high-quality products",
    "Meet industry standards and compliance",
    "Faster time to market with efficient testing",
  ];

  return (
    <main className="pt-16">
      <PageHero
        title="Design & Quality Assurance"
        description="Deliver exceptional experiences with flawless execution"
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Excellence in <span className="text-primary">Design & Quality</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine beautiful design with rigorous testing to deliver
              products that not only look great but work flawlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Why Quality Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Elevate Your Product Quality
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
