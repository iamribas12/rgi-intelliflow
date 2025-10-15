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
}

const Careers = () => {
  const allJobs: Job[] = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5+ Years",
      date: "2025-10-10",
      description:
        "Lead the development of cutting-edge AI solutions and work with machine learning models to solve complex business challenges.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3+ Years",
      date: "2025-09-25",
      description:
        "Build scalable web applications using modern frameworks and collaborate with cross-functional teams.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "2+ Years",
      date: "2025-09-15",
      description:
        "Manage cloud infrastructure, implement CI/CD pipelines, and ensure system reliability and security.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "2+ Years",
      date: "2025-08-30",
      description:
        "Create intuitive and engaging user experiences for our AI-powered applications and platforms.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hybrid",
      type: "Full-time",
      experience: "4+ Years",
      date: "2025-08-10",
      description:
        "Drive product strategy and roadmap for our enterprise AI solutions and automation platforms.",
      skills: ["Product Strategy", "Agile", "Stakeholder Management"],
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "3+ Years",
      date: "2025-07-15",
      description:
        "Analyze complex datasets, build predictive models, and deliver actionable business insights.",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
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
    .filter((job) =>
      filterType.length ? filterType.includes(job.type) : true
    )
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
  const departments = [
    "Artificial Intelligence",
    "Engineering",
    "Design",
    "Product",
    "Data & Analytics",
    "Infrastructure",
  ];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Contract", "Freelance"];
  const experienceLevels = ["Entry-level", "1-3 years", "3-5 years", "5+ years"];
  const locations = ["Remote", "Hybrid", "On-site"];

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
            Explore exciting opportunities and grow with us at the core of excellence.
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
                      if (e.target.checked) setFilterDept([...filterDept, dept]);
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
                      if (e.target.checked) setFilterType([...filterType, type]);
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
                      if (e.target.checked) setFilterLocation([...filterLocation, loc]);
                      else setFilterLocation(filterLocation.filter((l) => l !== loc));
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
                  <Button variant="ghost" onClick={() => setMobileFilterOpen(false)}>
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
                          if (e.target.checked) setFilterDept([...filterDept, dept]);
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
                          if (e.target.checked) setFilterType([...filterType, type]);
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
                          if (e.target.checked) setFilterLocation([...filterLocation, loc]);
                          else setFilterLocation(filterLocation.filter((l) => l !== loc));
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
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                          <p className="text-muted-foreground text-sm">{job.department}</p>
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
                            variant={searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase()) ? "destructive" : "secondary"}
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
                        <a href="#contact">Apply Now</a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="px-8">
            Load More Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
