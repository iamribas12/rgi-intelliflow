import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="p-6 sm:p-8 space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when using our services or contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Information Sharing
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Data Security
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us at contact@rgiintelligence.com to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                6. Cookies
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Changes to This Policy
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                8. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy, please contact us at:
                <br />
                Email: contact@rgiintelligence.com
                <br />
                Phone: +91 7439707204
              </p>
            </section>
          </Card>
        </div>
      </div>
    </main>
  );
}
