import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroPricing from "@/assets/hero-pricing.jpg";

const pricingPlans = [
  {
    name: "Starter",
    price: "2,499",
    period: "one-time",
    description: "Perfect for small businesses looking to automate basic processes",
    features: [
      "Basic AI Chatbot Integration",
      "Up to 1,000 monthly interactions",
      "Email Support",
      "Basic Analytics Dashboard",
      "Single Platform Integration",
      "2 Revision Rounds",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "7,999",
    period: "one-time",
    description: "Ideal for growing businesses requiring comprehensive solutions",
    features: [
      "Advanced AI & Automation",
      "Custom Web/App Development",
      "Up to 10,000 monthly interactions",
      "Priority Support (24/7)",
      "Advanced Analytics & Reporting",
      "Multi-Platform Integration",
      "API Integration (up to 5)",
      "5 Revision Rounds",
      "Cloud Infrastructure Setup",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations needing scalable, enterprise-grade solutions",
    features: [
      "Everything in Professional",
      "Unlimited Interactions",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "Enterprise-Grade Security",
      "Full DevOps Support",
      "Unlimited API Integrations",
      "White-Label Solutions",
      "Unlimited Revisions",
      "On-Premise Deployment Option",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your business needs"
        backgroundImage={heroPricing}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 sm:p-8 flex flex-col relative ${
                plan.popular
                  ? "border-primary shadow-hover scale-105"
                  : "border-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                <a href="/contact">{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="p-6 sm:p-8 bg-secondary/30">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Every business is unique. Let's discuss your specific requirements and
              create a tailored solution that fits your budget and goals.
            </p>
            <Button asChild variant="outline">
              <a href="/contact">Schedule a Consultation</a>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}
