import { X, Sparkles } from "lucide-react";
import { useState } from "react";

const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white py-3 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">Limited Time Offer:</span> Get 20% off on all AI Automation Services this month! 
            <a href="#contact" className="ml-2 underline hover:no-underline">
              Contact us now
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
