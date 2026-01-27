import { Award, Building2, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Farmers" },
  { icon: Building2, value: "5,000+", label: "Dealers Nationwide" },
  { icon: MapPin, value: "28", label: "States Covered" },
  { icon: Award, value: "15+", label: "Industry Awards" },
];

const certifications = [
  "ISO 9001:2015",
  "FCO Certified",
  "BIS Marked",
  "FSSAI Approved",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Across India
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of farmers who have improved their crop yield with our quality products
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
              <stat.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
              <p className="text-3xl md:text-4xl font-extrabold text-accent mb-2">{stat.value}</p>
              <p className="text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-sm font-medium text-primary-foreground/70 mb-6 uppercase tracking-wider">
            Our Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
