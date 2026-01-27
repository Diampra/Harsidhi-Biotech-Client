import { Award, Building2, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "Farmer-Focused",
    label: "Agricultural Solutions",
  },
  {
    icon: Building2,
    value: "Manufacturing",
    label: "SCADA-Based Facility",
  },
  {
    icon: MapPin,
    value: "India",
    label: "Operational Presence",
  },
  {
    icon: Award,
    value: "Quality",
    label: "Process-Oriented Standards",
  },
];


const certifications = [
  "Fertilizer Control Order (FCO) Compliance",
  "SCADA-Automated Fermentation Systems",
  "In-House Quality Monitoring",
  "Defined Manufacturing SOPs",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Quality & Consistency
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A science-driven agro-biotechnology manufacturer focused on controlled
            production, quality monitoring, and sustainable agricultural inputs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <stat.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
              <p className="text-xl md:text-2xl font-extrabold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Standards */}
        <div className="text-center">
          <p className="text-sm font-medium text-primary-foreground/70 mb-6 uppercase tracking-wider">
            Standards & Compliance
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

