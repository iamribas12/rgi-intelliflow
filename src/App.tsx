import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import BlogPage from "./pages/blog";
import CareersPage from "./pages/Careers";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";
import JobDetail from "./pages/JobDetail";
import JobApplicationForm from "./pages/JobApplicationForm";
import CaseStudy from "./pages/CaseStudy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Security from "./pages/Security";
import BlogDetail from "./pages/BlogDetail";
import Pricing from "./pages/Pricing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import IndustryTemplate from "./pages/industries/IndustryTemplate";
import ContactCallButton from "./components/ContactCallButton";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import AIAndAutomation from "./pages/services/AIAndAutomation";
import EmergingTech from "./pages/services/EmergingTech";
import DesignAndQuality from "./pages/services/DesignAndQuality";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<JobDetail />} />
          <Route path="/apply/:jobId" element={<JobApplicationForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-study/:caseId" element={<CaseStudy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/industries/:industry" element={<IndustryTemplate />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-automation" element={<AIAndAutomation />} />
          <Route path="/services/emerging-tech" element={<EmergingTech />} />
          <Route path="/services/design-quality" element={<DesignAndQuality />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieBanner />
        <ContactCallButton />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
