import { TrendingUp, Users, Target, Award, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import director1 from "@/assets/team/director-1.jpg";
import coDirector1 from "@/assets/team/co-director-1.jpg";
import nationalManager from "@/assets/team/national-manager.jpg";

const About = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "150+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "50+",
      label: "Expert Team Members",
    },
    {
      icon: Target,
      value: "8",
      label: "Core Services",
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      designation: "Director & CEO",
      role: "Director",
      image: director1,
      email: "rajesh.kumar@rgiintelligence.com",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      bio: "With over 15 years of experience in AI and enterprise solutions, Rajesh leads RGI Intelligence's vision to empower businesses through intelligent automation.",
    },
    {
      name: "Priya Sharma",
      designation: "Co-Director & COO",
      role: "Co-Director",
      image: coDirector1,
      email: "priya.sharma@rgiintelligence.com",
      linkedin: "https://linkedin.com/in/priyasharma",
      bio: "Priya brings 12+ years of operational excellence and strategic planning, ensuring seamless delivery of innovative technology solutions to our clients.",
    },
    {
      name: "Vikram Singh",
      designation: "National Manager",
      role: "National Manager",
      image: nationalManager,
      email: "vikram.singh@rgiintelligence.com",
      linkedin: "https://linkedin.com/in/vikramsingh",
      bio: "Vikram manages nationwide operations and client relationships, with expertise in scaling technology services across diverse industries.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">RGI Intelligence</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of intelligent business solutions
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 lg:p-12 mb-12 shadow-card hover:shadow-hover transition-all animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At RGI Intelligence, we believe that every business deserves
                  access to cutting-edge technology. Our mission is to empower
                  organizations with AI-driven automation, intelligent software
                  development, and custom solutions that drive real results.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We combine deep technical expertise with a passion for
                  innovation to deliver scalable, future-ready solutions that
                  transform how businesses operate.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  To be the trusted partner for businesses seeking to harness
                  the power of artificial intelligence and automation in their
                  digital transformation journey.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We envision a world where intelligent systems work seamlessly
                  alongside human expertise, creating unprecedented efficiency
                  and innovation.
                </p>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-card hover:shadow-hover transition-all hover:scale-105 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Leadership Team Section */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Meet Our <span className="text-primary">Leadership</span>
            </h3>

            {/* Desktop View - Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-card hover:shadow-hover transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.designation}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile View - Swipeable Carousel */}
            <div className="md:hidden">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {team.map((member, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden shadow-card">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                            <p className="text-sm opacity-90">{member.designation}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {member.bio}
                          </p>
                          <div className="flex gap-3">
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                              aria-label="Email"
                            >
                              <Mail className="w-4 h-4 text-primary" />
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="w-4 h-4 text-primary" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
