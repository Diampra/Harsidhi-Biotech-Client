import { Layout } from "@/components/layout/Layout";
import { Award, Beaker, Users, Target, Calendar, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2013",
    title: "Company Incorporated",
    description: "Harsidhi Biotech (India) Pvt. Ltd. was incorporated in April 2013 with seed capital from founding directors."
  },
  {
    year: "2015",
    title: "Fermentation Unit Inaugurated",
    description: "Ultra-modern fermentation unit inaugurated by Shri Nitish Kumar, Hon’ble Chief Minister of Bihar."
  },
  {
    year: "2015",
    title: "SCADA Automation",
    description: "Installed SCADA-based automated fermenters with advanced packing and laboratory facilities."
  },
  {
    year: "2016",
    title: "Largest Biofertilizer Unit",
    description: "Became the largest and most advanced biofertilizer unit in North India."
  },
  {
    year: "2020+",
    title: "Pan-India & Export Operations",
    description: "Expanded services across India with exports to nearby countries."
  },
];


const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To develop and manufacture reliable biofertilizers and biostimulants that improve soil health, crop productivity, and sustainable agriculture."
  },
  {
    icon: Award,
    title: "Vision",
    description:
      "To be a trusted agro-biotechnology manufacturer known for scientific innovation, quality production, and long-term agricultural impact."
  },
  {
    icon: Users,
    title: "Core Strength",
    description:
      "SCADA-based fermentation technology, advanced laboratories, experienced technical teams, and strong regional distribution."
  },
];



const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20 md:py-28">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Harsidhi Biotech
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Harsidhi Biotech (India) Pvt. Ltd. is an agro biotechnology company engaged in
            manufacturing biofertilizers, biostimulants, and beneficial microorganisms
            from its advanced production facility in Bihar, India.
          </p>
        </div>
      </section>
{/* ================= CHAIRMAN MESSAGE ================= */}
<section className="section-padding bg-secondary/30">
  <div className="section-container max-w-6xl">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Chairman's Message
      </h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-12 items-start">

      {/* Chairman Image */}
      <div className="lg:col-span-1 text-center">
        <img
          src="/assets/chairman.webp"
          alt="Shri Awadhesh Prasad Kushwaha"
          className="w-72 h-80 mx-auto object-cover rounded-2xl shadow-lg"
        />
        <h3 className="mt-6 text-xl font-bold text-foreground">
          Shri Awadhesh Prasad Kushwaha
        </h3>
        <p className="text-muted-foreground">
          Ex. Minister, Govt. of Bihar
        </p>
      </div>

      {/* Message Content */}
      <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">

        <p>
          India in true sense remains an agricultural economy and the mainstay
          of a majority of its population. Agriculture directly or indirectly
          employs the largest section of the workforce and feeds billions of
          people across the globe.
        </p>

        <p>
          With ever-changing global dynamics, environmental challenges, and
          climate change, the needs of agriculture are also evolving. The
          rising cost of fossil fuels has made chemical fertilizers a burden
          for growing economies. Moreover, excessive chemical use for crop
          productivity and protection has begun harming soil health and
          long-term sustainability.
        </p>

        <p>
          It is time we reform our agricultural practices and transition
          toward organic and biological solutions. Such measures will
          preserve soil fertility, protect beneficial microorganisms,
          and prevent irreversible damage to Mother Earth.
        </p>

        <p>
          Harsidhi Biotech (India) Pvt. Ltd. is an initiative in this
          direction. Having been an agriculturist for over five decades,
          I have witnessed firsthand the transformation in farming
          practices. With this experience and a strong vision, we aim
          to become a leading organic and biological agri-input
          manufacturer in the Indian subcontinent.
        </p>

        <p>
          Our mission remains a constant endeavor to deliver value
          through innovation, consistent quality control, and crop-
          specific solutions that are both soil-friendly and economically
          viable for farmers.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 text-lg font-semibold text-foreground">
          “ स्वस्थ मिट्टी, संपन्न किसान - तभी बढ़ेगा हिंदुस्तान ”
        </blockquote>

      </div>

    </div>

  </div>
</section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="section-container max-w-5xl">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Advanced Biological Solutions for Agriculture
            </h2>
            <p className="text-lg text-muted-foreground">
              Established in 2013, Harsidhi Biotech focuses on sustainable and
              science-driven agricultural inputs for Indian and global farming needs.
            </p>
          </div>

          <div className="grid gap-10">
            {/* Block 1 */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Manufacturing & Product Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Harsidhi Biotech operates a modern agro-biotechnology manufacturing
                facility at Harsidhi, East Champaran, Bihar. The company produces liquid
                and solid biofertilizers including Bio NPK, Phosphate Solubilizing
                Bacteria (PSB), Azospirillum, Potassium Mobilizing Bacteria (KMB),
                Rhizobium, and other beneficial microorganisms such as Trichoderma
                Viride, Bacillus Thuringiensis, Bacillus Polymyxa, Pseudomonas
                Fluorescens, and Verticillium Lecanii.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Biostimulants & Market Reach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                In addition to biofertilizers, the company manufactures and trades
                biostimulants including organic humic acid, seaweed extracts, and amino
                acid-based products. Operations are primarily focused in Eastern India,
                with supply and services extending across India and exports to nearby
                countries through its digital distribution channels.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Infrastructure & Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Incorporated in April 2013, Harsidhi Biotech established an ultra-modern
                fermentation unit with support from financial institutions and the
                Government of Bihar. Inaugurated in August 2015, the facility is equipped
                with advanced laboratories, and modern
                packaging systems. The manufacturing campus spans over 100,000 square
                feet with a built-up area exceeding 40,000 square feet.
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="info-card text-center">
              <p className="text-2xl font-bold text-primary">2013</p>
              <p className="text-sm text-muted-foreground">Incorporated</p>
            </div>
            <div className="info-card text-center">
              <p className="text-2xl font-bold text-primary">2015</p>
              <p className="text-sm text-muted-foreground">Fermentation Unit</p>
            </div>
            <div className="info-card text-center">
              <p className="text-2xl font-bold text-primary">100,000+</p>
              <p className="text-sm text-muted-foreground">Sq. Ft. Campus</p>
            </div>
            <div className="info-card text-center">
              <p className="text-2xl font-bold text-primary">SCADA</p>
              <p className="text-sm text-muted-foreground">Automated Systems</p>
            </div>
          </div> */}
        </div>
      </section>


      {/* Mission, Vision, Values */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="product-card">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">Key milestones in our growth story</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="info-card flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary mb-1">{milestone.year}</p>
                  <h3 className="font-bold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Farmers Trust Us
              </h2>
              <div className="space-y-4">
                {[
                  "In-house manufacturing with controlled fermentation processes",
                  // "SCADA-automated production for consistent quality",
                  "Wide range of biofertilizers and biostimulants",
                  "Modern laboratory and packaging infrastructure",
                  "Regional expertise with pan-India supply capability",
                  "Focus on sustainable and biological agricultural inputs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop"
                alt="Happy farmers in field"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
