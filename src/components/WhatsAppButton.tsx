import WhatsAppIcon from "@/assets/whatsapp.svg";

const WhatsAppButton = () => {
  const phoneNumber = "+919801239177"; 
  const message = "Hello, I would like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 p-1 rounded-full shadow-lg transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/assets/whatsapp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
