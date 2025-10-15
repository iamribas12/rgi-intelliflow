import Navigation from "@/components/Navigation";
import DiscountBanner from "@/components/DiscountBanner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DiscountBanner />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      {/* <Footer /> */}
      <CookieBanner />
    </div>
  );
};

export default Index;
