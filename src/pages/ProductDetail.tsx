import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Leaf, Droplets, Calendar, CheckCircle2 } from "lucide-react";

const productData: Record<string, any> = {
  "1": {
    name: "NPK Supreme 19:19:19",
    category: "Complex Fertilizer",
    tagline: "Balanced nutrition for all growth stages",
    description: "NPK Supreme 19:19:19 is a premium water-soluble compound fertilizer containing equal proportions of Nitrogen, Phosphorus, and Potassium. It is suitable for all crops and all growth stages, providing balanced nutrition for healthy plant development.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
    badge: "Best Seller",
    benefits: [
      "Promotes balanced vegetative growth",
      "Enhances root development and flowering",
      "Improves overall plant health and vigor",
      "Increases crop yield by up to 30%",
      "Easy to apply through soil or foliar spray",
    ],
    composition: [
      { nutrient: "Nitrogen (N)", percentage: "19%" },
      { nutrient: "Phosphorus (P₂O₅)", percentage: "19%" },
      { nutrient: "Potassium (K₂O)", percentage: "19%" },
      { nutrient: "Water Soluble", percentage: "100%" },
    ],
    dosage: {
      soil: "50-100 kg per acre depending on crop",
      foliar: "3-5 grams per liter of water",
      drip: "2-3 kg per acre through drip system",
    },
    crops: ["Wheat", "Rice", "Cotton", "Maize", "Vegetables", "Fruits", "Sugarcane", "Pulses"],
    application: "Apply during planting, at 30 days after sowing, and during flowering stage. Can be applied through broadcasting, band placement, or fertigation.",
  },
};

// Default product for any ID not found
const defaultProduct = {
  name: "NPK Supreme 19:19:19",
  category: "Complex Fertilizer",
  tagline: "Balanced nutrition for all growth stages",
  description: "A premium fertilizer providing balanced nutrition for all crops. Developed through extensive research to meet the specific needs of Indian agriculture.",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
  badge: "Premium Quality",
  benefits: [
    "Promotes balanced vegetative growth",
    "Enhances root development and flowering",
    "Improves overall plant health and vigor",
    "Increases crop yield significantly",
    "Easy application methods",
  ],
  composition: [
    { nutrient: "Nitrogen (N)", percentage: "19%" },
    { nutrient: "Phosphorus (P₂O₅)", percentage: "19%" },
    { nutrient: "Potassium (K₂O)", percentage: "19%" },
  ],
  dosage: {
    soil: "50-100 kg per acre",
    foliar: "3-5 grams per liter",
    drip: "2-3 kg per acre",
  },
  crops: ["Wheat", "Rice", "Cotton", "Maize", "Vegetables", "Fruits"],
  application: "Apply during planting and growth stages as per agronomist recommendation.",
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id || "1"] || defaultProduct;

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary/30 py-4">
        <div className="section-container">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 badge-crop text-base px-4 py-2">
                {product.badge}
              </span>
            </div>

            {/* Info */}
            <div>
              <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{product.tagline}</p>
              <p className="text-foreground mb-8">{product.description}</p>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composition Table */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-foreground mb-6">Composition</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="table-composition">
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {product.composition.map((row: any, index: number) => (
                  <tr key={index}>
                    <td className="font-medium">{row.nutrient}</td>
                    <td className="text-primary font-bold">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dosage */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Dosage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="product-card">
              <Leaf className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Soil Application</h3>
              <p className="text-muted-foreground">{product.dosage.soil}</p>
            </div>
            <div className="product-card">
              <Droplets className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Foliar Spray</h3>
              <p className="text-muted-foreground">{product.dosage.foliar}</p>
            </div>
            <div className="product-card">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Drip Irrigation</h3>
              <p className="text-muted-foreground">{product.dosage.drip}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Crops */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <h2 className="text-2xl font-bold mb-6">Suitable Crops</h2>
          <div className="flex flex-wrap gap-3">
            {product.crops.map((crop: string, index: number) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 font-medium"
              >
                {crop}
              </span>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
            <h3 className="font-bold mb-2">Application Method</h3>
            <p className="text-primary-foreground/80">{product.application}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
