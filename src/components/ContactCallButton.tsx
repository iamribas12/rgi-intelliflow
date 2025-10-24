import { X, Phone, Clock, Headphones } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ContactCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  const phoneNumber = "+917439707204";
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Auto-show popup after 5 seconds on first visit
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("call-popup-seen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasNotification(false);
        sessionStorage.setItem("call-popup-seen", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
    setIsOpen(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Contact Button Container */}
      <div 
        ref={containerRef}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-3 sm:gap-4"
      >
        {/* Enhanced Popup Card */}
        {isOpen && (
          <div className="bg-gradient-to-br from-card to-card/95 border-2 border-blue-500/20 shadow-2xl rounded-2xl p-4 sm:p-5 w-[calc(100vw-2rem)] sm:w-80 max-w-sm animate-scale-in backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    Contact Us
                  </h4>
                  <p className="text-xs text-blue-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-secondary rounded-full"
                aria-label="Close contact card"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="bg-secondary/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3 leading-relaxed">
                📞 {greeting}! Ready to discuss your project? Give us a call!
              </p>

              {/* Features */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                  <span>Available 9 AM - 9 PM</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                  <span>Expert consultation</span>
                </div>
              </div>

              {/* Phone Number Display */}
              <div className="mt-3 pt-3 border-t border-border/50">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-sm sm:text-base font-semibold text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCallClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
              Call Now
            </button>

            {/* Privacy Note */}
            <p className="text-[9px] sm:text-[10px] text-muted-foreground text-center mt-2 sm:mt-3">
              Free consultation. No obligations.
            </p>
          </div>
        )}

        {/* Enhanced Contact Icon Button */}
        <button
          onClick={togglePopup}
          className="relative bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Open contact card"
        >
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>

          {/* Notification Badge */}
          {hasNotification && (
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
              <span className="text-[9px] sm:text-[10px] font-bold text-white">
                !
              </span>
            </div>
          )}

          {/* Phone Icon */}
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
        </button>

        {/* Tooltip on Hover - Hidden on Mobile */}
        {!isOpen && (
          <div className="hidden sm:block absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs font-medium py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
              Call us now
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ContactCallButton;