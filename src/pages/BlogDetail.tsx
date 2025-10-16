import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id.toString() === blogId);

  if (!post) {
    return (
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-6 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mb-6">
          <Badge className="mb-4 text-xs sm:text-sm">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <span>By RGI Intelligence</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
