import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen min-h-screen flex items-center justify-center pt-16 overflow-x-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-screen h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                Next-Gen Technology
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
            Empowering Businesses with{" "}
            <span className="text-accent">AI</span>,{" "}
            <span className="text-accent">Automation</span> &{" "}
            <span className="text-accent">Intelligent Development</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
            We provide web, app, and software development along with AI
            automation and custom AI agents to transform business workflows
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center pt-2 px-2">
            <Button
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-xl shadow-lg"
            >
              <a href="#services" className="inline-flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-xl"
            >
              <a href="#contact" className="inline-flex items-center justify-center">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;