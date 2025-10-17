import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id.toString() === blogId);

  if (!post) {
    return (
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Article Not Found</h1>
          <Button onClick={() => navigate("/blog")} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/blog")} 
          className="mb-8 text-sm sm:text-base hover:text-primary group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Button>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <Badge className="absolute top-4 left-4 sm:top-6 sm:left-6 text-xs sm:text-sm px-3 py-1 bg-primary">
            {post.category}
          </Badge>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <Card className="p-4 sm:p-6 bg-secondary/50 border-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="font-medium">RGI Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-foreground prose-headings:mb-6
          prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
          prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:my-6 prose-ol:my-6
          prose-li:text-muted-foreground prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-primary 
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground
          prose-code:text-primary prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-secondary prose-pre:border prose-pre:border-border
          prose-img:rounded-xl prose-img:shadow-lg
        ">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer CTA */}
        <Card className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Let's discuss how we can help you leverage AI and automation to achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="text-sm sm:text-base">
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-sm sm:text-base">
                <a href="/blog">More Articles</a>
              </Button>
            </div>
          </div>
        </Card>
      </article>
    </main>
  );
};

export default BlogDetail;
