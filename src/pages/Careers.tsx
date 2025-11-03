import Careers from "@/components/Careers";
import PageHero from "@/components/PageHero";
import heroCareers from "@/assets/hero-careers.jpg";

export default function CareersPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Join Our Team"
        description="Be part of an innovative team driving technological excellence"
        backgroundImage={heroCareers}
      />
      <Careers />
    </main>
  );
}
