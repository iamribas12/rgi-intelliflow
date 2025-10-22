interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHero = ({ title, description, backgroundImage, className = "" }: PageHeroProps) => {
  return (
    <section 
      className={`relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {description}
          </p>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;
