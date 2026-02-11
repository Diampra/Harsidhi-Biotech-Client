import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const phoneNumber = "919801239177"; 

  const whatsappMessage = `
New Inquiry from Website:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}
  `;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(url, "_blank");
};


  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            For product inquiries, dealer information, or general questions, feel free to
            get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info */}
<section className="py-12 bg-card border-b border-border">
  <div className="section-container">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Phone */}
      <div className="info-card flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Phone</h3>
          <p className="text-muted-foreground">97084-54755</p>
          <p className="text-muted-foreground">83406-58679</p>
          <p className="text-muted-foreground">98012-39177</p>
          <p className="text-muted-foreground">94710-06334</p>
        </div>
      </div>

      {/* Email */}
      <div className="info-card flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Email</h3>
          <a
            href="mailto:harsidhibiotech@gmail.com"
            className="block text-muted-foreground hover:text-primary"
          >
            harsidhibiotech@gmail.com
          </a>
          <a
            href="mailto:info@harsidhibiotech.com"
            className="block text-muted-foreground hover:text-primary"
          >
            info@harsidhibiotech.com
          </a>
        </div>
      </div>

      {/* Registered Office */}
      <div className="info-card flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Registered Office</h3>
          <p className="text-muted-foreground">
            Sonbarsa, Via-Harsidhi<br />
            East Champaran, Bihar<br />
            PIN - 845422
          </p>
        </div>
      </div>

      {/* Corporate Office */}
      <div className="info-card flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Corporate Office</h3>
          <p className="text-muted-foreground">
            A/18, Mauryalok Complex<br />
            Dakbunglow, Patna<br />
            Bihar - 800001
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will review your message and respond as
                appropriate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="dealer-inquiry">Dealer/Distributor Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map / Image */}
            <div>
              <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[400px] bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop"
                  alt="Farm fields"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      {/* <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Need Immediate Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Our agronomists are available to answer your crop nutrition questions
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:18001234567"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">1800-123-456</p>
                <p className="text-muted-foreground">Toll Free (India Only)</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;
