import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: "ai-chatbot-platform",
    title: "Enterprise AI Chatbot Platform",
    client: "Global E-Commerce Leader",
    industry: "E-Commerce",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    challenge:
      "A leading e-commerce company was struggling with high customer service costs and long response times. They needed a scalable solution to handle 50,000+ daily customer inquiries across multiple channels while maintaining high satisfaction rates.",
    solution:
      "We developed a comprehensive AI-powered chatbot platform that integrates seamlessly with their existing customer service infrastructure. The solution includes natural language processing, multi-channel support (web, mobile, social media), and intelligent routing to human agents when needed.",
    results: [
      "95% customer satisfaction rate",
      "60% reduction in response time",
      "40% decrease in customer service costs",
      "50,000+ daily interactions handled automatically",
      "24/7 availability across all channels",
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS Lambda"],
    timeline: "6 months",
    testimonial: {
      quote:
        "RGI Intelligence transformed our customer service operations. The AI chatbot handles the majority of our inquiries efficiently, allowing our team to focus on complex issues.",
      author: "Sarah Johnson",
      position: "VP of Customer Experience",
    },
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management System",
    client: "Regional Healthcare Provider",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    challenge:
      "A healthcare provider needed to modernize their patient management system and implement telemedicine capabilities to serve their growing patient base while complying with strict healthcare regulations.",
    solution:
      "We built a HIPAA-compliant healthcare management platform with integrated telemedicine features, electronic health records (EHR), appointment scheduling, billing, and patient portal. The system provides secure video consultations and seamless data sharing between healthcare providers.",
    results: [
      "300% increase in telemedicine appointments",
      "50% reduction in administrative overhead",
      "99.9% system uptime",
      "Full HIPAA compliance achieved",
      "15,000+ patients onboarded in first year",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
    timeline: "8 months",
    testimonial: {
      quote:
        "The platform has revolutionized how we deliver care. Our patients love the convenience of telemedicine, and our staff appreciates the intuitive interface.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer",
    },
  },
  {
    id: "ecommerce-automation",
    title: "E-Commerce Automation Suite",
    client: "Fast-Growing Retail Brand",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    challenge:
      "A rapidly growing retail brand was overwhelmed with manual order processing and inventory management. They needed automation to scale their operations without proportionally increasing staff.",
    solution:
      "We created an end-to-end automation suite that handles inventory tracking, order processing, supplier communications, and fulfillment. The system includes predictive analytics for inventory optimization and automated reordering.",
    results: [
      "80% reduction in order processing time",
      "95% inventory accuracy",
      "50% decrease in stockouts",
      "$2M annual cost savings",
      "3x order volume capacity with same team size",
    ],
    technologies: ["Python", "Django", "MongoDB", "AWS", "Stripe API"],
    timeline: "5 months",
    testimonial: {
      quote:
        "This automation suite has been a game-changer. We've been able to triple our order volume without hiring additional staff.",
      author: "Jennifer Martinez",
      position: "Operations Director",
    },
  },
];

export default function CaseStudy() {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();

  const study = caseStudies.find((s) => s.id === caseId);

  if (!study) {
    return (
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate("/services")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <Badge variant="secondary" className="text-xs sm:text-sm">{study.industry}</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">Timeline: {study.timeline}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {study.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Client: {study.client}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>
            </Card>

            {/* Solution */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Our Solution
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </Card>

            {/* Results */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Results & Impact
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <blockquote className="text-base sm:text-lg text-foreground italic mb-4">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  {study.testimonial.author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {study.testimonial.position}, {study.client}
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sm:p-8 sticky top-24 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                    Project Details
                  </h3>
                  <div className="space-y-3 pl-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Industry
                      </p>
                      <p className="text-sm sm:text-base text-foreground font-medium">
                        {study.industry}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Timeline
                      </p>
                      <p className="text-sm sm:text-base text-foreground font-medium">
                        {study.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs sm:text-sm border-primary/30 bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-sm sm:text-base font-semibold py-6 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
