import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Shield, Code, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileDevelopment() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Native iOS Development",
      description: "Build powerful, performant iOS apps with Swift and SwiftUI",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Native Android Development",
      description: "Create feature-rich Android applications with Kotlin",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Cross-Platform Development",
      description: "Develop once, deploy everywhere with React Native and Flutter",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "App Security",
      description: "Enterprise-grade security and data protection",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "App Store Optimization",
      description: "Maximize visibility and downloads on app stores",
    },
  ];

  const benefits = [
    "Faster time to market with agile development",
    "Reduced development costs with code reusability",
    "Seamless integration with existing systems",
    "Scalable architecture for future growth",
    "24/7 maintenance and support",
    "Regular updates and feature enhancements",
  ];

  return (
    <main className="pt-16">
      <PageHero
        title="Mobile App Development"
        description="Transform your ideas into powerful mobile applications"
        backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Build Apps That <span className="text-primary">Drive Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We create mobile applications that deliver exceptional user experiences
              and drive business growth across iOS, Android, and cross-platform solutions.
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
              Why Choose Our Mobile Development Services?
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
                Start Your Mobile Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
