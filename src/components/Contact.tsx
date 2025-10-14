import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Build Your Next{" "}
            <span className="text-primary">Intelligent Solution?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can transform your business with AI and
            automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-card animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                  <a
                    href="mailto:contact@rgiintelligence.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@rgiintelligence.com
                  </a>
                  <br />
                  <a
                    href="info.rgiintelligence.co.in@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info.rgiintelligence.co.in@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                  <a
                    href="tel:+917439707204"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7439707204
                  </a>
                  <br />
                  <a
                    href="tel:+917643860384"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7643860384
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Dhudwala Complex, E Wing, Jehangir Boman Behram Rd
                    <br />
                     RBI Staff Colony, Mumbai Central
                    <br />
                    Mumbai 400008, India
                  </p>
                </div>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a
                href="https://wa.me/917439707204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>

            {/* Google Maps */}
            <Card className="overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1584585081105!2d72.82027971091269!3d18.968608055260745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2891ec075b%3A0x732d00a93b94c931!2sDudhwala%20Complex%20E!5e0!3m2!1sen!2sin!4v1760475825829!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RGI Intelligence Location"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
