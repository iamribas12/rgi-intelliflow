import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import DiscountBanner from "@/components/DiscountBanner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  return (
    <>
      {/* <DiscountBanner /> */}
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      
      {/* Latest Blog Posts Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-5"></div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends and best practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card
                key={post.id}
                onClick={() => (window.location.href = `/blog/${post.id}`)}
                className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden h-44 sm:h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-xs sm:text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
