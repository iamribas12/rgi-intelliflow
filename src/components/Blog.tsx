import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for efficiency.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "AI & Automation",
      date: "Mar 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable Web Applications in 2024",
      excerpt:
        "Best practices and modern approaches to developing web applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Development",
      date: "Mar 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Custom AI Agents: Transforming Customer Experience",
      excerpt:
        "Learn how custom AI agents are reshaping customer interactions and driving engagement across industries.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      category: "AI Solutions",
      date: "Mar 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Cloud Migration Strategies for Modern Enterprises",
      excerpt:
        "Essential strategies and considerations for successfully migrating your infrastructure to the cloud.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      category: "Cloud & Infrastructure",
      date: "Feb 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "Data-Driven Decision Making: A Complete Guide",
      excerpt:
        "Leverage data analytics and business intelligence to make informed decisions that drive growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Business Intelligence",
      date: "Feb 22, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices
            in technology
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
