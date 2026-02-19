import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "@/data/heroImages";

export function HeroSection() {
  const heroSlides = [
    {
      title: "Organic Growth Booster",
      subtitle: "Increase Yield Naturally",
      description:
        "Scientifically developed fertilizer that improves soil nutrients and enhances crop production.",
      image: "/assets/products/action-plus.jpg",
      stat: "+35%",
      statLabel: "Yield Increase",
    },
    {
      title: "Advanced Soil Conditioner",
      subtitle: "Restore Soil Health",
      description:
        "Improves soil structure and water retention for sustainable farming.",
      image: "/assets/products/bahubali-505.jpg",
      stat: "+40%",
      statLabel: "Soil Health Boost",
    },
    {
      title: "Premium Bio Fertilizer",
      subtitle: "100% Organic Certified",
      description:
        "Eco-friendly solution that promotes root development and crop strength.",
      image: "/assets/products/phosbac-p.jpg",
      stat: "100%",
      statLabel: "Organic Certified",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredProducts = heroImages.slice(0, 5);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const nextPage =
        (prevPage + newDirection + featuredProducts.length) %
        featuredProducts.length;

      return [nextPage, newDirection];
    });
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  // Auto Play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/highlights.jpg')" }}
    >
      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left text-white">
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/30 backdrop-blur-sm mb-6 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Trusted by 50,000+ Farmers
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Grow More,
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Harvest Better
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Premium quality fertilizers and agricultural inputs to boost
              crop yield and improve soil health. Backed by 13+ years of
              research.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="shadow-xl shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/30 transition-all">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-white/20 backdrop-blur-sm bg-white/10 text-white">
                <Link to="/contact">
                  <Play className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* PRODUCT SHOWCASE - REAL PRODUCTS + SWIPE */}
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center overflow-hidden">

              {/* Enhanced Glow Background with Pulse */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400/30 via-emerald-400/20 to-green-500/30 blur-3xl rounded-full" 
              />

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, info) => {
                    const swipe = info.offset.x + info.velocity.x;

                    if (swipe < -100) paginate(1);
                    else if (swipe > 100) paginate(-1);
                  }}
                  variants={{
                    enter: (direction) => ({
                      x: direction > 0 ? 300 : -300,
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction) => ({
                      x: direction > 0 ? -300 : 300,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 cursor-grab active:cursor-grabbing"
                >

                  {/* Product Image Wrapper */}
                  <div className="relative inline-block">

                    {/* Product Image */}
                    <div className="rounded-2xl overflow-hidden">

                    <motion.img
                      src={featuredProducts[page].image}
                      alt={featuredProducts[page].name}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="h-[220px] sm:h-[260px] lg:h-[340px] object-cover rounded-2xl drop-shadow-2xl"
                    />
                    </div>

                    {/* Enhanced Overlay Button */}
                    {/* <Link
                      to="/products"
                      className="absolute -bottom-7 left-1/2 -translate-x-1/2 
                                px-6 py-3 rounded-lg
                                bg-gradient-to-r from-green-500 to-emerald-500 backdrop-blur-md 
                                text-white text-sm font-semibold 
                                shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40
                                hover:scale-105 transition-all duration-300
                                border border-white/10"
                    >
                      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link> */}



                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Premium Navigation Arrows - Mobile & Tablet */}
              <button
                onClick={prevSlide}
                className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10
                          w-10 h-10 rounded-full
                          bg-white/10 backdrop-blur-md border border-white/20
                          flex items-center justify-center
                          hover:bg-white/20 hover:scale-110 transition-all duration-300
                          shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10
                          w-10 h-10 rounded-full
                          bg-white/10 backdrop-blur-md border border-white/20
                          flex items-center justify-center
                          hover:bg-white/20 hover:scale-110 transition-all duration-300
                          shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* PREMIUM HORIZONTAL THUMBNAIL CAROUSEL */}
              <div className="hidden lg:flex absolute -bottom-0 left-1/2 -translate-x-1/2 items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                {featuredProducts.map((product, index) => {
                  const isActive = index === page;
                  
                  return (
                    <button
                      key={product.id}
                      onClick={() => setPage([index, index > page ? 1 : -1])}
                      className="group relative"
                    >
                      {/* Thumbnail Container */}
                      <div className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "w-20 h-20 ring-2 ring-offset-2 ring-offset-transparent scale-110" 
                          : "w-16 h-16 opacity-50 hover:opacity-80 hover:scale-105"
                      }`}>
                        {/* Product Thumbnail */}
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain p-2 bg-white/10 backdrop-blur-sm"
                        />
                        
                        {/* Active Overlay Glow */}
                        {isActive && (
                          <motion.div
                            layoutId="thumbnailGlow"
                            className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        {/* Hover Border Effect */}
                        <div className={`absolute inset-0 border-2 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "border-green-400/60" 
                            : "border-transparent group-hover:border-white/30"
                        }`} />
                      </div>

                      {/* Product Name Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl whitespace-nowrap"
                      >
                        <span className="text-xs font-medium text-white">
                          {product.name}
                        </span>
                      </motion.div>

                      {/* Active Indicator Dot */}
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-green-400/50"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Enhanced Navigation Dots with Progress */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {/* Swipe Hint Text - Mobile Only */}
                <motion.span 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="lg:hidden text-xs text-white/60 mr-2 font-medium"
                >
                  Swipe
                </motion.span>

                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage([index, index > page ? 1 : -1])}
                    className="relative group"
                  >
                    {/* Dot Background */}
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === page
                          ? "w-8 bg-primary"
                          : "w-2 bg-white/30 group-hover:bg-white/50"
                      }`}
                    />
                    
                    {/* Active Dot Glow */}
                    {index === page && (
                      <motion.div
                        layoutId="dotGlow"
                        className="absolute inset-0 bg-green-400/30 blur-md rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Progress Bar for Active Dot */}
                    {index === page && isAutoPlaying && (
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-white/40 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        key={`progress-${page}`}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Product Counter Badge */}
              {/* <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-xl">
                <span className="text-xs font-semibold text-white">
                  {page + 1} / {featuredProducts.length}
                </span>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}