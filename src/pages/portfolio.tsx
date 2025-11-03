import Portfolio from "@/components/Portfolio";
import PageHero from "@/components/PageHero";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Our Portfolio"
        description="Discover our successful projects and innovative solutions"
        backgroundImage={heroPortfolio}
      />
      <Portfolio />
    </main>
  );
}
