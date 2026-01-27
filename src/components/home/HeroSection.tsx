import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Trusted by 50,000+ Farmers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Grow More,
              <br />
              <span className="text-accent">Harvest Better</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Premium quality fertilizers and agricultural inputs to boost your crop yield and improve soil health. Backed by 40+ years of research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="xl" variant="hero">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  <Play className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">40+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/70">Product Range</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">28</p>
                <p className="text-sm text-primary-foreground/70">States Covered</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-foreground/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop"
                alt="Healthy green crops in farm field"
                className="w-full h-full object-cover rounded-3xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+35%</p>
                    <p className="text-sm text-muted-foreground">Avg. Yield Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
