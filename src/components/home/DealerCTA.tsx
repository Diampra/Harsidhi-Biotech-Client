import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Truck, HeadphonesIcon, TrendingUp } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "High profit margins" },
  { icon: Truck, text: "Fast delivery network" },
  { icon: HeadphonesIcon, text: "Dedicated support" },
  { icon: Store, text: "Marketing support" },
];

export function DealerCTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Partnership Opportunity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Become a Harsidhi Biotech Dealer
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our growing network of 5,000+ dealers across India. Get exclusive benefits, training, and support to grow your agri-business.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg">
                <Link to="/dealers">Apply for Dealership</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop"
                alt="Dealer partnership"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <p className="text-sm text-muted-foreground mb-1">Average Dealer</p>
                <p className="text-3xl font-bold text-primary">₹5L+</p>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
