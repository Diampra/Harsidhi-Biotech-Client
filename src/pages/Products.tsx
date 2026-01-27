import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Leaf, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "NPK Fertilizers", "Organic", "Micronutrients", "Bio Fertilizers", "Water Soluble"];

const products = [
  {
    id: 1,
    name: "NPK Supreme 19:19:19",
    category: "NPK Fertilizers",
    benefit: "Balanced nutrition for all growth stages",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop",
    nutrients: ["N 19%", "P 19%", "K 19%"],
    crops: ["Wheat", "Rice", "Cotton", "Maize"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "NPK Gold 10:26:26",
    category: "NPK Fertilizers",
    benefit: "Ideal for root development",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&auto=format&fit=crop",
    nutrients: ["N 10%", "P 26%", "K 26%"],
    crops: ["Vegetables", "Potato", "Onion"],
    badge: "Popular",
  },
  {
    id: 3,
    name: "Krishi Organic Gold",
    category: "Organic",
    benefit: "100% organic soil enrichment",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&auto=format&fit=crop",
    nutrients: ["Organic Carbon", "Humic Acid"],
    crops: ["Vegetables", "Fruits", "Spices"],
    badge: "Certified Organic",
  },
  {
    id: 4,
    name: "Vermicompost Premium",
    category: "Organic",
    benefit: "Natural soil conditioner",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&auto=format&fit=crop",
    nutrients: ["NPK", "Micronutrients", "Beneficial Microbes"],
    crops: ["All Crops"],
    badge: "Eco Friendly",
  },
  {
    id: 5,
    name: "Zinc Super Plus",
    category: "Micronutrients",
    benefit: "Corrects zinc deficiency fast",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop",
    nutrients: ["Zn 33%", "S 15%"],
    crops: ["Rice", "Maize", "Wheat"],
    badge: "Fast Acting",
  },
  {
    id: 6,
    name: "Boron Max 20",
    category: "Micronutrients",
    benefit: "Essential for flowering & fruit set",
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=400&auto=format&fit=crop",
    nutrients: ["B 20%"],
    crops: ["Cotton", "Groundnut", "Sunflower"],
    badge: "High Purity",
  },
  {
    id: 7,
    name: "Bio-Potash Active",
    category: "Bio Fertilizers",
    benefit: "Natural potassium mobilizer",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&auto=format&fit=crop",
    nutrients: ["K Mobilizer", "Beneficial Microbes"],
    crops: ["All Crops"],
    badge: "Bio Certified",
  },
  {
    id: 8,
    name: "Rhizo Plus",
    category: "Bio Fertilizers",
    benefit: "Enhanced nitrogen fixation",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop",
    nutrients: ["Rhizobium", "N Fixing Bacteria"],
    crops: ["Pulses", "Legumes", "Groundnut"],
    badge: "Premium",
  },
  {
    id: 9,
    name: "WSF 19:19:19",
    category: "Water Soluble",
    benefit: "Complete water-soluble nutrition",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop",
    nutrients: ["N 19%", "P 19%", "K 19%"],
    crops: ["Drip Irrigation", "Poly House", "Vegetables"],
    badge: "100% Soluble",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.benefit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Products</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Complete range of fertilizers and agricultural inputs for every crop need
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="section-container">
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} products
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
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
                  <span>{product.crops.slice(0, 3).join(", ")}</span>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View Details
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
