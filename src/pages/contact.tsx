import Contact from "@/components/Contact.tsx";
import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <PageHero 
        title="Get In Touch"
        description="Let's discuss how we can help transform your business"
        backgroundImage={heroContact}
      />
      <Contact />
    </main>
  );
}
