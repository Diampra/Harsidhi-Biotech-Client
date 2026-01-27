import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Understanding NPK Ratios: A Farmer's Guide",
    excerpt: "Learn how to choose the right NPK fertilizer based on your crop needs and soil conditions",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop",
    category: "Fertilizer Basics",
    date: "Jan 10, 2024",
    author: "Dr. Ramesh Kumar",
  },
  {
    id: 2,
    title: "Soil Testing: Why Every Farmer Should Do It",
    excerpt: "Discover how soil testing can help you save money and improve crop yields significantly",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop",
    category: "Soil Health",
    date: "Jan 8, 2024",
    author: "Priya Sharma",
  },
  {
    id: 3,
    title: "Organic vs Chemical Fertilizers: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you decide what's best for your farm",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop",
    category: "Organic Farming",
    date: "Jan 5, 2024",
    author: "Dr. Suresh Patel",
  },
  {
    id: 4,
    title: "Micronutrient Deficiencies: Signs and Solutions",
    excerpt: "Identify common nutrient deficiencies in crops and learn how to correct them effectively",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&auto=format&fit=crop",
    category: "Crop Health",
    date: "Jan 2, 2024",
    author: "Dr. Anjali Rao",
  },
  {
    id: 5,
    title: "Water-Soluble Fertilizers: Application Best Practices",
    excerpt: "Maximize the benefits of fertigation with these expert tips and techniques",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&auto=format&fit=crop",
    category: "Application Tips",
    date: "Dec 28, 2023",
    author: "Vikram Singh",
  },
  {
    id: 6,
    title: "Sustainable Farming: Reducing Chemical Inputs",
    excerpt: "Practical strategies to farm more sustainably while maintaining profitability",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop",
    category: "Sustainability",
    date: "Dec 25, 2023",
    author: "Meena Kumari",
  },
];

const categories = ["All", "Fertilizer Basics", "Soil Health", "Crop Health", "Organic Farming", "Application Tips"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Knowledge Center</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Expert insights on fertilizers, crop nutrition, and farming best practices
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card border-b border-border py-4">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="product-card group">
                <div className="aspect-video rounded-xl bg-secondary overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <span className="badge-crop mb-3">{article.category}</span>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest farming tips and product updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
