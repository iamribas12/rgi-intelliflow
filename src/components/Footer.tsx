import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Careers", href: "#careers" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
      { name: "Support", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                RGI <span className="text-primary">Intelligence</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering businesses with AI, automation, and intelligent
              development solutions that drive innovation and growth.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@rgiintelligence.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@rgiintelligence.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} RGI Intelligence. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
