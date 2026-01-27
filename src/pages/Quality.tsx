import { Layout } from "@/components/layout/Layout";
import { Shield, Beaker, Award, CheckCircle2, Microscope, FileCheck } from "lucide-react";

const certifications = [
  {
    name: "Fertilizer Control Order (FCO)",
    description: "Manufacturing and products aligned with Government of India fertilizer regulations"
  },
  {
    name: "SCADA-Based Production",
    description: "Automated fermentation and controlled production environment"
  },
  {
    name: "In-House Laboratory",
    description: "Quality testing and monitoring within company laboratory facilities"
  },
  {
    name: "Standard Operating Procedures",
    description: "Defined manufacturing and quality control processes across production stages"
  },
  {
    name: "Batch Traceability",
    description: "Controlled documentation from raw materials to finished products"
  },
  {
    name: "Safe Handling Practices",
    description: "Operational safety and hygiene protocols within manufacturing units"
  },
];


const processes = [
  {
    icon: Beaker,
    title: "Raw Material Evaluation",
    description:
      "Raw materials are assessed before use to ensure suitability for biological production processes",
  },
  {
    icon: Microscope,
    title: "Process Monitoring",
    description:
      "SCADA-based systems monitor critical parameters during fermentation and production",
  },
  {
    icon: FileCheck,
    title: "Finished Product Testing",
    description:
      "Final products are tested in in-house laboratory facilities before packing and dispatch",
  },
  {
    icon: Shield,
    title: "Quality Compliance",
    description:
      "Manufacturing follows defined operating procedures and applicable regulatory guidelines",
  },
];


const Quality = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Quality & Research
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Quality-controlled manufacturing and science-based processes supporting
            reliable biofertilizers and biostimulants for sustainable agriculture.
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
                Commitment to Quality Manufacturing
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                At Harsidhi Biotech, quality is maintained through controlled manufacturing
                practices, standardized procedures, and continuous monitoring across
                production stages.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                The company operates SCADA-automated fermentation systems supported by
                laboratory testing to ensure consistency, stability, and compliance with
                applicable agricultural standards.
              </p>
              
              <div className="space-y-4">
                {[
  "Controlled fermentation and production processes",
  "In-house laboratory testing and monitoring",
  "Batch-wise production and documentation",
  "Compliance-oriented manufacturing practices",
].map((item, index) => (
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
                Science-Led Product Development
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Research and development at Harsidhi Biotech focuses on biological efficiency,
                microbial performance, and product stability under Indian agricultural
                conditions.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Product development is supported by laboratory evaluation, controlled
                fermentation trials, and field-level feedback to improve formulation
                reliability and consistency.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="info-card text-center">
                  <p className="text-2xl font-bold text-primary">SCADA</p>
                  <p className="text-sm text-muted-foreground">Automated Fermentation</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-2xl font-bold text-primary">In-House</p>
                  <p className="text-sm text-muted-foreground">Laboratory Testing</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-2xl font-bold text-primary">Controlled</p>
                  <p className="text-sm text-muted-foreground">Production Environment</p>
                </div>
                <div className="info-card text-center">
                  <p className="text-2xl font-bold text-primary">Biological</p>
                  <p className="text-sm text-muted-foreground">Input Development</p>
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
              Standards & Compliance
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Manufacturing practices aligned with regulatory guidelines and controlled
              production standards.
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
