import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "NPK Supreme 19:19:19",
    category: "Complex Fertilizer",
    benefit: "Balanced nutrition for all crops",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop",
    badge: "Best Seller",
    nutrients: ["N 19%", "P 19%", "K 19%"],
    crops: ["Wheat", "Rice", "Cotton"],
  },
  {
    id: 2,
    name: "Krishi Organic Gold",
    category: "Organic Fertilizer",
    benefit: "100% organic soil enrichment",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&auto=format&fit=crop",
    badge: "Organic",
    nutrients: ["Organic Carbon", "Humic Acid"],
    crops: ["Vegetables", "Fruits"],
  },
  {
    id: 3,
    name: "Zinc Super Plus",
    category: "Micronutrient",
    benefit: "Corrects zinc deficiency fast",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&auto=format&fit=crop",
    badge: "Fast Acting",
    nutrients: ["Zn 33%", "S 15%"],
    crops: ["Rice", "Maize", "Wheat"],
  },
  {
    id: 4,
    name: "Bio-Potash Active",
    category: "Bio Fertilizer",
    benefit: "Natural potassium mobilizer",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&auto=format&fit=crop",
    badge: "Eco Friendly",
    nutrients: ["K Mobilizer", "Beneficial Microbes"],
    crops: ["All Crops"],
  },
];

export function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Our most trusted fertilizers and agricultural inputs for maximum crop yield
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card group"
            >
              {/* Badge */}
              <div className="mb-4">
                <span className="badge-crop">{product.badge}</span>
              </div>

              {/* Image */}
              <div className="aspect-square rounded-xl bg-secondary overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{product.benefit}</p>

              {/* Nutrients */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.nutrients.map((nutrient, idx) => (
                  <span key={idx} className="badge-nutrient">
                    {nutrient}
                  </span>
                ))}
              </div>

              {/* Crops */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4" />
                <span>{product.crops.join(", ")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
