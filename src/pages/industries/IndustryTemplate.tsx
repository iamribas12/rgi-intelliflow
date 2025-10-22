import { useParams } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const industryData: Record<string, {
  title: string;
  description: string;
  heroImage: string;
  solutions: string[];
  benefits: string[];
  caseStudies: { title: string; description: string }[];
}> = {
  "e-learning": {
    title: "E-Learning Solutions",
    description: "Transform education with innovative digital learning platforms",
    heroImage: "",
    solutions: [
      "Learning Management Systems (LMS)",
      "Interactive Course Development",
      "Virtual Classroom Solutions",
      "Student Assessment Tools",
      "Mobile Learning Apps",
      "Gamification Features"
    ],
    benefits: [
      "Increased engagement and retention",
      "Flexible learning schedules",
      "Cost-effective training delivery",
      "Real-time progress tracking",
      "Scalable educational content"
    ],
    caseStudies: [
      {
        title: "University LMS Platform",
        description: "Built a comprehensive learning platform serving 50,000+ students"
      }
    ]
  },
  "healthcare": {
    title: "Healthcare Technology",
    description: "Empowering healthcare with cutting-edge digital solutions",
    heroImage: "",
    solutions: [
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Electronic Health Records (EHR)",
      "Medical Imaging Solutions",
      "Healthcare Analytics",
      "Appointment Scheduling"
    ],
    benefits: [
      "Improved patient care quality",
      "Reduced operational costs",
      "Enhanced data security",
      "Streamlined workflows",
      "Better patient outcomes"
    ],
    caseStudies: [
      {
        title: "Telehealth Platform",
        description: "Connected 10,000+ patients with healthcare providers remotely"
      }
    ]
  },
  "entertainment": {
    title: "Entertainment Solutions",
    description: "Creating immersive digital entertainment experiences",
    heroImage: "",
    solutions: [
      "Streaming Platforms",
      "Content Management Systems",
      "Live Event Broadcasting",
      "Social Entertainment Apps",
      "Gaming Platforms",
      "AR/VR Experiences"
    ],
    benefits: [
      "Enhanced user engagement",
      "Multi-platform accessibility",
      "Personalized content delivery",
      "Monetization opportunities",
      "Real-time analytics"
    ],
    caseStudies: [
      {
        title: "Video Streaming App",
        description: "Developed a platform with 1M+ active users"
      }
    ]
  },
  "food": {
    title: "Food Industry Solutions",
    description: "Revolutionizing food service with digital innovation",
    heroImage: "",
    solutions: [
      "Food Delivery Platforms",
      "Restaurant Management Systems",
      "Online Ordering Solutions",
      "Kitchen Display Systems",
      "Inventory Management",
      "Customer Loyalty Programs"
    ],
    benefits: [
      "Increased order efficiency",
      "Reduced operational waste",
      "Enhanced customer experience",
      "Real-time order tracking",
      "Data-driven insights"
    ],
    caseStudies: [
      {
        title: "Multi-Restaurant Delivery",
        description: "Connected 500+ restaurants with customers in a unified platform"
      }
    ]
  },
  "social": {
    title: "Social Networking",
    description: "Building connections through innovative social platforms",
    heroImage: "",
    solutions: [
      "Social Media Platforms",
      "Community Forums",
      "Live Chat Systems",
      "Content Sharing Networks",
      "Video Conferencing",
      "Social Commerce"
    ],
    benefits: [
      "Enhanced user engagement",
      "Viral content potential",
      "Community building",
      "Real-time interactions",
      "Monetization capabilities"
    ],
    caseStudies: [
      {
        title: "Professional Network",
        description: "Built a niche social platform with 100K+ professionals"
      }
    ]
  },
  "ecommerce": {
    title: "Ecommerce Solutions",
    description: "Powering online retail with seamless shopping experiences",
    heroImage: "",
    solutions: [
      "Online Storefronts",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Fulfillment Systems",
      "Customer Analytics",
      "Mobile Commerce Apps"
    ],
    benefits: [
      "24/7 sales capability",
      "Global market reach",
      "Reduced overhead costs",
      "Personalized shopping",
      "Automated operations"
    ],
    caseStudies: [
      {
        title: "Fashion Marketplace",
        description: "Created a platform processing $10M+ in annual sales"
      }
    ]
  },
  "travel": {
    title: "Travel & Tourism",
    description: "Transforming travel experiences with digital solutions",
    heroImage: "",
    solutions: [
      "Booking Platforms",
      "Travel Planning Apps",
      "Hotel Management Systems",
      "Tour Guide Applications",
      "Travel Analytics",
      "Loyalty Programs"
    ],
    benefits: [
      "Streamlined booking process",
      "Enhanced customer experience",
      "Real-time availability",
      "Automated confirmations",
      "Revenue optimization"
    ],
    caseStudies: [
      {
        title: "Hotel Booking Platform",
        description: "Connected travelers with 1,000+ hotels worldwide"
      }
    ]
  },
  "fintech": {
    title: "Fintech Solutions",
    description: "Innovating financial services with secure technology",
    heroImage: "",
    solutions: [
      "Digital Banking Platforms",
      "Payment Processing",
      "Cryptocurrency Solutions",
      "Investment Apps",
      "Insurance Technology",
      "Financial Analytics"
    ],
    benefits: [
      "Enhanced security",
      "Faster transactions",
      "Reduced costs",
      "Better accessibility",
      "Regulatory compliance"
    ],
    caseStudies: [
      {
        title: "Digital Wallet",
        description: "Processed 5M+ transactions with 99.99% uptime"
      }
    ]
  },
  "sports": {
    title: "Sports Applications",
    description: "Engaging sports fans with dynamic digital experiences",
    heroImage: "",
    solutions: [
      "Sports Betting Platforms",
      "Fantasy Sports Apps",
      "Fitness Tracking",
      "Live Score Updates",
      "Team Management",
      "Fan Engagement Apps"
    ],
    benefits: [
      "Real-time updates",
      "Enhanced fan engagement",
      "Performance analytics",
      "Community building",
      "Monetization options"
    ],
    caseStudies: [
      {
        title: "Fantasy Sports Platform",
        description: "Engaged 500K+ sports enthusiasts monthly"
      }
    ]
  },
  "escooter": {
    title: "E-Scooter Solutions",
    description: "Revolutionizing urban mobility with smart solutions",
    heroImage: "",
    solutions: [
      "Scooter Sharing Apps",
      "IoT Fleet Management",
      "GPS Tracking Systems",
      "Payment Integration",
      "Maintenance Scheduling",
      "Usage Analytics"
    ],
    benefits: [
      "Eco-friendly transportation",
      "Reduced traffic congestion",
      "Cost-effective mobility",
      "Easy accessibility",
      "Real-time tracking"
    ],
    caseStudies: [
      {
        title: "City Scooter Network",
        description: "Deployed 10,000+ scooters across multiple cities"
      }
    ]
  },
  "on-demand": {
    title: "On-Demand Services",
    description: "Connecting service providers with customers instantly",
    heroImage: "",
    solutions: [
      "Service Marketplace",
      "Real-Time Matching",
      "Payment Processing",
      "Rating & Review Systems",
      "Schedule Management",
      "Multi-Service Platforms"
    ],
    benefits: [
      "Instant service access",
      "Flexible scheduling",
      "Transparent pricing",
      "Quality assurance",
      "Convenient booking"
    ],
    caseStudies: [
      {
        title: "Home Services App",
        description: "Connected 50K+ service providers with customers"
      }
    ]
  },
  "drone": {
    title: "Drone Technology",
    description: "Advancing aerial solutions with intelligent systems",
    heroImage: "",
    solutions: [
      "Drone Control Systems",
      "Aerial Mapping Software",
      "Delivery Management",
      "Surveillance Solutions",
      "Data Analytics",
      "Flight Planning Tools"
    ],
    benefits: [
      "Enhanced efficiency",
      "Cost-effective operations",
      "Improved safety",
      "Detailed insights",
      "Scalable solutions"
    ],
    caseStudies: [
      {
        title: "Delivery Drone Network",
        description: "Automated 1,000+ daily deliveries with drone fleet"
      }
    ]
  }
};

const IndustryTemplate = () => {
  const { industry } = useParams<{ industry: string }>();
  const data = industry ? industryData[industry] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Industry not found</h1>
      </div>
    );
  }

  return (
    <main className="pt-16">
      <PageHero 
        title={data.title}
        description={data.description}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.solutions.map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground">{study.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your {data.title.toLowerCase()} with our innovative solutions.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact Us Today</a>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default IndustryTemplate;
