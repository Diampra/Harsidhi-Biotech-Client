import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TrendingUp, Truck, HeadphonesIcon, Store, Award, Users, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const benefits = [
  { icon: TrendingUp, title: "High Margins", description: "Attractive profit margins on all products" },
  { icon: Truck, title: "Fast Delivery", description: "Efficient logistics across all locations" },
  { icon: HeadphonesIcon, title: "24/7 Support", description: "Dedicated dealer support team" },
  { icon: Store, title: "Marketing Aid", description: "POS materials and promotional support" },
  { icon: Award, title: "Training", description: "Regular product and sales training" },
  { icon: Users, title: "Exclusive Area", description: "Protected territory rights" },
];

const stats = [
  { value: "5,000+", label: "Active Dealers" },
  { value: "28", label: "States Covered" },
  { value: "₹5L+", label: "Avg. Monthly Revenue" },
  { value: "98%", label: "Dealer Satisfaction" },
];

const Dealers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! Our team will contact you within 24 hours.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Become a Dealer</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Partner with India's trusted fertilizer brand and grow your agri-business
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dealer Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our growing network and access exclusive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="product-card flex gap-4">
                <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map & Form */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Coverage */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We have a strong dealer network across India, with dedicated support teams in every region.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "North Zone: Punjab, Haryana, UP, Uttarakhand, HP, J&K",
                  "South Zone: AP, Telangana, Karnataka, Tamil Nadu, Kerala",
                  "West Zone: Maharashtra, Gujarat, Rajasthan, MP, Goa",
                  "East Zone: Bihar, Jharkhand, WB, Odisha, Assam, NE States",
                ].map((zone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{zone}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-4">Eligibility Criteria</h3>
                <ul className="space-y-2">
                  {[
                    "Valid fertilizer/pesticide license",
                    "Godown/storage facility of min. 500 sq.ft",
                    "Experience in agri-input retail preferred",
                    "Working capital of minimum ₹5 lakhs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Apply for Dealership</h2>
                <p className="text-muted-foreground mb-6">Fill the form below and our team will contact you</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
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
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your state"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Experience in Agri Business</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Additional Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your business..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dealers;
