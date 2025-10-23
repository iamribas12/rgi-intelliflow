import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "AI & Automation",
    "Development",
    "AI Solutions",
    "Cloud & Infrastructure",
    "Business Intelligence",
    "E-Commerce",
    "Education",
    "Entertainment",
    "Fashion",
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for efficiency.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "AI & Automation",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      author: "RGI Intelligence",
    },
    {
      title: "Building Scalable Web Applications in 2024",
      excerpt:
        "Best practices and modern approaches to developing web applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Development",
      date: "Mar 10, 2024",
      readTime: "7 min read",
      author: "RGI Intelligence",
    },
    {
      title: "Custom AI Agents: Transforming Customer Experience",
      excerpt:
        "Learn how custom AI agents are reshaping customer interactions and driving engagement across industries.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      category: "AI Solutions",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      author: "RGI Intelligence",
    },
    {
      title: "Cloud Migration Strategies for Modern Enterprises",
      excerpt:
        "Essential strategies and considerations for successfully migrating your infrastructure to the cloud.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      category: "Cloud & Infrastructure",
      date: "Feb 28, 2024",
      readTime: "8 min read",
      author: "RGI Intelligence",
    },
    {
      title: "Data-Driven Decision Making: A Complete Guide",
      excerpt:
        "Leverage data analytics and business intelligence to make informed decisions that drive growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Business Intelligence",
      date: "Feb 22, 2024",
      readTime: "6 min read",
      author: "RGI Intelligence",
    },
    {
      title: "E-Commerce Trends Shaping 2024",
      excerpt:
        "Explore the latest e-commerce innovations and strategies that are transforming online retail.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      category: "E-Commerce",
      date: "Feb 18, 2024",
      readTime: "5 min read",
      author: "RGI Intelligence",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollCategories = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll');
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-500 max-w-3xl mx-auto leading-relaxed px-4">
            Lean into our thoughts and perspectives on the future of work, remote culture and technology
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          {/* Category Filter with Scroll Buttons */}
          <div className="relative mb-6 sm:mb-8">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCategories('left')}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-card/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Categories Container */}
            <div
              id="category-scroll"
              className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-8 sm:px-12 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollCategories('right')}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-card/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-border"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-5 sm:py-6 text-sm sm:text-base rounded-xl border-2 border-border focus:border-primary transition-all shadow-sm hover:shadow-md bg-card/50 backdrop-blur-sm"
            />
          </div>

          {/* Results Count */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing <span className="font-bold text-primary">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold text-foreground">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer animate-slide-up border-2 border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold shadow-lg">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{post.author}</span>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-primary/10 transition-all"
                  >
                    <span className="font-semibold text-primary">Read More</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">No articles found</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;