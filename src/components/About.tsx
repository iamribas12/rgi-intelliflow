import { TrendingUp, Users, Target, Award, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import director1 from "@/assets/team/director-1.jpg";
import coDirector1 from "@/assets/team/co-director-1.jpg";
import nationalManager from "@/assets/team/national-manager.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(easeOutQuart * numericValue));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, numericValue, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

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
      name: "Mohammed Rehan Firoz",
      designation: "Director & CEO",
      role: "Director",
      image: director1,
      email: "mohammed.firoz@rgiintelligence.com",
      linkedin: "https://www.linkedin.com/in/mohammad-rehan-firoz-318a722bb/",
      bio: "With over 1.5 years of experience in AI and enterprise solutions, leading RGI Intelligence's vision to empower businesses through intelligent automation.",
      expertise: ["AI Strategy", "Business Transformation", "Leadership"],
    },
    {
      name: "Mohammed Sabir Alam",
      designation: "Co-Director & COO",
      role: "Co-Director",
      image: coDirector1,
      email: "sabir.alam@rgiintelligence.com",
      linkedin: "https://www.linkedin.com/in/mohammad-sabir-alam-ba076337b/",
      bio: "Bringing operational excellence and strategic planning, ensuring seamless delivery of innovative technology solutions to our clients.",
      expertise: ["Operations", "Project Management", "Client Relations"],
    },
    {
      name: "Dahiru Abdul Gabdo",
      designation: "National Manager",
      role: "National Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "vikram.singh@rgiintelligence.com",
      linkedin: "https://www.linkedin.com/in/dahiru-abdul-gabdo-742425374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bio: "Managing nationwide operations and client relationships, with expertise in scaling technology services across diverse industries.",
      expertise: ["Operations", "Business Development", "Team Leadership"],
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">RGI Intelligence</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of intelligent business solutions
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-6 sm:p-8 lg:p-12 mb-12 shadow-lg hover:shadow-xl transition-all opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  At RGI Intelligence, we believe that every business deserves
                  access to cutting-edge technology. Our mission is to empower
                  organizations with AI-driven automation, intelligent software
                  development, and custom solutions that drive real results.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We combine deep technical expertise with a passion for
                  innovation to deliver scalable, future-ready solutions that
                  transform how businesses operate.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  To be the trusted partner for businesses seeking to harness
                  the power of artificial intelligence and automation in their
                  digital transformation journey.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We envision a world where intelligent systems work seamlessly
                  alongside human expertise, creating unprecedented efficiency
                  and innovation.
                </p>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 opacity-0 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  <AnimatedNumber value={stat.value} duration={2000} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Leadership Team Section */}
          <div className="opacity-0 animate-[slideUp_0.6s_ease-out_0.6s_forwards]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              Meet Our <span className="text-primary">Leadership</span>
            </h3>

            {/* Mobile View - Carousel (1 item) */}
            <div className="md:hidden">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {team.map((member, index) => (
                    <CarouselItem key={index} className="pl-2">
                      <Card className="overflow-hidden shadow-lg">
                        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {member.name}
                            </h4>
                            <p className="text-accent font-semibold text-sm">
                              {member.designation}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {member.bio}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-primary/10 text-primary text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center w-9 h-9 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                              aria-label="Email"
                            >
                              <Mail className="w-4 h-4 text-primary" />
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-9 h-9 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
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
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>

            {/* Tablet/Desktop View - Regular Grid */}
            <div className="hidden md:block space-y-8 lg:space-y-12">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`grid md:grid-cols-2 gap-0`}>
                    {/* Image - alternates position */}
                    <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'} flex items-center justify-center p-0`}>
                      <div className="relative w-full h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>
                    </div>

                    {/* Content - alternates position */}
                    <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} p-6 lg:p-8 flex flex-col justify-center`}>
                      <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary font-semibold text-sm lg:text-base mb-4">
                        {member.designation}
                      </p>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-primary/10 text-primary text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
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
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;