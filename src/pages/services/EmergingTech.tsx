import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blocks, Cloud, Shield, Cpu, Network, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergingTech() {
  const services = [
    {
      icon: <Blocks className="w-8 h-8 text-primary" />,
      title: "Blockchain Development",
      description: "Secure, transparent solutions with distributed ledger technology",
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "IoT Solutions",
      description: "Connect devices and unlock data-driven insights",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "AR/VR Development",
      description: "Immersive experiences that engage and inspire",
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Edge Computing",
      description: "Process data closer to the source for faster insights",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Quantum Computing",
      description: "Explore next-generation computational capabilities",
    },
  ];

  const benefits = [
    "Stay ahead of the technology curve",
    "Gain competitive advantage through innovation",
    "Future-proof your business infrastructure",
    "Unlock new revenue streams",
    "Enhanced security and compliance",
    "Improved operational efficiency",
  ];

  return (
    <main className="pt-16">
      <PageHero
        title="Emerging Technologies"
        description="Innovate with cutting-edge technology solutions"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Future-Ready <span className="text-primary">Technology Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We help businesses leverage emerging technologies to innovate,
              differentiate, and create new value for their customers.
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
              Why Invest in Emerging Technologies?
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
                Explore Innovation Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
