import Services from "@/components/Services";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs"
      />
      <Services />
    </main>
  );
}
