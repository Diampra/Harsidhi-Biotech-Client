import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Punjab",
    message:
      "Since using these fertilizers, my wheat yield has increased significantly. The quality is consistent and results are visible within weeks.",
    rating: 5,
  },
  {
    name: "Suresh Patil",
    location: "Maharashtra",
    message:
      "Very reliable products and great dealer support. My sugarcane crop has never looked healthier.",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    location: "Telangana",
    message:
      "I tried many brands before, but these products gave me the best results in cotton farming.",
    rating: 4,
  },
];

export function TestimonialSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Farmers Say About Us
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Real experiences from farmers across India who trust our products
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 relative"
            >
              <Quote className="h-8 w-8 text-accent mb-4 opacity-80" />

              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                “{item.message}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating
                        ? "text-accent fill-accent"
                        : "text-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-primary-foreground/20 pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-primary-foreground/60">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
