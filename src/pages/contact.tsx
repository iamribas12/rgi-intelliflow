import Contact from "@/components/Contact.tsx";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Get In Touch"
        description="Let's discuss how we can help transform your business"
      />
      <Contact />
    </main>
  );
}
