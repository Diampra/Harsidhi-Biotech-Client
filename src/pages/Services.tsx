import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <Layout>

      {/* ================= HERO ================= */}
      <section className="hero-section py-20 md:py-28">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive agriculture-focused consultancy, training,
            certification, and organic compliance solutions designed to
            strengthen farming systems, enhance productivity, and promote
            sustainable agricultural growth.
          </p>
        </div>
      </section>

      {/* ================= CONSULTANCY ================= */}
{/* ================= CONSULTANCY ================= */}
<section className="section-padding">
  <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

    {/* Collage */}
    <div className="relative h-[500px]">
      <div className="w-[75%] h-full">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80&auto=format&fit=crop"
          alt="Agriculture consultant advising farmer in field"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <img
        src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80&auto=format&fit=crop"
        alt="Soil testing process in agriculture"
        className="absolute top-0 right-0 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
        loading="lazy"
        decoding="async"
      />

      <img
        src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80&auto=format&fit=crop"
        alt="Farm planning and crop discussion"
        className="absolute bottom-0 right-8 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Agriculture Consultancy
      </h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Our consultancy services provide scientific and technical guidance
        to farmers, agri-enterprises, and institutions. We focus on soil
        health management, crop productivity improvement, regulatory
        compliance, and sustainable agricultural practices.
      </p>

      <div className="space-y-4">
        {[
          "Crop & soil management advisory",
          "Agri-enterprise planning and scaling",
          "Regulatory compliance guidance",
          "Process optimization and yield enhancement",
          "Sustainable farming strategy development",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ================= ORGANIC CERTIFICATION ================= */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Organic Certification Support
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide end-to-end guidance for organic certification,
              assisting farmers, producer groups, processors, and exporters
              in meeting national and international organic standards.
            </p>

            <div className="space-y-4">
              {[
                "Organic documentation and compliance",
                "Inspection readiness preparation",
                "National and international standards support",
                "Export market compliance guidance",
                "Ongoing monitoring and advisory",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collage */}
          <div className="relative h-[500px]">
            <div className="w-[75%] h-full ml-auto">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80&auto=format&fit=crop"
                alt="Organic farming practices in field"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
                      
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80&auto=format&fit=crop"
              alt="Organic inspection process"
              className="absolute top-0 left-0 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
              loading="lazy"
              decoding="async"
            />
          
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&auto=format&fit=crop"
              alt="Fresh organic vegetables"
              className="absolute bottom-0 left-8 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
              loading="lazy"
              decoding="async"
            />
          </div>


        </div>
      </section>
{/* ================= TRAINING, INTERNSHIP & TISSUE CULTURE ================= */}
<section className="section-padding">
  <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

    {/* Image Collage */}
    <div className="relative h-[500px]">
      <div className="w-[75%] h-full">
        <img
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1400&q=80&auto=format&fit=crop"
          alt="Agriculture field training session"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>

      <img
        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80&auto=format&fit=crop"
          alt="Plant tissue culture laboratory"
          className="absolute top-0 right-0 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
          loading="lazy"
      />

      <img
        src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?w=600&q=80&auto=format&fit=crop"
          alt="Agriculture classroom training"
          className="absolute bottom-0 right-8 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
          loading="lazy"
      />
    </div>

    {/* Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Training, Internship & Tissue Culture Programs
      </h2>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        Our integrated training and internship programs are designed to provide
        practical agricultural knowledge along with advanced tissue culture
        techniques. We equip students, farmers, and agri-entrepreneurs with
        real-world exposure in modern farming, crop protection, soil health,
        and plant biotechnology practices.
      </p>

      <div className="space-y-4">
        {[
          "Hands-on field training in modern farming techniques",
          "Internship opportunities for agriculture students",
          "Plant tissue culture & micropropagation training",
          "Soil health management and crop nutrition guidance",
          "Certificate provided upon successful completion",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="mt-8">
        <Button>
          Apply for Program
        </Button>
      </div>

    </div>

  </div>
</section>



    </Layout>
  );
};

export default Services;
