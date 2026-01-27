import { Shield, FlaskConical, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO 9001 certified manufacturing with rigorous quality control at every step",
  },
  {
    icon: FlaskConical,
    title: "Research Backed",
    description: "Products developed through extensive field trials and soil research",
  },
  {
    icon: Users,
    title: "Farmer Trust",
    description: "Trusted by over 50,000 farmers across 28 Indian states",
  },
  {
    icon: TrendingUp,
    title: "Higher Yield",
    description: "Proven to increase crop yield by 25-40% across various crops",
  },
];

export function HighlightsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Harsidhi Biotech?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to helping Indian farmers achieve better yields through quality products and expert support
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
