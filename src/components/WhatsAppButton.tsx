import { X, Send, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";

// WhatsApp Official SVG Logo Component
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Changed to true for immediate visibility

  const whatsappNumber = "+917439707204";
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  const whatsappMessage = encodeURIComponent(
    `${greeting}! I saw your website and I’m interested in web development / digital services. Can we discuss my project?`
  );

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

  // Auto-show popup after 5 seconds on first visit
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("whatsapp-popup-seen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasNotification(false);
        sessionStorage.setItem("whatsapp-popup-seen", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
    setIsOpen(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main WhatsApp Button Container */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
        {/* Enhanced Popup Card */}
        {isOpen && (
          <div className="bg-gradient-to-br from-card to-card/95 border-2 border-[#25D366]/20 shadow-2xl rounded-2xl p-4 sm:p-5 w-[calc(100vw-2rem)] sm:w-80 max-w-sm animate-scale-in backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    Chat with us!
                  </h4>
                  <p className="text-xs text-[#25D366] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                    Typing a reply...
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-secondary rounded-full"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="bg-secondary/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3 leading-relaxed">
                👋 Hello! Have questions about our services? We're here to help!
              </p>

              {/* Features */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" />
                  <span>Quick response time</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" />
                  <span>Expert support team</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#22c55e] hover:to-[#1ea952] text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              Start WhatsApp Chat
            </button>

            {/* Privacy Note */}
            <p className="text-[9px] sm:text-[10px] text-muted-foreground text-center mt-2 sm:mt-3">
              We respect your privacy. Your conversation is secure.
            </p>
          </div>
        )}

        {/* Enhanced WhatsApp Icon Button - Now with Official Logo */}
        <button
          onClick={togglePopup}
          className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] hover:from-[#22c55e] hover:to-[#1ea952] text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Open WhatsApp chat"
        >
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

          {/* Notification Badge */}
          {hasNotification && (
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
              <span className="text-[9px] sm:text-[10px] font-bold text-white">
                1
              </span>
            </div>
          )}

          {/* WhatsApp Official Logo */}
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform" />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
        </button>

        {/* Tooltip on Hover - Hidden on Mobile */}
        {!isOpen && (
          <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs font-medium py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;
