import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search, Filter, X, Menu } from "lucide-react";
import { useState, useMemo } from "react";

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const projects = [
    {
      title: "Enterprise AI Chatbot Platform",
      description:
        "Developed a multi-channel AI chatbot system serving 50K+ daily users with 95% satisfaction rate.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "NLP", "React", "Python"],
      industry: "AI & Automation",
      link: "https://www.enterprisebot.ai/",
    },
    {
      title: "Healthcare Management System",
      description:
        "Built a comprehensive patient management and telemedicine platform for a leading healthcare provider.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["Healthcare", "React", "Node.js", "PostgreSQL"],
      industry: "Healthcare",
      link: "https://example-healthcare.com",
    },
    {
      title: "E-Commerce Automation Suite",
      description:
        "Created an automated inventory and order management system reducing processing time by 80%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["Automation", "API", "AWS", "MongoDB"],
      industry: "E-Commerce",
      link: "https://example-ecommerce.com",
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "Real-time business intelligence platform providing actionable insights for financial institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["BI", "Data Analytics", "Vue.js", "Python"],
      industry: "Finance",
      link: "https://example-analytics-dashboard.com",
    },
    {
      title: "IoT Fleet Management System",
      description:
        "Smart tracking and management solution for logistics companies with 1000+ vehicles.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
      tags: ["IoT", "Real-time", "React Native", "GraphQL"],
      industry: "Logistics",
      link: "https://example-fleet.com",
    },
    {
      title: "Custom CRM & Sales Pipeline",
      description:
        "Tailored customer relationship management system with advanced automation and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["CRM", "Automation", "Angular", "Django"],
      industry: "Enterprise",
      link: "https://example-crm-system.com",
    },
    {
      title: "Online Learning Management System",
      description:
        "Complete LMS with course creation, video lectures, quizzes, assignments, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      tags: ["Education", "LMS", "React", "Node.js", "MongoDB"],
      industry: "Education",
      link: "https://example-lms.com",
    },
    {
      title: "Student Information System (SIS)",
      description:
        "Comprehensive school management system with attendance, grades, timetables, parent portal, and reports.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      tags: ["School Mgmt", "SIS", "Vue.js", "Laravel", "MySQL"],
      industry: "Education",
      link: "https://example-sis.com",
    },
    {
      title: "Online Examination & Assessment Platform",
      description:
        "Secure online testing system with auto-grading, proctoring, analytics, and certificate generation.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      tags: ["Exams", "Proctoring", "Angular", "AI", "PostgreSQL"],
      industry: "Education",
      link: "https://example-exam.com",
    },
    {
      title: "Tutoring Marketplace & Scheduling",
      description:
        "Connect students with tutors, book sessions, video calls, payment processing, and review system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      tags: ["Tutoring", "Marketplace", "Next.js", "Stripe", "Calendar API"],
      industry: "Education",
      link: "https://example-tutoring.com",
    },
    {
      title: "Hotel & Resort Booking System",
      description:
        "Full-featured hotel reservation platform with room availability, pricing, payment gateway, and guest management.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      tags: ["Hospitality", "Booking", "React", "Stripe", "Booking.com API"],
      industry: "Booking",
      link: "https://example-hotel.com",
    },
    {
      title: "Appointment Scheduling Software",
      description:
        "Multi-service booking system with calendar sync, reminders, staff management, and customer notifications.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      tags: ["Scheduling", "Appointments", "React", "Twilio", "Google Calendar"],
      industry: "Booking",
      link: "https://example-appointments.com",
    },
    {
      title: "Event & Venue Booking Platform",
      description:
        "Book venues for events with availability calendar, pricing tiers, contract management, and deposit handling.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      tags: ["Events", "Venues", "Vue.js", "Stripe", "AWS"],
      industry: "Booking",
      link: "https://example-venue.com",
    },
    {
      title: "Salon & Spa Booking App",
      description:
        "Beauty services booking with service catalog, stylist selection, loyalty points, and package deals.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      tags: ["Beauty", "Booking", "Flutter", "Firebase", "Razorpay"],
      industry: "Booking",
      link: "https://example-salon.com",
    },
    {
      title: "Travel & Tour Booking System",
      description:
        "Travel packages, flight & hotel bundling, itinerary builder, travel insurance, and visa assistance.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      tags: ["Travel", "Tours", "React", "Amadeus API", "Stripe"],
      industry: "Booking",
      link: "https://example-travel.com",
    },
    {
      title: "Restaurant Table Reservation System",
      description:
        "Online table booking with real-time availability, special requests, waitlist management, and SMS confirmations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["Restaurant", "Reservations", "React", "Twilio", "OpenTable API"],
      industry: "Booking",
      link: "https://example-restaurant-booking.com",
    },
    {
      title: "Invoice & Billing Management System",
      description:
        "Professional invoicing with recurring billing, payment tracking, expense management, and tax calculations.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      tags: ["Billing", "Invoicing", "React", "Stripe", "QuickBooks API"],
      industry: "Billing",
      link: "https://example-billing.com",
    },
    {
      title: "Subscription & Recurring Billing Platform",
      description:
        "SaaS billing solution with subscription plans, usage-based billing, dunning management, and revenue analytics.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      tags: ["SaaS", "Subscriptions", "Vue.js", "Stripe", "Chargebee"],
      industry: "Billing",
      link: "https://example-subscription.com",
    },
    {
      title: "Point of Sale (POS) System",
      description:
        "Retail POS with inventory tracking, barcode scanning, multiple payment methods, and sales reporting.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["POS", "Retail", "React Native", "Square API", "Cloud"],
      industry: "Billing",
      link: "https://example-pos.com",
    },
    {
      title: "Medical Billing & Insurance Claims",
      description:
        "Healthcare billing system with insurance claims processing, patient statements, and EHR integration.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      tags: ["Healthcare", "Medical Billing", "Angular", "HL7", "HIPAA"],
      industry: "Billing",
      link: "https://example-medical-billing.com",
    },
    {
      title: "E-Commerce Payment Gateway Integration",
      description:
        "Multi-currency payment processing with fraud detection, refund management, and payment reconciliation.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tags: ["Payments", "E-Commerce", "Next.js", "Stripe", "PayPal"],
      industry: "E-Commerce",
      link: "https://example-payments.com",
    },
    {
      title: "Utility Bill Management System",
      description:
        "Automated billing for utilities with meter reading integration, payment plans, and customer portals.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      tags: ["Utilities", "Billing", "React", "IoT", "Auto-payment"],
      industry: "Billing",
      link: "https://example-utility-billing.com",
    },
    {
      title: "Contractor & Freelance Invoicing",
      description:
        "Time tracking, project-based invoicing, expense receipts, client portal, and payment reminders.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
      tags: ["Freelance", "Invoicing", "Vue.js", "Stripe", "Time Tracking"],
      industry: "Billing",
      link: "https://example-freelance-billing.com",
    },
    {
      title: "Gym & Fitness Membership Billing",
      description:
        "Membership management with recurring payments, class bookings, trainer scheduling, and attendance tracking.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      tags: ["Fitness", "Memberships", "React Native", "Stripe", "Calendar"],
      industry: "Billing",
      link: "https://example-gym-billing.com",
    },
  ];

  const industries = ["All", ...Array.from(new Set(projects.map(p => p.industry)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesIndustry = selectedIndustry === "All" || project.industry === selectedIndustry;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  const handleIndustryClick = (industry: string) => {
    setSelectedIndustry(industry);
    setIsMobileFilterOpen(false);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and client transformations
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline"
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filter by Industry
              </Button>
            </div>

            {/* Desktop Sidebar Filter */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Industries
                </h3>
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedIndustry === industry
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      {industry}
                      {industry !== "All" && (
                        <span className="ml-2 text-xs opacity-70">
                          ({projects.filter(p => p.industry === industry).length})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileFilterOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileFilterOpen(false)}>
                <div 
                  className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background shadow-2xl animate-slide-in-left"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filter by Industry
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileFilterOpen(false)}
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <button
                          key={industry}
                          onClick={() => handleIndustryClick(industry)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            selectedIndustry === industry
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-secondary text-foreground"
                          }`}
                        >
                          {industry}
                          {industry !== "All" && (
                            <span className="ml-2 text-xs opacity-70">
                              ({projects.filter(p => p.industry === industry).length})
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-6 text-base"
                  />
                </div>
              </div>

              {/* Active Filters */}
              {(selectedIndustry !== "All" || searchQuery) && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedIndustry !== "All" && (
                    <Badge variant="secondary" className="gap-2">
                      {selectedIndustry}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => setSelectedIndustry("All")}
                      />
                    </Badge>
                  )}
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-2">
                      Search: "{searchQuery}"
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => setSearchQuery("")}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              {/* Projects Grid */}
              {filteredProjects.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ExternalLink className="w-10 h-10 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-2">
                            <Badge variant="outline" className="text-xs">
                              {project.industry}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    No projects found matching your criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedIndustry("All");
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;