import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Layers, Rocket, Lock, LineChart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Custom Web Applications",
      description: "Tailored web solutions built to your exact specifications",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Complete frontend and backend development services",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging web applications",
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "E-Commerce Solutions",
      description: "Secure and scalable online stores that drive sales",
    },
    {
      icon: <LineChart className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites that rank higher on search engines",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Modern UI/UX Design",
      description: "Beautiful, responsive designs that convert visitors",
    },
  ];

  const benefits = [
    "Responsive design for all devices",
    "SEO-optimized architecture",
    "Cloud-based scalable infrastructure",
    "Advanced analytics integration",
    "Continuous integration and deployment",
    "Comprehensive documentation and training",
  ];

  return (
    <main className="pt-16">
      <PageHero
        title="Web Development Services"
        description="Build powerful web experiences that drive business growth"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Modern Web Solutions for <span className="text-primary">Modern Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in creating fast, secure, and scalable web applications
              that deliver exceptional user experiences and drive measurable results.
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
              Benefits of Our Web Development Services
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
                Start Your Web Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
