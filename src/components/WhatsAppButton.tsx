import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about your services."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Popup Message */}
        {isOpen && (
          <div className="bg-card border border-border shadow-hover rounded-lg p-4 max-w-xs animate-scale-in">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-semibold text-foreground">
                Chat with us!
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Have questions? We're here to help! Click below to start a conversation.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Start Chat
            </button>
          </div>
        )}

        {/* WhatsApp Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#22c55e] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
