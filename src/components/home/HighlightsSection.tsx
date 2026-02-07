import { Shield, FlaskConical, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Quality-Focused Manufacturing",
    description:
      "Controlled production processes supported by SCADA-based fermentation and in-house quality monitoring.",
  },
  {
    icon: FlaskConical,
    title: "Science-Based Products",
    description:
      "Biofertilizers and biostimulants developed using biological research and controlled formulation practices.",
  },
  {
    icon: Users,
    title: "Farmer-Oriented Approach",
    description:
      "Products designed to support soil health, crop nutrition, and sustainable agricultural practices.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Agriculture",
    description:
      "Biological inputs aimed at improving nutrient availability and long-term soil productivity.",
  },
];


export function HighlightsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground"
      //         style={{
      //   backgroundImage: "url('/highlights.jpg')",
      // }}
      >
              {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Harsidhi Biotech?
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            A science-driven agro-biotechnology manufacturer focused on quality,
            consistency, and sustainable agricultural solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="product-card text-center group"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
