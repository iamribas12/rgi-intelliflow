import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVenture Inc.",
      company: "TechVenture Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "RGI Intelligence transformed our customer service operations with their custom AI chatbot. We've seen a 60% reduction in response time and our customer satisfaction scores have never been higher. The team's expertise in AI automation is truly exceptional.",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      text: "Working with RGI Intelligence on our enterprise workflow automation was a game-changer. They delivered a scalable solution that integrated seamlessly with our existing systems. Their technical proficiency and commitment to excellence is outstanding.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalRetail",
      company: "GlobalRetail",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      text: "The business intelligence dashboard RGI Intelligence built for us has revolutionized how we make decisions. Real-time insights, beautiful visualizations, and predictive analytics - all in one platform. Highly recommend their services!",
    },
    {
      name: "David Park",
      role: "Founder, InnovateLabs",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      text: "From concept to deployment, RGI Intelligence exceeded our expectations. Their web development team created a stunning, high-performance application that perfectly captured our vision. Professional, responsive, and results-driven.",
    },
    {
      name: "Jessica Martinez",
      role: "VP of Technology, FinServe Group",
      company: "FinServe Group",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      rating: 5,
      text: "Security and compliance were critical for our financial services platform. RGI Intelligence delivered a robust solution that not only met but exceeded industry standards. Their attention to detail and commitment to security is impressive.",
    },
    {
      name: "Robert Williams",
      role: "Managing Director, CloudFirst",
      company: "CloudFirst",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      rating: 5,
      text: "The cloud migration strategy and implementation by RGI Intelligence saved us time and money while improving our infrastructure's reliability. Their expertise in cloud consulting and IT support has been invaluable to our growth.",
    },
  ];

  const TestimonialCard = ({ testimonial }) => (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
      
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="font-bold text-foreground text-sm sm:text-base truncate">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base flex-grow">
        {testimonial.text}
      </p>
    </Card>
  );

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        {/* Mobile View - Carousel (1 item) */}
        <div className="md:hidden px-4">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Tablet View - Carousel (2 items) */}
        <div className="hidden md:block lg:hidden">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View - Carousel (3 items) */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;