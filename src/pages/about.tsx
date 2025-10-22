import About from "@/components/About";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="About Us"
        description="Empowering businesses with innovative technology solutions"
      />
      <About />
    </main>
  );
}