import { Layout } from "@/components/layout/Layout";
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


      {/* ================= TRAINING ================= */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Training Programs
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We conduct structured agricultural training programs designed to
              enhance technical capabilities, promote best farming practices,
              and build professional competencies across rural and institutional
              ecosystems.
            </p>

            <div className="space-y-4">
              {[
                "Farmer capacity building workshops",
                "Biofertilizer & organic input training",
                "Laboratory and technical skill training",
                "Online, onsite, and hybrid modules",
                "Entrepreneurship development initiatives",
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
      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80&auto=format&fit=crop"
      alt="Farmer training workshop session"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
      loading="lazy"
      decoding="async"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>

  <img
    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80&auto=format&fit=crop"
    alt="Agriculture workshop interaction"
    className="absolute top-0 left-0 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
    loading="lazy"
    decoding="async"
  />

  <img
    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop"
    alt="Agricultural technical training"
    className="absolute bottom-0 left-8 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
    loading="lazy"
    decoding="async"
  />
</div>


        </div>
      </section>

      {/* ================= CERTIFICATION ================= */}
      <section className="section-padding">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          {/* Collage */}
<div className="relative h-[500px]">
  <div className="w-[75%] h-full">
    <img
      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&auto=format&fit=crop"
      alt="Agricultural certification and audit process"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
      loading="lazy"
      decoding="async"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>

  <img
    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop"
    alt="Quality inspection documentation"
    className="absolute top-0 right-0 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
    loading="lazy"
    decoding="async"
  />

  <img
    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
    alt="Compliance audit discussion"
    className="absolute bottom-0 right-8 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
    loading="lazy"
    decoding="async"
  />
</div>


          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Certification Services
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our certification services validate quality, compliance,
              and adherence to recognized agricultural standards. We ensure
              transparent procedures that build trust and enhance market
              credibility.
            </p>

            <div className="space-y-4">
              {[
                "Quality and standards certification",
                "Inspection coordination",
                "Documentation and audit readiness",
                "Compliance verification",
                "Process transparency assurance",
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

    </Layout>
  );
};

export default Services;
