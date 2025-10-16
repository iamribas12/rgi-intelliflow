import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="p-6 sm:p-8 space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By accessing and using RGI Intelligence's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. Services Description
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                RGI Intelligence provides technology consulting, software development, AI solutions, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. User Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in unauthorized access or disruptive activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                All content, software, and materials provided by RGI Intelligence are protected by intellectual property laws. Unless otherwise specified, all rights remain with RGI Intelligence.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Payment Terms
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with advance notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                6. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                RGI Intelligence shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                7. Confidentiality
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of business. This obligation survives termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                8. Termination
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Either party may terminate services with appropriate notice as specified in service agreements. RGI Intelligence reserves the right to terminate access for violations of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                9. Governing Law
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                10. Contact Information
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, contact us at:
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
