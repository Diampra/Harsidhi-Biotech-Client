import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const crops = [
  {
    id: "rice",
    name: "Rice (Paddy)",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&auto=format&fit=crop",
    description: "Complete nutrition solutions for high-yielding paddy cultivation",
    products: ["NPK 10:26:26", "Zinc Super Plus", "Silica Max"],
    tips: "Apply zinc at transplanting stage for better tillering",
  },
  {
    id: "wheat",
    name: "Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&auto=format&fit=crop",
    description: "Boost wheat yield with balanced NPK and micronutrients",
    products: ["NPK 12:32:16", "Urea Gold", "Sulphur 90"],
    tips: "Split nitrogen application for maximum efficiency",
  },
  {
    id: "cotton",
    name: "Cotton",
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=400&auto=format&fit=crop",
    description: "Comprehensive cotton nutrition for quality fiber production",
    products: ["NPK 19:19:19", "Boron Max", "Magnesium Sulphate"],
    tips: "Apply boron before flowering for better boll retention",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop",
    description: "Specialty fertilizers for high-value vegetable crops",
    products: ["WSF 19:19:19", "Calcium Nitrate", "Multi Micro Mix"],
    tips: "Use water-soluble fertilizers for quick nutrient uptake",
  },
  {
    id: "fruits",
    name: "Fruits & Orchards",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&auto=format&fit=crop",
    description: "Long-term nutrition programs for fruit trees",
    products: ["NPK 13:0:45", "Organic Gold", "Potash Schoenite"],
    tips: "Regular potassium application improves fruit quality",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    image: "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?w=400&auto=format&fit=crop",
    description: "High-yield sugarcane nutrition for sugar content",
    products: ["NPK 20:20:0", "SSP", "Sulphur Bentonite"],
    tips: "Apply organic manure during land preparation",
  },
  {
    id: "pulses",
    name: "Pulses & Legumes",
    image: "https://images.unsplash.com/photo-1515543904330-3ce69ea03f16?w=400&auto=format&fit=crop",
    description: "Bio-fertilizers and nutrients for pulse crops",
    products: ["Rhizo Plus", "DAP", "Molybdenum"],
    tips: "Use Rhizobium inoculants for nitrogen fixation",
  },
  {
    id: "oilseeds",
    name: "Oilseeds",
    image: "https://images.unsplash.com/photo-1595855759920-86ffd4a90e42?w=400&auto=format&fit=crop",
    description: "Maximize oil content with proper nutrition",
    products: ["NPK 10:26:26", "Boron Max", "Sulphur 90"],
    tips: "Sulphur and boron are critical for oil synthesis",
  },
];

const CropSolutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Crop Solutions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Tailored fertilizer recommendations for every major crop in India
          </p>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop) => (
              <div key={crop.id} className="product-card group">
                <div className="aspect-video rounded-xl bg-secondary overflow-hidden mb-4">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{crop.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{crop.description}</p>

                {/* Recommended Products */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    Recommended Products
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {crop.products.map((product, idx) => (
                      <span key={idx} className="badge-nutrient">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tip */}
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-xs font-medium text-primary mb-1">💡 Expert Tip</p>
                  <p className="text-xs text-muted-foreground">{crop.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Custom Recommendations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Our agronomists can provide personalized fertilizer plans based on your soil type and crop needs
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Talk to an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CropSolutions;
