import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Lead the development of cutting-edge AI solutions and work with machine learning models to solve complex business challenges.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Build scalable web applications using modern frameworks and collaborate with cross-functional teams.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description:
        "Manage cloud infrastructure, implement CI/CD pipelines, and ensure system reliability and security.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Create intuitive and engaging user experiences for our AI-powered applications and platforms.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Drive product strategy and roadmap for our enterprise AI solutions and automation platforms.",
      skills: ["Product Strategy", "Agile", "Stakeholder Management", "Analytics"],
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Analyze complex datasets, build predictive models, and deliver actionable business insights.",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
    },
  ];

  return (
    <section id="careers" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Our <span className="text-primary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team building the future of intelligent
            technology solutions
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {job.department}
                  </p>
                </div>
                <Badge className="bg-primary/10 text-primary">
                  {job.type}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.type}
                </div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="#contact">Apply Now</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 lg:p-12 text-center shadow-card max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Don't see a role that fits?
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            We're always looking for talented individuals. Send us your resume
            and let's explore opportunities together.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            asChild
          >
            <a href="#contact">Submit Your Resume</a>
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Careers;
