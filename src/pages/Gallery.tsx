import { useState } from "react";
import { X, ArrowUpRight, Search } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const images = [
  {
    id: 1,
    src: "/Infrastructure.jpg",
    alt: "Modern office space",
    label: "Headquarters",
    tag: "Infrastructure",
  },
  {
    id: 2,
    src: "/people.jpg",
    alt: "Team collaboration",
    label: "Our Team",
    tag: "People",
  },
  {
    id: 3,
    src: "/Research.jpg",
    alt: "Design studio",
    label: "R&D Lab",
    tag: "Research",
  },
  {
    id: 4,
    src: "/Machinery.jpg",
    alt: "Company event",
    label: "Agri Expo",
    tag: "Machinery",
  },
  {
    id: 5,
    src: "/Launch _Day.jpg",
    alt: "Product launch",
    label: "Launch Day",
    tag: "Milestones",
  },
  {
    id: 6,
    src: "/Community.jpg",
    alt: "Workshop session",
    label: "Farmer Workshop",
    tag: "Community",
  },
  {
    id: 7,
    src: "/Operations.jpg",
    alt: "Field visit",
    label: "Field Visit",
    tag: "Operations",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    alt: "Agriculture",
    label: "Crop Care",
    tag: "Agriculture",
  },
];

export default function CompanyGallery() {
  const [active, setActive] = useState<any>(null);
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tags = ["All", ...new Set(images.map((img) => img.tag))];

  const filtered = images.filter((img) => {
    const matchesTag = activeTag === "All" || img.tag === activeTag;
    const matchesSearch =
      img.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <Layout>
      <style>{`
        /* ── Masonry ── */
        .g-masonry {
          columns: 3;
          column-gap: 24px;
        }
        @media (max-width: 900px) { .g-masonry { columns: 2; } }
        @media (max-width: 560px) { .g-masonry { columns: 1; } }

        .g-item {
          break-inside: avoid;
          margin-bottom: 24px;
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          background: hsl(var(--secondary));
        }
        .g-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .g-item:hover img { transform: scale(1.05); }

        /* shared overlay style used by both card and lightbox */
        .g-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
          display: flex; flex-direction: column; justify-content: flex-end; padding: 16px;
          border-radius: 12px;
        }
        .g-item:hover .g-overlay { opacity: 1; }

        .g-tag-pill {
          display: inline-block;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 999px;
          margin-bottom: 8px; width: fit-content;
        }
        .g-bottom { display: flex; align-items: flex-end; justify-content: space-between; }
        .g-label {
          font-size: 15px; font-weight: 700; color: #fff;
          transform: translateY(5px); transition: transform 0.3s ease;
        }
        .g-item:hover .g-label { transform: translateY(0); }
        .g-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center; color: #fff;
          opacity: 0; transform: scale(0.75); transition: all 0.3s ease; flex-shrink: 0;
        }
        .g-item:hover .g-arrow { opacity: 1; transform: scale(1); }

        /* ── Lightbox ── */
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.85);
          display: flex; align-items: center; justify-content: center; padding: 24px;
          backdrop-filter: blur(6px);
          animation: lbFade 0.2s ease;
        }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }

        /* card is just the image + overlay, no separate footer */
        .lb-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          max-width: 860px;
          width: 100%;
          animation: lbUp 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          background: hsl(var(--secondary));
        }
        @keyframes lbUp {
          from { transform: translateY(16px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0) scale(1);       opacity: 1; }
        }

        .lb-img {
          width: 100%;
          height: auto;
          max-height: calc(100vh - 80px);
          object-fit: contain;
          display: block;
        }

        /* overlay permanently visible in lightbox, larger text */
        .lb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 50%);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 24px;
          pointer-events: none;
        }

        .lb-tag-pill {
          display: inline-block;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
          margin-bottom: 10px; width: fit-content;
        }

        .lb-bottom {
          display: flex; align-items: flex-end; justify-content: space-between;
        }

        .lb-label {
          font-size: 22px; font-weight: 700; color: #fff;
        }

        /* close button sits top-right, pointer-events on */
        .lb-close {
          position: absolute; top: 14px; right: 14px;
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          pointer-events: auto;
        }
        .lb-close:hover {
          background: hsl(var(--primary));
          border-color: hsl(var(--primary));
        }
      `}</style>

      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Company Gallery
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A glimpse into our people, research, and impact across agriculture.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="section-container py-4 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding">
        <div className="section-container">
          <p className="text-muted-foreground mb-8">
            Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No images found in this category.
            </div>
          ) : (
            <div className="g-masonry">
              {filtered.map((img) => (
                <div key={img.id} className="g-item" onClick={() => setActive(img)}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="g-overlay">
                    <div className="g-tag-pill">{img.tag}</div>
                    <div className="g-bottom">
                      <div className="g-label">{img.label}</div>
                      <div className="g-arrow"><ArrowUpRight size={15} /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div className="lb-backdrop" onClick={() => setActive(null)}>
          <div className="lb-card" onClick={(e) => e.stopPropagation()}>
            <img className="lb-img" src={active.src} alt={active.alt} />

            {/* same gradient overlay as the card, always visible */}
            <div className="lb-overlay">
              <div className="lb-tag-pill">{active.tag}</div>
              <div className="lb-bottom">
                <div className="lb-label">{active.label}</div>
              </div>
            </div>

            {/* close button top-right */}
            <button className="lb-close" onClick={() => setActive(null)}>
              <X size={17} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}