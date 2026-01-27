// src/components/products/ProductModal.tsx
import { X, Leaf, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  crops: string[];
  dosage: string;
  packSizes: string[];
};

type Props = {
  product: Product;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-background max-w-3xl w-full rounded-2xl shadow-xl relative overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="aspect-square rounded-xl bg-secondary overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="badge-crop mb-2 inline-block">
              {product.category}
            </span>

            <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
            <p className="text-muted-foreground mb-4">
              {product.description}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Leaf className="h-4 w-4 mt-1 text-primary" />
                <span>{product.crops.join(", ")}</span>
              </div>

              <div className="flex items-start gap-2">
                <Package className="h-4 w-4 mt-1 text-primary" />
                <span>
                  <strong>Dosage:</strong> {product.dosage}
                </span>
              </div>
            </div>

            {/* Pack Sizes */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.packSizes.map((size) => (
                <span key={size} className="badge-nutrient">
                  {size}
                </span>
              ))}
            </div>

            <Button className="mt-6 w-full">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
