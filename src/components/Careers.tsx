"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Clock, Search, X } from "lucide-react";

// Time formatting (real-time ago)
const timeAgo = (dateString: string) => {
  const postDate = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - postDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Posted today";
  if (days < 7) return `Posted ${days} day${days > 1 ? "s" : ""} ago`;
  if (days < 30) return `Posted ${Math.floor(days / 7)} week(s) ago`;
  return `Posted ${Math.floor(days / 30)} month(s) ago`;
};

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  date: string;
  description: string;
  skills: string[];
  vacancies: number;
}

const Careers = () => {
  const allJobs: Job[] = [
    // Sales Roles
    {
      title: "Sales Development Representative (SDR)",
      department: "Sales & Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "Entry-level",
      date: "2025-10-10",
      description:
        "Responsible for lead generation and qualifying potential customers through outreach, including cold calling and emails.",
      skills: ["Lead Generation", "CRM", "Communication", "Prospecting"],
      vacancies: 5,
    },
    {
      title: "Inside Sales Representative",
      department: "Sales & Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      date: "2025-10-08",
      description:
        "Sell products and services remotely using phone calls, emails, and video conferencing to engage with customers.",
      skills: ["Sales", "Communication", "CRM", "Negotiation"],
      vacancies: 5,
    },
    {
      title: "Account Executive (AE)",
      department: "Sales & Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-10-05",
      description:
        "Manages the entire sales cycle from prospecting to closing deals.",
      skills: ["Sales Strategy", "CRM", "Negotiation", "Presentation"],
      vacancies: 5,
    },
    {
      title: "Sales Engineer (Solutions Engineer)",
      department: "Sales & Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-10-03",
      description:
        "Technical specialist supporting the sales process by demonstrating product features and addressing technical questions.",
      skills: [
        "Technical Knowledge",
        "Product Demos",
        "Communication",
        "Problem Solving",
      ],
      vacancies: 5,
    },
    {
      title: "Account Manager",
      department: "Sales & Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-30",
      description:
        "Maintains and expands relationships with existing customers, focusing on repeat business.",
      skills: ["Account Management", "Customer Retention", "CRM", "Upselling"],
      vacancies: 5,
    },
    {
      title: "Customer Success Manager (CSM)",
      department: "Sales & Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-28",
      description:
        "Ensures customer satisfaction and loyalty by helping them get the most value out of the product.",
      skills: ["Customer Success", "Communication", "SaaS Knowledge", "CRM"],
      vacancies: 5,
    },

    // Marketing Roles
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "Entry-level",
      date: "2025-09-25",
      description:
        "Assists with various marketing activities such as content creation, social media, and market research.",
      skills: ["Marketing", "Social Media", "Content Creation", "Analytics"],
      vacancies: 5,
    },
    {
      title: "SEO Specialist",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      date: "2025-09-23",
      description:
        "Improves website ranking on search engines through technical optimization and content strategy.",
      skills: ["SEO", "Analytics", "Content Strategy", "Keyword Research"],
      vacancies: 5,
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-20",
      description:
        "Oversees the creation and distribution of all content including blogs, case studies, and videos.",
      skills: ["Content Marketing", "Writing", "Editing", "Strategy"],
      vacancies: 5,
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-18",
      description:
        "Develops positioning and messaging for specific products and drives customer adoption.",
      skills: [
        "Product Marketing",
        "Strategy",
        "Sales Enablement",
        "Market Research",
      ],
      vacancies: 5,
    },
    {
      title: "Demand Generation Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-15",
      description:
        "Plans and executes marketing campaigns designed to generate customer interest and qualified leads.",
      skills: [
        "Campaigns",
        "Lead Generation",
        "Marketing Automation",
        "Analytics",
      ],
      vacancies: 5,
    },
    {
      title: "Marketing Operations Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      date: "2025-09-12",
      description:
        "Manages tools, systems, and data that marketing teams use to track performance and automate processes.",
      skills: ["Marketing Operations", "Automation", "CRM", "Analytics"],
      vacancies: 5,
    },
    {
      title: "Sales Manager",
      department: "Sales & Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "5+ years",
      date: "2025-09-10",
      description:
        "Leads and mentors a team of sales professionals, overseeing performance and helping them achieve targets.",
      skills: ["Leadership", "Sales Strategy", "Mentorship", "CRM"],
      vacancies: 5,
    },
    {
      title: "Director of Marketing",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "5+ years",
      date: "2025-09-08",
      description:
        "Sets the overall marketing strategy and oversees the marketing team.",
      skills: ["Strategy", "Leadership", "Branding", "Campaign Management"],
      vacancies: 5,
    },
    {
      title: "Chief Marketing Officer (CMO)",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      experience: "10+ years",
      date: "2025-09-05",
      description:
        "C-level executive responsible for all marketing activities including brand strategy, communications, and campaigns.",
      skills: [
        "Leadership",
        "Brand Strategy",
        "Marketing Strategy",
        "Executive Management",
      ],
      vacancies: 5,
    },
  ];

  // Filter & Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterExp, setFilterExp] = useState<string[]>([]);
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState("latest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtering logic
  const filteredJobs = allJobs
    .filter((job) =>
      [job.title, job.department, ...job.skills]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((job) =>
      filterDept.length ? filterDept.includes(job.department) : true
    )
    .filter((job) => (filterType.length ? filterType.includes(job.type) : true))
    .filter((job) =>
      filterExp.length ? filterExp.includes(job.experience) : true
    )
    .filter((job) =>
      filterLocation.length ? filterLocation.includes(job.location) : true
    )
    .sort((a, b) =>
      filterDate === "latest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  // Filter options
  // Updated department list for filters
  const departments = [
    "Sales & Marketing",
    "Marketing",
    "Engineering",
    "Design",
    "Product",
    "Data & Analytics",
    "Infrastructure",
  ];

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
    "Freelance",
  ];
  const experienceLevels = [
    "Entry-level",
    "1-3 years",
    "3-5 years",
    "5+ years",
  ];
  const locations = ["Remote", "Hybrid", "On-site"];

  // Limit to first 10 jobs
  const displayedJobs = filteredJobs.slice(0, 10);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Careers at <span className="text-primary">RGI Intelligence</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-5"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore exciting opportunities and grow with us at the core of
            excellence.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="sm:hidden mb-6 flex justify-end">
          <Button onClick={() => setMobileFilterOpen(true)}>Filter</Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Desktop Aside Filters */}
          <aside className="hidden sm:flex flex-col w-64 gap-4 bg-card p-4 rounded-2xl shadow-md">
            <Input
              type="text"
              placeholder="Search by title, dept, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <div>
              <h4 className="font-semibold mb-2">Department</h4>
              {departments.map((dept) => (
                <label key={dept} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value={dept}
                    checked={filterDept.includes(dept)}
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilterDept([...filterDept, dept]);
                      else setFilterDept(filterDept.filter((d) => d !== dept));
                    }}
                  />
                  {dept}
                </label>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Job Type</h4>
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value={type}
                    checked={filterType.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilterType([...filterType, type]);
                      else setFilterType(filterType.filter((t) => t !== type));
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experience</h4>
              {experienceLevels.map((exp) => (
                <label key={exp} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value={exp}
                    checked={filterExp.includes(exp)}
                    onChange={(e) => {
                      if (e.target.checked) setFilterExp([...filterExp, exp]);
                      else setFilterExp(filterExp.filter((ex) => ex !== exp));
                    }}
                  />
                  {exp}
                </label>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              {locations.map((loc) => (
                <label key={loc} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value={loc}
                    checked={filterLocation.includes(loc)}
                    onChange={(e) => {
                      if (e.target.checked)
                        setFilterLocation([...filterLocation, loc]);
                      else
                        setFilterLocation(
                          filterLocation.filter((l) => l !== loc)
                        );
                    }}
                  />
                  {loc}
                </label>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Date</h4>
              <Select onValueChange={setFilterDate} defaultValue="latest">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          {mobileFilterOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-card w-80 h-full p-6 overflow-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    onClick={() => setMobileFilterOpen(false)}
                  >
                    <X />
                  </Button>
                </div>

                {/* Reuse same filter inputs for mobile */}
                <Input
                  type="text"
                  placeholder="Search by title, dept, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 mb-4"
                />
                <div>
                  <h4 className="font-semibold mb-2">Department</h4>
                  {departments.map((dept) => (
                    <label key={dept} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        value={dept}
                        checked={filterDept.includes(dept)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setFilterDept([...filterDept, dept]);
                          else
                            setFilterDept(filterDept.filter((d) => d !== dept));
                        }}
                      />
                      {dept}
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Job Type</h4>
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        value={type}
                        checked={filterType.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setFilterType([...filterType, type]);
                          else
                            setFilterType(filterType.filter((t) => t !== type));
                        }}
                      />
                      {type}
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Experience</h4>
                  {experienceLevels.map((exp) => (
                    <label key={exp} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        value={exp}
                        checked={filterExp.includes(exp)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setFilterExp([...filterExp, exp]);
                          else
                            setFilterExp(filterExp.filter((ex) => ex !== exp));
                        }}
                      />
                      {exp}
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  {locations.map((loc) => (
                    <label key={loc} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        value={loc}
                        checked={filterLocation.includes(loc)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setFilterLocation([...filterLocation, loc]);
                          else
                            setFilterLocation(
                              filterLocation.filter((l) => l !== loc)
                            );
                        }}
                      />
                      {loc}
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Date</h4>
                  <Select onValueChange={setFilterDate} defaultValue="latest">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort by Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Job List */}
          <motion.div className="flex-1 flex flex-col gap-6">
            <AnimatePresence>
              {displayedJobs.map((job) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    onClick={() => window.location.href = `/careers/${job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {job.department}
                          </p>
                        </div>
                        <Badge className="bg-primary/10 text-primary text-xs">
                          {job.type}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={
                              searchTerm &&
                              skill
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                                ? "destructive"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {timeAgo(job.date)}
                        </div>
                      </div>
                      <Button className="w-full">
                        <a href="#contact">See More</a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Results count */}
        {displayedJobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No jobs found matching your criteria.</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Showing {displayedJobs.length} of {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </section>
  );
};

export default Careers;
