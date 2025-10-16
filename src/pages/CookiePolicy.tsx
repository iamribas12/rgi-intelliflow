import { Card } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="p-6 sm:p-8 space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                What Are Cookies?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Functionality Cookies
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                How to Manage Cookies
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                You can control and/or delete cookies as you wish. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                <li>Delete all cookies that are already on your computer</li>
                <li>Set most browsers to prevent cookies from being placed</li>
                <li>Use our cookie consent banner to manage your preferences</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
                Please note that if you choose to block cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Third-Party Cookies
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We may use third-party services that place cookies on your device. These services have their own privacy policies and cookie policies. We encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Updates to This Policy
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Please check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
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
