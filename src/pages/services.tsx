import Services from "@/components/Services";
import PageHero from "@/components/PageHero";
import heroServices from "@/assets/hero-services.jpg";

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs"
        backgroundImage={heroServices}
      />
      <Services />
    </main>
  );
}
