import { Layout } from "@/components/layout/Layout";
import { Shield, Beaker, Award, CheckCircle2, Microscope, FileCheck } from "lucide-react";

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "FCO Certified", description: "Fertilizer Control Order" },
  { name: "BIS Marked", description: "Bureau of Indian Standards" },
  { name: "FSSAI Approved", description: "Food Safety Standards" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "OHSAS 18001", description: "Occupational Health & Safety" },
];

const processes = [
  {
    icon: Beaker,
    title: "Raw Material Testing",
    description: "Every batch of raw materials is tested for purity, nutrient content, and contaminants before processing",
  },
  {
    icon: Microscope,
    title: "In-Process Quality Control",
    description: "Continuous monitoring at every production stage ensures consistent product quality",
  },
  {
    icon: FileCheck,
    title: "Finished Product Analysis",
    description: "Final products undergo comprehensive testing in our NABL-accredited laboratory",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Independent QA team verifies compliance with all national and international standards",
  },
];

const Quality = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Quality & Research</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Committed to delivering the highest quality products through rigorous testing and continuous innovation
          </p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Harsidhi Biotech, quality is not just a standard—it's our foundation. Every product that leaves our facility is the result of meticulous research, rigorous testing, and unwavering commitment to farmer success.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our state-of-the-art laboratories and experienced scientists ensure that every fertilizer meets the exact specifications promised on the label, giving farmers confidence in every application.
              </p>
              
              <div className="space-y-4">
                {["100% guaranteed nutrient content", "Third-party verified quality", "Consistent batch-to-batch quality", "Traceable from source to farm"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop"
                alt="Quality testing laboratory"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Quality Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-stage quality control ensures every product meets our exacting standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <div key={index} className="product-card text-center">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <process.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop"
                alt="Research and development"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Research & Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Science-Driven Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our dedicated R&D team of agronomists, soil scientists, and plant nutrition experts work continuously to develop innovative products that address the evolving needs of Indian agriculture.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="info-card text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Scientists & Researchers</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Field Trials Yearly</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-3xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Research Labs</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-3xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Patents Filed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Recognized and certified by leading national and international standards bodies
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-center"
              >
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-primary-foreground/70">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
