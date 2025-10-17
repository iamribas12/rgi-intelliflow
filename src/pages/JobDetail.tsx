import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowLeft, ExternalLink, DollarSign, Users, Award } from "lucide-react";

const allJobs = [
  {
    id: "sales-development-representative-sdr",
    title: "Sales Development Representative (SDR)",
    department: "Sales & Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "Entry-level",
    salary: "$40,000 - $60,000",
    vacancies: 5,
    keySkills: ["Lead Generation", "Cold Calling", "Email Outreach", "CRM (Salesforce/HubSpot)", "Communication", "Prospecting", "Time Management", "Research Skills"],
    description: "We're looking for a motivated Sales Development Representative to join our growing sales team. You'll be responsible for identifying and qualifying potential customers, setting up meetings for our Account Executives, and helping us expand our customer base.",
    responsibilities: ["Generate qualified leads through outbound prospecting (cold calling, emails, LinkedIn)", "Research and identify decision-makers within target companies", "Qualify inbound leads and schedule meetings for Account Executives", "Maintain accurate records in CRM (Salesforce/HubSpot)", "Collaborate with marketing and sales teams to optimize lead generation strategies", "Meet or exceed monthly quotas for qualified opportunities", "Follow up with prospects to nurture relationships", "Participate in ongoing training and professional development"],
    requirements: ["Bachelor's degree or equivalent experience", "Excellent communication and interpersonal skills", "Strong desire to learn and grow in a sales career", "Comfortable with cold calling and rejection", "Basic understanding of CRM tools", "Self-motivated with a competitive spirit", "Ability to work independently and as part of a team", "Strong organizational and time management skills"],
    benefits: ["Competitive base salary plus uncapped commission", "Comprehensive health, dental, and vision insurance", "401(k) with company match", "Professional development and training programs", "Flexible work environment (remote/hybrid options)", "Generous PTO and paid holidays", "Career advancement opportunities", "Modern office amenities and team events"],
    applyUrl: "https://forms.google.com/apply-sdr",
  },
  {
    id: "inside-sales-representative",
    title: "Inside Sales Representative",
    department: "Sales & Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    salary: "$50,000 - $75,000",
    vacancies: 5,
    keySkills: ["Sales", "Communication", "CRM", "Negotiation", "Product Demos", "Pipeline Management", "Customer Relationship", "Closing Deals"],
    description: "Join our inside sales team to sell innovative solutions remotely. You'll manage the entire sales cycle from prospecting to closing, building strong relationships with customers through phone, email, and video conferencing.",
    responsibilities: ["Conduct product demonstrations and presentations via video calls", "Manage full sales cycle from lead to close", "Build and maintain strong customer relationships", "Negotiate contracts and close deals", "Provide accurate sales forecasts and pipeline reports", "Collaborate with customer success team for smooth handoffs", "Maintain detailed customer interaction records", "Stay updated on product knowledge and industry trends"],
    requirements: ["1-3 years of inside sales or B2B sales experience", "Proven track record of meeting or exceeding sales quotas", "Strong presentation and communication skills", "Experience with CRM systems (Salesforce, HubSpot)", "Ability to understand and articulate technical products", "Bachelor's degree preferred", "Excellent negotiation and closing skills", "Self-starter with strong work ethic"],
    benefits: ["Base salary plus performance-based commission", "Health, dental, vision insurance", "Remote work options", "Career advancement opportunities", "Annual performance bonuses", "Professional development budget", "Team outings and company events", "Latest technology and tools"],
    applyUrl: "https://forms.google.com/apply-inside-sales",
  },
];

export default function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const job = allJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Job Not Found</h1>
          <Button onClick={() => navigate("/careers")} size="lg"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Button variant="ghost" onClick={() => navigate("/careers")} className="mb-6 text-sm sm:text-base hover:text-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />Back to Careers
        </Button>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                <Badge variant="secondary" className="text-xs sm:text-sm"><Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />{job.department}</Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm"><MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />{job.location}</Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm"><Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />{job.type}</Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm"><Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />{job.vacancies} openings</Badge>
              </div>
              <div><h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">About the Role</h2><p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{job.description}</p></div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2"><Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />Key Skills</h2>
              <div className="flex flex-wrap gap-2">{job.keySkills.map((skill, index) => (<Badge key={index} variant="outline" className="text-xs sm:text-sm px-3 py-1">{skill}</Badge>))}</div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
              <ul className="space-y-3">{job.responsibilities.map((item, index) => (<li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span><span>{item}</span></li>))}</ul>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Qualifications & Requirements</h2>
              <ul className="space-y-3">{job.requirements.map((item, index) => (<li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span><span>{item}</span></li>))}</ul>
            </Card>

            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
              <ul className="grid sm:grid-cols-2 gap-3">{job.benefits.map((item, index) => (<li key={index} className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span className="text-primary text-lg">✓</span><span>{item}</span></li>))}</ul>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Job Details</h3>
                <div className="space-y-4">
                  <div><div className="flex items-center gap-2 text-muted-foreground mb-1"><Award className="w-4 h-4" /><p className="text-xs sm:text-sm">Experience Level</p></div><p className="text-sm sm:text-base font-semibold text-foreground ml-6">{job.experience}</p></div>
                  <div><div className="flex items-center gap-2 text-muted-foreground mb-1"><DollarSign className="w-4 h-4" /><p className="text-xs sm:text-sm">Salary Range</p></div><p className="text-sm sm:text-base font-semibold text-foreground ml-6">{job.salary}</p></div>
                  <div><div className="flex items-center gap-2 text-muted-foreground mb-1"><Clock className="w-4 h-4" /><p className="text-xs sm:text-sm">Employment Type</p></div><p className="text-sm sm:text-base font-semibold text-foreground ml-6">{job.type}</p></div>
                  <div><div className="flex items-center gap-2 text-muted-foreground mb-1"><Users className="w-4 h-4" /><p className="text-xs sm:text-sm">Open Positions</p></div><p className="text-sm sm:text-base font-semibold text-foreground ml-6">{job.vacancies} vacancies</p></div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base py-6" asChild>
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">Apply Now<ExternalLink className="w-4 h-4" /></a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">Questions? Email us at <br /><a href="mailto:careers@rgiintelligence.com" className="text-primary hover:underline">careers@rgiintelligence.com</a></p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
