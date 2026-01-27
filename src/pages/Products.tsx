import { Layout } from "@/components/layout/Layout";
import { ProductModal } from "@/components/ProductModal";
import { products } from "@/data/product";
import { Leaf, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Organic",
  "Bio Fertilizer",
  "Micronutrient",
  "Growth Promoter",
  "Plant Protection",
  "Adjuvant",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Authentic range of biofertilizers, organic inputs and crop solutions
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="section-container py-4 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="section-container">
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} products
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="product-card group text-left"
              >
                <div className="aspect-square rounded-xl bg-secondary overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-1">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="h-4 w-4" />
                  {product.crops.slice(0, 3).join(", ")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Layout>
  );
};

export default Products;
