import { useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/product";
import { ProductModal } from "../ProductModal";

export function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Our most trusted fertilizers and agricultural inputs
            </p>
          </div>

          <Button asChild variant="outline">
            <a href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className="product-card group cursor-pointer"
            >
              <span className="badge-crop mb-4 inline-block">
                {product.category}
              </span>

              <div className="aspect-square rounded-xl bg-secondary overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4" />
                {product.crops.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  );
}
