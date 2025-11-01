import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Workflow, Database, Cpu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIAndAutomation() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics and decision making",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Intelligent Chatbots",
      description: "AI-powered conversational agents for customer service",
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline workflows",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Analytics",
      description: "Extract insights from your data with AI-powered analytics",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Computer Vision",
      description: "Image and video analysis for quality control and security",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and content generation",
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Improve accuracy and reduce human error",
    "24/7 automated operations",
    "Scale effortlessly as your business grows",
    "Real-time insights and decision support",
    "Competitive advantage through innovation",
  ];

  return (
    <main className="pt-16">
      <PageHero
        title="AI & Automation Services"
        description="Leverage artificial intelligence to transform your business"
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Intelligent Solutions for <span className="text-primary">Tomorrow's Challenges</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We help businesses harness the power of AI and automation to increase
              efficiency, reduce costs, and unlock new opportunities for growth.
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
              Transform Your Business With AI
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
                Explore AI Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
