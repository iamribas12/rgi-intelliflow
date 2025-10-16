import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, CheckCircle2 } from "lucide-react";

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description:
        "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.",
    },
    {
      icon: Shield,
      title: "Compliance",
      description:
        "We maintain compliance with GDPR, CCPA, and industry-specific regulations to protect your data.",
    },
    {
      icon: Eye,
      title: "Access Control",
      description:
        "Multi-factor authentication and role-based access control ensure only authorized personnel access sensitive data.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description:
        "Our infrastructure is hosted on enterprise-grade cloud platforms with regular security audits and monitoring.",
    },
  ];

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Security & <span className="text-primary">Compliance</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Your security is our top priority. Learn how we protect your data and maintain the highest security standards.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Detailed Security Information */}
          <Card className="p-6 sm:p-8 space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Our Security Measures
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                At RGI Intelligence, we implement comprehensive security measures to protect your data and ensure business continuity:
              </p>
              <div className="space-y-3">
                {[
                  "24/7 security monitoring and incident response",
                  "Regular security audits and penetration testing",
                  "Secure software development lifecycle (SDLC)",
                  "Employee security training and background checks",
                  "Data backup and disaster recovery procedures",
                  "Network segmentation and intrusion detection systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Compliance & Certifications
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We adhere to international security standards and maintain compliance with various regulations including GDPR, CCPA, HIPAA (for healthcare projects), and PCI DSS (for payment processing). Our team stays updated with evolving security requirements to ensure your data remains protected.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Data Privacy
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe in transparency and give you control over your data. We never sell your personal information to third parties. Our data retention policies ensure information is kept only as long as necessary for business purposes or legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Incident Response
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In the unlikely event of a security incident, our incident response team follows established protocols to contain, investigate, and remediate the issue. We maintain transparent communication with affected parties and regulatory bodies as required.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Report a Security Issue
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you discover a security vulnerability or have security concerns, please contact our security team immediately at:
                <br />
                <span className="font-semibold">security@rgiintelligence.com</span>
                <br />
                <br />
                We take all security reports seriously and will respond promptly to investigate and address any issues.
              </p>
            </section>
          </Card>
        </div>
      </div>
    </main>
  );
}
