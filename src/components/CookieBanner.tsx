import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <Card className="container mx-auto max-w-4xl p-6 shadow-hover">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-2">
              We Value Your Privacy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking "Accept
              All", you consent to our use of cookies.{" "}
              <a href="#privacy" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Reject
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 md:flex-none"
            >
              Accept All
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
