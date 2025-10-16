import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowLeft, ExternalLink } from "lucide-react";

const allJobs = [
  {
    id: "sdr",
    title: "Sales Development Representative (SDR)",
    department: "Sales & Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "Entry-level",
    salary: "$40,000 - $60,000",
    description:
      "We're looking for a motivated Sales Development Representative to join our growing sales team. You'll be responsible for identifying and qualifying potential customers, setting up meetings for our Account Executives, and helping us expand our customer base.",
    responsibilities: [
      "Generate qualified leads through outbound prospecting (cold calling, emails, LinkedIn)",
      "Research and identify decision-makers within target companies",
      "Qualify inbound leads and schedule meetings for Account Executives",
      "Maintain accurate records in CRM (Salesforce/HubSpot)",
      "Collaborate with marketing and sales teams to optimize lead generation strategies",
      "Meet or exceed monthly quotas for qualified opportunities",
    ],
    requirements: [
      "Bachelor's degree or equivalent experience",
      "Excellent communication and interpersonal skills",
      "Strong desire to learn and grow in a sales career",
      "Comfortable with cold calling and rejection",
      "Basic understanding of CRM tools",
      "Self-motivated with a competitive spirit",
    ],
    benefits: [
      "Competitive base salary plus uncapped commission",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Professional development and training programs",
      "Flexible work environment (remote/hybrid options)",
      "Generous PTO and paid holidays",
    ],
    applyUrl: "https://forms.google.com/apply-sdr",
  },
  {
    id: "inside-sales",
    title: "Inside Sales Representative",
    department: "Sales & Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    salary: "$50,000 - $75,000",
    description:
      "Join our inside sales team to sell innovative solutions remotely. You'll manage the entire sales cycle from prospecting to closing, building strong relationships with customers through phone, email, and video conferencing.",
    responsibilities: [
      "Conduct product demonstrations and presentations via video calls",
      "Manage full sales cycle from lead to close",
      "Build and maintain strong customer relationships",
      "Negotiate contracts and close deals",
      "Provide accurate sales forecasts and pipeline reports",
      "Collaborate with customer success team for smooth handoffs",
    ],
    requirements: [
      "1-3 years of inside sales or B2B sales experience",
      "Proven track record of meeting or exceeding sales quotas",
      "Strong presentation and communication skills",
      "Experience with CRM systems (Salesforce, HubSpot)",
      "Ability to understand and articulate technical products",
      "Bachelor's degree preferred",
    ],
    benefits: [
      "Base salary plus performance-based commission",
      "Health, dental, vision insurance",
      "Remote work options",
      "Career advancement opportunities",
      "Annual performance bonuses",
      "Professional development budget",
    ],
    applyUrl: "https://forms.google.com/apply-inside-sales",
  },
  // Add more jobs here...
];

export default function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  
  const job = allJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
          <Button onClick={() => navigate("/careers")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/careers")}
          className="mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {job.department}
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {job.location}
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {job.type}
                </Badge>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    About the Role
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    Responsibilities
                  </h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    Benefits
                  </h2>
                  <ul className="space-y-2">
                    {job.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                Job Details
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                    Experience Level
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {job.experience}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                    Salary Range
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {job.salary}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                    Employment Type
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {job.type}
                  </p>
                </div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
                asChild
              >
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Questions? Email us at careers@rgiintelligence.com
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
