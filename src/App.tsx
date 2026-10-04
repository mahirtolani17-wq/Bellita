import React, { useEffect, useRef, useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageSquare, 
  ArrowRight,
  Menu
} from "lucide-react";

// ==========================================
// CONFIGURATION & DATA (Easy to Edit)
// ==========================================

const SALON_NAME = "BELLITA THE SALON";
const FOUNDER_NAME = "Our Creative Director";

const INSTAGRAM_URL = "https://www.instagram.com/bellita_the_salon?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";
const WHATSAPP_URL = "https://wa.me/919904455668";
const PHONE_NUMBER = "099044 55668";
const TEL_LINK = "tel:+919904455668";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bellita+The+Salon+Kudasan+Gandhinagar";

const IMAGES_CONFIG = {
  interior: [
    {
      id: "wFjyZdWY",
      url: "/interior-1.png",
      fallbackUrl: "https://i.ibb.co/C3DBpw7W/Screenshot-2026-10-04-at-6-42-13-PM.png",
      label: "Main Salon Space"
    },
    {
      id: "DfcW24Th",
      url: "/interior-2.png",
      fallbackUrl: "https://i.ibb.co/3m6dZ1Q2/Screenshot-2026-10-04-at-6-42-21-PM.png",
      label: "Wash & Backwash Area"
    },
    {
      id: "VYkGXSK4",
      url: "/interior-3.png",
      fallbackUrl: "https://i.ibb.co/F4d1GwPT/Screenshot-2026-10-04-at-6-42-27-PM.png",
      label: "Bespoke Styling Stations"
    },
    {
      id: "Y4FqhxRw",
      url: "/interior-4.png",
      fallbackUrl: "https://i.ibb.co/JWwMH9Bg/Screenshot-2026-10-04-at-6-42-34-PM.png",
      label: "Waiting & Retail Lounge"
    }
  ],
  work: [
    {
      id: "N27bsmQ9",
      url: "/work-1.png",
      fallbackUrl: "https://i.ibb.co/GQFN0tBW/Screenshot-2026-10-04-at-6-47-10-PM.png",
      label: "Signature Balayage & Blow"
    },
    {
      id: "5X8NrsVZ",
      url: "/work-2.png",
      fallbackUrl: "https://i.ibb.co/spw0Ksr7/Screenshot-2026-10-04-at-6-47-17-PM.png",
      label: "Wash & Scalp Massage Experience"
    },
    {
      id: "Tq0V8Lrb",
      url: "/work-3.png",
      fallbackUrl: "https://i.ibb.co/qFgts5xW/Screenshot-2026-10-04-at-6-47-25-PM.png",
      label: "Precision Scissor Cut"
    },
    {
      id: "twFgbpwj",
      url: "/work-4.png",
      fallbackUrl: "https://i.ibb.co/qLVKRYLq/Screenshot-2026-10-04-at-6-47-44-PM.png",
      label: "Perfected Curls & Dynamic Styling"
    },
    {
      id: "v40ZHwBY",
      url: "/work-5.png",
      fallbackUrl: "https://i.ibb.co/k2NQxHy1/Screenshot-2026-10-04-at-6-52-21-PM.png",
      label: "Men's Fade & Beard Grooming Craft"
    },
    {
      id: "wNPWWVHZ",
      url: "/work-6.png",
      fallbackUrl: "https://i.ibb.co/DDvCChXP/Screenshot-2026-10-04-at-6-52-32-PM.png",
      label: "Premium Salon Lounge Ambience"
    },
    {
      id: "Ngwd99P3",
      url: "/work-7.png",
      fallbackUrl: "https://i.ibb.co/HLmftts2/Screenshot-2026-10-04-at-6-52-42-PM.png",
      label: "High-Fidelity Waves and Texture"
    }
  ],
  owner: {
    id: "FqJgFPCf",
    url: "/owner.png",
    fallbackUrl: "https://i.ibb.co/3YWBnJQ8/Screenshot-2026-10-04-at-6-49-16-PM.png",
    label: "Creative Director & Founder"
  }
};

const SERVICES_DATA = {
  Hair: [
    { name: "Haircut with wash", price: "400" },
    { name: "Styling blow dry", price: "500" },
    { name: "Curls / Iron", price: "500" },
    { name: "Head massage with wash", price: "500" },
    { name: "Men's hair style", price: "150" },
    { name: "Beard craft", price: "150" }
  ],
  Colour: [
    { name: "Global Inoa", price: "600" },
    { name: "Highlight", price: "3,000" },
    { name: "Balayage", price: "3,500" }
  ],
  Treatments: [
    { name: "Deep conditioning", price: "1,700" },
    { name: "Bond strengthening", price: "1,700" },
    { name: "Frizz control", price: "1,700" },
    { name: "Length filler", price: "1,700" },
    { name: "Colour sealer", price: "1,700" },
    { name: "Men's scalp treatment", price: "1,500" },
    { name: "Deep nourishing", price: "2,000" }
  ],
  Texture: [
    { name: "Keratin", price: "1,500" },
    { name: "Protein treatment", price: "7,500" },
    { name: "Olio Shape (long)", price: "8,500" },
    { name: "Botox", price: "8,500" },
    { name: "Nanoplastia", price: "9,000" }
  ],
  Skin: [
    { name: "Detoxification", price: "1,000" },
    { name: "Clean-ups", price: "1,000" },
    { name: "Whitening classic facial", price: "1,300" },
    { name: "Anti-ageing classic facial", price: "1,500" },
    { name: "Classical Vitamin C facial", price: "2,000" },
    { name: "Seaweed advanced facial", price: "3,000" },
    { name: "Deep hydrating advanced radiant facial", price: "4,500" },
    { name: "Enhancing deep hydrating advanced facial", price: "6,000" },
    { name: "Power Mask", price: "700" },
    { name: "Collagene Mask", price: "1,100" }
  ],
  Waxing: [
    { name: "Underarms", price: "150" },
    { name: "Half arms", price: "300" },
    { name: "Full arms", price: "500" },
    { name: "Full legs", price: "500" },
    { name: "Full back", price: "550" },
    { name: "Bikini", price: "1,100" }
  ],
  Makeup: [
    { name: "Saree draping", price: "500" },
    { name: "Groom", price: "2,000" },
    { name: "Simple", price: "2,500" },
    { name: "2D makeup and hairstyle", price: "3,500" },
    { name: "HD makeup and hairstyle", price: "4,500" },
    { name: "Engagement", price: "8,000" },
    { name: "Reception", price: "8,000" },
    { name: "Bridal", price: "12,000" }
  ]
};

const REVIEWS = [
  {
    quote: "Nice service and haircut, now going to become a regular customer.",
    author: "Devang Patel"
  },
  {
    quote: "Good experience, very kind staff and fantastic services.",
    author: "Harsh Patel"
  },
  {
    quote: "Good all services: haircut, colour, pedicure. Good atmosphere.",
    author: "Samir Nayee"
  }
];

// ==========================================
// SAFEGUARDED COMPONENTS & HOOKS
// ==========================================

function SafeImage({
  src,
  fallbackSrc,
  alt,
  className,
  fallbackLabel,
  priority = false
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fallbackLabel: string;
  priority?: boolean;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <div className={`bg-neutral-900 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}>
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-2">IMAGE UNREACHABLE</span>
        <span className="text-sm font-light text-neutral-400">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
    />
  );
}

function GalleryImageItem({
  src,
  fallbackSrc,
  alt,
  photoNumber,
  className
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  photoNumber: number;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed || !currentSrc) {
    return (
      <div className={`bg-[#0A0A0A] border border-neutral-900 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}>
        <span className="text-3xl font-light text-neutral-600 font-mono tracking-wider">
          {String(photoNumber).padStart(2, "0")}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2 font-mono">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
      draggable={false}
    />
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const current = ref.current;
    
    try {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
      });

      if (current) {
        observer.observe(current);
      }
    } catch (e) {
      // Fallback if IntersectionObserver is unsupported
      setIsVisible(true);
    }

    return () => {
      if (observer && current) {
        try {
          observer.unobserve(current);
        } catch (_) {}
      }
    };
  }, []);

  const prefersReduced = useRef(false);
  useEffect(() => {
    try {
      prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {}
  }, []);

  if (prefersReduced.current) {
    return <div>{children}</div>;
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity"
      }}
    >
      {children}
    </div>
  );
}

// Simple Error Boundary Fallback Wrapper
class SafeComponent extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Component crashed caught by safe boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-neutral-950 text-neutral-500 py-12 text-center text-xs tracking-wider uppercase">
          Section error recovered
        </div>
      );
    }
    return this.props.children;
  }
}

// ==========================================
// MAIN APPLICATION
// ==========================================

export default function App() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const heroFixedRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  
  // Stages Ref for performance-oriented direct manipulation
  const stage0Ref = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);

  const [useFallback, setUseFallback] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isVideoLoadedRef = useRef(false);
  
  // Gallery states
  const [galleryTab, setGalleryTab] = useState<"space" | "work">("space");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryReady, setGalleryReady] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const galleryStageRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const lightboxPointerStartRef = useRef<number | null>(null);

  // Services states
  const [servicesTab, setServicesTab] = useState<keyof typeof SERVICES_DATA>("Hair");

  // Reviews states
  const [activeReview, setActiveReview] = useState(0);

  // Current active images
  const currentImages = galleryTab === "space" ? IMAGES_CONFIG.interior : IMAGES_CONFIG.work;

  // Background crossfade states (600ms crossfade between slides)
  const [bgCurrent, setBgCurrent] = useState(currentImages[0]?.url || "");
  const [bgPrev, setBgPrev] = useState<string | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);

  // Preload all 12 images up front and decode first image before rendering gallery
  useEffect(() => {
    let isMounted = true;
    const allImages = [...IMAGES_CONFIG.interior, ...IMAGES_CONFIG.work, IMAGES_CONFIG.owner];
    allImages.forEach(img => {
      const i = new Image();
      i.src = img.url;
    });

    const first = new Image();
    first.src = allImages[0].url;
    if (first.decode) {
      first.decode().then(() => {
        if (isMounted) setGalleryReady(true);
      }).catch(() => {
        if (isMounted) setGalleryReady(true);
      });
    } else {
      first.onload = () => {
        if (isMounted) setGalleryReady(true);
      };
      first.onerror = () => {
        if (isMounted) setGalleryReady(true);
      };
    }

    const timer = setTimeout(() => {
      if (isMounted) setGalleryReady(true);
    }, 450);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Gallery background crossfade (600ms) on slide change
  useEffect(() => {
    const newUrl = currentImages[activeIndex]?.url;
    if (newUrl && newUrl !== bgCurrent) {
      setBgPrev(bgCurrent);
      setBgCurrent(newUrl);
      setIsCrossfading(true);
      const timer = setTimeout(() => {
        setIsCrossfading(false);
        setBgPrev(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, currentImages, bgCurrent]);

  // 1. Touch/Scroll/Click Unlock for iOS Safari scrubbing
  useEffect(() => {
    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      const video = videoRef.current;
      if (video) {
        video.play().then(() => {
          video.pause();
        }).catch(() => {});
      }
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("click", unlock, { passive: true });
    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
    };
  }, []);

  // 2. Video fallback check (duration NaN or readyState < 2 after 2.5s, or reduced motion)
  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setUseFallback(true);
        return;
      }
    } catch (_) {}

    const timer = setTimeout(() => {
      const video = videoRef.current;
      if (!video || isNaN(video.duration) || video.duration === 0 || video.readyState < 2) {
        setUseFallback(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (useFallback && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [useFallback]);

  // 3. Performance-based Scroll Scrubbing via shared requestAnimationFrame Loop
  useEffect(() => {
    const targetProgressRef = { current: 0 };
    const currentProgressRef = { current: 0 };
    const videoCurrentTimeRef = { current: 0 };

    let latestScrollY = window.scrollY;
    let cachedRunwayHeight = runwayRef.current ? runwayRef.current.offsetHeight : window.innerHeight * 4.5;
    let cachedInnerHeight = window.innerHeight;

    const updateMeasurements = () => {
      if (runwayRef.current) {
        cachedRunwayHeight = runwayRef.current.offsetHeight;
      }
      cachedInnerHeight = window.innerHeight;
    };

    window.addEventListener("resize", updateMeasurements, { passive: true });

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      const maxScroll = cachedRunwayHeight - cachedInnerHeight;
      if (maxScroll > 0) {
        targetProgressRef.current = Math.max(0, Math.min(1, latestScrollY / maxScroll));
      }

      // Show mobile fixed bar after scroll exits hero runway
      if (latestScrollY >= cachedRunwayHeight - cachedInnerHeight - 50) {
        setShowMobileBar(true);
      } else {
        setShowMobileBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let rId: number;
    const updateLoop = () => {
      // Lerp progress with 0.12 factor
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.12;
      const p = currentProgressRef.current;

      // Video scrub: target = p * video.duration, current += (target - current) * 0.12, write if |change| > 0.03
      const video = videoRef.current;
      if (video && !useFallback) {
        if ((isVideoLoadedRef.current || video.readyState >= 1) && video.duration && !isNaN(video.duration) && video.duration > 0) {
          const targetTime = p * video.duration;
          videoCurrentTimeRef.current += (targetTime - videoCurrentTimeRef.current) * 0.12;
          if (Math.abs(video.currentTime - videoCurrentTimeRef.current) > 0.03) {
            video.currentTime = videoCurrentTimeRef.current;
          }
        }
      }

      // Hide fixed layer once next section covers it fully (scrollY reaches runway height)
      if (heroFixedRef.current) {
        if (latestScrollY >= cachedRunwayHeight) {
          heroFixedRef.current.style.opacity = "0";
          heroFixedRef.current.style.visibility = "hidden";
          heroFixedRef.current.style.pointerEvents = "none";
        } else {
          heroFixedRef.current.style.opacity = "1";
          heroFixedRef.current.style.visibility = "visible";
          heroFixedRef.current.style.pointerEvents = "auto";
        }
      }

      // Stage 0 (0 - 0.15): "BELLITA" wordmark + "The Salon · Kudasan, Gandhinagar"
      let opacity0 = 0;
      let translate0 = 0;
      if (p <= 0.15) {
        if (p <= 0.12) {
          opacity0 = 1;
          translate0 = 0;
        } else {
          const t = (p - 0.12) / 0.03;
          opacity0 = Math.max(0, 1 - t);
          translate0 = -24 * t;
        }
      }
      if (stage0Ref.current) {
        stage0Ref.current.style.opacity = opacity0.toString();
        stage0Ref.current.style.transform = `translate3d(0, ${translate0}px, 0)`;
        stage0Ref.current.style.pointerEvents = opacity0 > 0.1 ? "auto" : "none";
      }

      // Scroll cue: fades out after p > 0.05
      let cueOpacity = 0;
      if (p <= 0.05) {
        cueOpacity = p <= 0.01 ? 1 : Math.max(0, 1 - (p - 0.01) / 0.04);
      }
      if (scrollCueRef.current) {
        scrollCueRef.current.style.opacity = cueOpacity.toString();
      }

      // Stage 1 (0.20 - 0.40): "Hair, cut with intent."
      let opacity1 = 0;
      let translate1 = 24;
      if (p >= 0.16 && p <= 0.43) {
        if (p < 0.20) {
          const t = (p - 0.16) / 0.04;
          opacity1 = t;
          translate1 = 24 * (1 - t);
        } else if (p > 0.36) {
          const t = (p - 0.36) / 0.04;
          opacity1 = 1 - t;
          translate1 = -24 * t;
        } else {
          opacity1 = 1;
          translate1 = 0;
        }
      } else if (p > 0.43) {
        translate1 = -24;
      }
      if (stage1Ref.current) {
        stage1Ref.current.style.opacity = opacity1.toString();
        stage1Ref.current.style.transform = `translate3d(0, ${translate1}px, 0)`;
      }

      // Stage 2 (0.45 - 0.65): "Skin, treated with care."
      let opacity2 = 0;
      let translate2 = 24;
      if (p >= 0.41 && p <= 0.68) {
        if (p < 0.45) {
          const t = (p - 0.41) / 0.04;
          opacity2 = t;
          translate2 = 24 * (1 - t);
        } else if (p > 0.61) {
          const t = (p - 0.61) / 0.04;
          opacity2 = 1 - t;
          translate2 = -24 * t;
        } else {
          opacity2 = 1;
          translate2 = 0;
        }
      } else if (p > 0.68) {
        translate2 = -24;
      }
      if (stage2Ref.current) {
        stage2Ref.current.style.opacity = opacity2.toString();
        stage2Ref.current.style.transform = `translate3d(0, ${translate2}px, 0)`;
      }

      // Stage 3 (0.70 - 0.92): "Bridal, finished to perfection."
      let opacity3 = 0;
      let translate3 = 24;
      if (p >= 0.66 && p <= 0.95) {
        if (p < 0.70) {
          const t = (p - 0.66) / 0.04;
          opacity3 = t;
          translate3 = 24 * (1 - t);
        } else if (p > 0.88) {
          const t = (p - 0.88) / 0.04;
          opacity3 = 1 - t;
          translate3 = -24 * t;
        } else {
          opacity3 = 1;
          translate3 = 0;
        }
      } else if (p > 0.95) {
        translate3 = -24;
      }
      if (stage3Ref.current) {
        stage3Ref.current.style.opacity = opacity3.toString();
        stage3Ref.current.style.transform = `translate3d(0, ${translate3}px, 0)`;
        stage3Ref.current.style.pointerEvents = opacity3 > 0.5 ? "auto" : "none";
      }

      // Nav transition after Hero ends
      if (navRef.current) {
        if (p > 0.92) {
          navRef.current.style.backgroundColor = "#0A0A0A";
          navRef.current.style.borderBottomColor = "rgba(255,255,255,0.08)";
        } else {
          navRef.current.style.backgroundColor = "transparent";
          navRef.current.style.borderBottomColor = "transparent";
        }
      }

      // Top progress bar line
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${p * 100}%`;
      }

      rId = requestAnimationFrame(updateLoop);
    };

    rId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      cancelAnimationFrame(rId);
    };
  }, [useFallback]);

  // Gallery keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") {
          setLightboxIndex(null);
        } else if (e.key === "ArrowRight") {
          setLightboxIndex(prev => (prev !== null && prev < currentImages.length - 1) ? prev + 1 : prev);
        } else if (e.key === "ArrowLeft") {
          setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : prev);
        }
      } else {
        if (e.key === "ArrowRight") {
          setActiveIndex(prev => Math.min(currentImages.length - 1, prev + 1));
        } else if (e.key === "ArrowLeft") {
          setActiveIndex(prev => Math.max(0, prev - 1));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, currentImages.length]);

  // Gallery pointer handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerStartRef.current) {
      const dx = Math.abs(e.clientX - pointerStartRef.current.x);
      if (dx > 10) {
        isDraggingRef.current = true;
      }
    }
    // Desktop pointer parallax on active slide
    if (e.pointerType !== "touch") {
      const stage = galleryStageRef.current;
      if (stage) {
        const rect = stage.getBoundingClientRect();
        const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setParallax({ x: nx * 10, y: ny * 6 });
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerStartRef.current) return;
    const deltaX = e.clientX - pointerStartRef.current.x;
    if (deltaX > 50) {
      setActiveIndex(prev => Math.max(0, prev - 1));
    } else if (deltaX < -50) {
      setActiveIndex(prev => Math.min(currentImages.length - 1, prev + 1));
    }
    pointerStartRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handleSlideClick = (index: number, offset: number) => {
    if (isDraggingRef.current) return;
    if (offset !== 0) {
      setActiveIndex(index);
    } else {
      setLightboxIndex(index);
    }
  };

  const handleLightboxPointerDown = (e: React.PointerEvent) => {
    lightboxPointerStartRef.current = e.clientX;
  };

  const handleLightboxPointerUp = (e: React.PointerEvent) => {
    if (lightboxPointerStartRef.current === null) return;
    const deltaX = e.clientX - lightboxPointerStartRef.current;
    if (deltaX > 50) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
    } else if (deltaX < -50) {
      setLightboxIndex(prev => (prev !== null && prev < currentImages.length - 1 ? prev + 1 : prev));
    }
    lightboxPointerStartRef.current = null;
  };

  // 4. Reviews Quotes Cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview(prev => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white relative min-h-screen selection:bg-neutral-800 selection:text-white antialiased">
      
      {/* 1px Progress Line at the very top */}
      <div className="fixed top-0 left-0 h-[2px] bg-white z-50 transition-all duration-75" ref={progressBarRef} style={{ width: "0%" }} />

      {/* HEADER NAV - Stark Editorial Top Bar Contract */}
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-5 border-b border-transparent transition-colors duration-500 will-change-auto"
      >
        {/* Zone 1: Wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-lg font-light tracking-[0.25em] text-white hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
        >
          {SALON_NAME}
        </a>

        {/* Zone 2: Navigation Links (At most 5) */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest text-neutral-400">
          <button onClick={() => scrollToSection("services-section")} className="hover:text-white transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection("gallery-section")} className="hover:text-white transition-colors cursor-pointer">Gallery</button>
          <button onClick={() => scrollToSection("founder-section")} className="hover:text-white transition-colors cursor-pointer">Founder</button>
          <button onClick={() => scrollToSection("visit-section")} className="hover:text-white transition-colors cursor-pointer">Visit</button>
        </div>

        {/* Zone 3: Direct Square CTA */}
        <div className="hidden md:block">
          <a 
            href={TEL_LINK}
            className="border border-white/20 hover:border-white px-5 py-2 text-[10px] uppercase tracking-widest transition-colors inline-block"
          >
            Reserve Salon Care
          </a>
        </div>

        {/* Mobile Hamburger Zone */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-neutral-300 transition-colors p-1"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex flex-col justify-between p-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-widest text-neutral-500 font-mono">MENU</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border border-neutral-800 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-8 text-2xl font-extralight tracking-wider my-auto">
          <button onClick={() => scrollToSection("services-section")} className="text-left py-2 border-b border-neutral-900 hover:text-neutral-400 transition-colors">01 / Services</button>
          <button onClick={() => scrollToSection("gallery-section")} className="text-left py-2 border-b border-neutral-900 hover:text-neutral-400 transition-colors">02 / Immersive Gallery</button>
          <button onClick={() => scrollToSection("founder-section")} className="text-left py-2 border-b border-neutral-900 hover:text-neutral-400 transition-colors">03 / Personal Philosophy</button>
          <button onClick={() => scrollToSection("visit-section")} className="text-left py-2 border-b border-neutral-900 hover:text-neutral-400 transition-colors">04 / Find the Space</button>
        </div>

        <div className="flex flex-col gap-4">
          <a 
            href={TEL_LINK}
            className="w-full text-center border border-white py-3 text-xs uppercase tracking-widest font-normal"
          >
            Call 099044 55668
          </a>
          <a 
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center border border-neutral-800 py-3 text-xs uppercase tracking-widest text-neutral-400"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* 1. LANDING HERO (Fixed full-screen layer + 450svh runway) */}
      <div 
        ref={heroFixedRef}
        className="fixed inset-0 z-0 h-[100svh] overflow-hidden pointer-events-none select-none"
        style={{ willChange: "opacity" }}
      >
        {/* Muted background video scrubbed via scroll */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            autoPlay={useFallback}
            loop={useFallback}
            onLoadedMetadata={() => { isVideoLoadedRef.current = true; }}
            onError={() => {
              const v = videoRef.current;
              if (v && v.src !== "https://videotourl.com/videos/1791121687818-5a20d20a-ec8d-4a96-9f83-0eca71162eda.mp4") {
                v.src = "https://videotourl.com/videos/1791121687818-5a20d20a-ec8d-4a96-9f83-0eca71162eda.mp4";
                v.load();
              }
            }}
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            <source src="https://videotourl.com/videos/1791121687818-5a20d20a-ec8d-4a96-9f83-0eca71162eda.mp4" type="video/mp4" />
          </video>
          {/* 45% Black contrast mask for white text legibility */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* STAGE 0 (0 - 0.15 Scroll Progress) */}
        <div 
          ref={stage0Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center select-none will-change-transform"
        >
          <h1 className="text-[clamp(2.5rem,12vw,9.5rem)] font-extralight tracking-[0.25em] text-white uppercase leading-none select-all">
            BELLITA
          </h1>
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-300 mt-6 font-light">
            The Salon · Kudasan, Gandhinagar
          </p>
          
          {/* Subtle Editorial Scroll Cue - fades after p > 0.05 */}
          <div ref={scrollCueRef} className="absolute bottom-12 flex flex-col items-center gap-2 transition-opacity duration-200">
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Scroll Down</span>
            <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
            </div>
          </div>
        </div>

        {/* STAGE 1 (0.20 - 0.40 Scroll Progress) */}
        <div 
          ref={stage1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center select-none opacity-0 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-white leading-relaxed max-w-4xl tracking-tight">
            Hair, cut with intent.
          </h2>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mt-4 font-light">
            01 / PRECISION CUTTING & SCULPTING
          </p>
        </div>

        {/* STAGE 2 (0.45 - 0.65 Scroll Progress) */}
        <div 
          ref={stage2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center select-none opacity-0 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-white leading-relaxed max-w-4xl tracking-tight">
            Skin, treated with care.
          </h2>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mt-4 font-light">
            02 / COUTURE FACIAL LABS & DERMA THERAPY
          </p>
        </div>

        {/* STAGE 3 (0.70 - 0.92 Scroll Progress) */}
        <div 
          ref={stage3Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 will-change-transform pointer-events-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-white leading-relaxed max-w-4xl tracking-tight">
            Bridal, finished to perfection.
          </h2>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mt-4 font-light mb-8">
            03 / HAUTE BEAUTY & DRAPING
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={TEL_LINK}
              className="border border-white bg-white text-black hover:bg-neutral-200 hover:border-neutral-200 px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors w-full sm:w-auto text-center"
            >
              Call Now
            </a>
            <a 
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white text-white px-8 py-3.5 text-xs uppercase tracking-widest font-normal transition-colors w-full sm:w-auto text-center"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* NORMAL-FLOW RUNWAY (450svh scroll length) */}
      <div ref={runwayRef} className="w-full pointer-events-none" style={{ height: "450svh" }} />

      {/* NEXT SECTIONS CONTAINER (Solid #000, relative z-[2], scrolls right over hero with zero gap) */}
      <div id="content-sections" className="relative z-[2] bg-black">

      {/* TEXT MARQUEE STRIP - Slow Moving Luxury Monograph */}
      <div className="w-full overflow-hidden border-y border-neutral-900 bg-[#0A0A0A] py-6 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[10px] md:text-xs font-light uppercase tracking-[0.3em] text-neutral-400">
          <span>{SALON_NAME}</span>
          <span>·</span>
          <span>KUDASAN, GANDHINAGAR</span>
          <span>·</span>
          <span>HAIR WITH INTENT</span>
          <span>·</span>
          <span>SKIN WITH CARE</span>
          <span>·</span>
          <span>BRIDAL PERFECTION</span>
          <span>·</span>
          <span>{SALON_NAME}</span>
          <span>·</span>
          <span>KUDASAN, GANDHINAGAR</span>
          <span>·</span>
          <span>HAIR WITH INTENT</span>
          <span>·</span>
          <span>SKIN WITH CARE</span>
          <span>·</span>
          <span>BRIDAL PERFECTION</span>
        </div>
      </div>

      {/* 2. SERVICES PRICE MENU */}
      <SafeComponent>
        <section id="services-section" className="py-24 md:py-36 bg-black px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono block mb-2">01 / DISCIPLINE MENU</span>
                <h3 className="text-4xl md:text-5xl font-extralight tracking-tight uppercase text-white">
                  Curated Care
                </h3>
              </div>
              <p className="text-sm font-light text-neutral-400 max-w-sm leading-relaxed">
                Clean processes, medical hygiene, and highly personalized aesthetics. Tap a discipline to browse our curated price index.
              </p>
            </div>
          </Reveal>

          {/* Interactive Custom Tabs */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-1.5 border-b border-neutral-900 pb-6 mb-12">
              {Object.keys(SERVICES_DATA).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setServicesTab(tab as keyof typeof SERVICES_DATA)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                    servicesTab === tab
                      ? "bg-white text-black border-white font-medium"
                      : "bg-transparent text-neutral-400 border-neutral-900 hover:border-neutral-800 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          {/* List Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
            {SERVICES_DATA[servicesTab].map((service, index) => (
              <Reveal key={service.name} delay={index * 40}>
                <div className="flex items-end py-4 border-b border-neutral-900 group">
                  <div className="flex flex-col">
                    <span className="text-base font-light text-neutral-200 tracking-wide pr-2">
                      {service.name}
                    </span>
                  </div>
                  
                  {/* Custom Dot Leader */}
                  <div className="grow border-b border-dotted border-neutral-800 mx-3 mb-1.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="text-base font-normal text-white shrink-0 pl-2 tabular-nums">
                    ₹{service.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 border border-neutral-900 bg-[#0A0A0A]">
              <span className="text-xs text-neutral-400 tracking-wide font-light">
                Prices listed are standard baselines. Final rate depends on consultation.
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-white">
                Prices start from. Call to confirm.
              </span>
            </div>
          </Reveal>
        </section>
      </SafeComponent>

      {/* 3. IMMERSIVE GALLERY CAROUSEL (100svh cinematic full-viewport) */}
      <section 
        id="gallery-section" 
        className="relative w-full h-[100svh] bg-black overflow-hidden flex flex-col justify-between border-b border-neutral-900 select-none"
        style={{ touchAction: "pan-y" }}
      >
        {/* Background Layer: Active photo full-bleed blurred brightness 0.25 crossfading 600ms */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {bgPrev && (
            <img
              src={bgPrev}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
              style={{
                filter: "blur(40px) brightness(0.25)",
                transform: "scale(1.2)",
                opacity: isCrossfading ? 0 : 1
              }}
            />
          )}
          <img
            src={bgCurrent}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
            style={{
              filter: "blur(40px) brightness(0.25)",
              transform: "scale(1.2)",
              opacity: isCrossfading ? 1 : 1
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Top UI Header */}
        <div className="relative z-20 w-full px-6 md:px-12 pt-8 flex items-center justify-between pointer-events-auto">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono block">
              02 / Visual Chronicle
            </span>
          </div>

          {/* Huge Outlined Counter */}
          <div className="text-4xl sm:text-6xl md:text-8xl font-extralight tracking-tight text-white/30 font-mono select-none">
            {String(activeIndex + 1).padStart(2, "0")} / {String(currentImages.length).padStart(2, "0")}
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
            <button
              onClick={() => { setGalleryTab("space"); setActiveIndex(0); }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-widest transition-colors ${
                galleryTab === "space"
                  ? "bg-white text-black font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              The Space
            </button>
            <button
              onClick={() => { setGalleryTab("work"); setActiveIndex(0); }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-widest transition-colors ${
                galleryTab === "work"
                  ? "bg-white text-black font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Our Work
            </button>
          </div>
        </div>

        {/* Stage Container: 3D perspective 1400px with slides */}
        <div 
          ref={galleryStageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => { setParallax({ x: 0, y: 0 }); }}
          className="relative grow w-full z-10 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ 
            perspective: "1400px", 
            transformStyle: "preserve-3d", 
            touchAction: "pan-y" 
          }}
        >
          {!galleryReady ? (
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono animate-pulse">
              Loading...
            </div>
          ) : (
            currentImages.map((img, index) => {
              const offset = index - activeIndex;
              if (Math.abs(offset) > 2) return null;

              const translateXPercent = Math.abs(offset) === 0 ? 0 : Math.abs(offset) === 1 ? offset * 96 : offset * 175;
              const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.68;
              const rotateY = offset === 0 ? 0 : offset > 0 ? -14 : 14;
              const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.25;
              const grayscale = offset === 0 ? 0 : 1;
              const zIndex = offset === 0 ? 30 : Math.abs(offset) === 1 ? 20 : 10;

              return (
                <div
                  key={img.id}
                  onClick={() => handleSlideClick(index, offset)}
                  className="absolute top-1/2 left-1/2 aspect-[4/5] object-cover cursor-pointer select-none bg-neutral-950 border border-neutral-800 will-change-transform w-[78vw] max-h-[78svh] sm:w-auto sm:h-[78svh]"
                  style={{
                    transform: `translate3d(calc(-50% + ${translateXPercent}%), -50%, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    filter: `grayscale(${grayscale})`,
                    zIndex,
                    transition: "transform 700ms cubic-bezier(.22,.8,.2,1), opacity 700ms cubic-bezier(.22,.8,.2,1), filter 700ms cubic-bezier(.22,.8,.2,1)"
                  }}
                >
                  <div 
                    className="w-full h-full overflow-hidden"
                    style={{
                      transform: offset === 0 ? `translate3d(${parallax.x}px, ${parallax.y}px, 0)` : "none",
                      transition: "transform 150ms ease-out"
                    }}
                  >
                    <GalleryImageItem
                      src={img.url}
                      fallbackSrc={img.fallbackUrl}
                      alt={img.label}
                      photoNumber={index + 1}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom UI Bar: Caption, Arrow buttons, Progress bar */}
        <div className="relative z-20 w-full px-6 md:px-12 pb-8 flex items-center justify-between pointer-events-auto">
          {/* Caption */}
          <div className="text-xs uppercase tracking-widest text-neutral-300 font-light max-w-sm truncate">
            {galleryTab === "space" ? "The Space" : "Our Work"} — {String(activeIndex + 1).padStart(2, "0")} · {currentImages[activeIndex]?.label}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className={`p-3 border text-white transition-colors ${
                activeIndex === 0
                  ? "border-neutral-900 text-neutral-700 cursor-not-allowed"
                  : "border-neutral-800 hover:border-white cursor-pointer"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex(prev => Math.min(currentImages.length - 1, prev + 1))}
              disabled={activeIndex === currentImages.length - 1}
              className={`p-3 border text-white transition-colors ${
                activeIndex === currentImages.length - 1
                  ? "border-neutral-900 text-neutral-700 cursor-not-allowed"
                  : "border-neutral-800 hover:border-white cursor-pointer"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thin bottom progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-900 z-30">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out" 
            style={{ width: `${((activeIndex + 1) / currentImages.length) * 100}%` }} 
          />
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {lightboxIndex !== null && (
        <div 
          onPointerDown={handleLightboxPointerDown}
          onPointerUp={handleLightboxPointerUp}
          className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between p-6 select-none"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-xs font-mono uppercase tracking-widest">
              {(lightboxIndex + 1).toString().padStart(2, "0")} / {currentImages.length.toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 border border-neutral-900 hover:border-white text-white transition-colors"
              aria-label="Close details viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Frame */}
          <div className="grow flex items-center justify-center p-2 max-h-[75vh]">
            <GalleryImageItem
              src={currentImages[lightboxIndex].url}
              fallbackSrc={currentImages[lightboxIndex].fallbackUrl}
              alt={currentImages[lightboxIndex].label}
              photoNumber={lightboxIndex + 1}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Lightbox Footer controls */}
          <div className="flex flex-col items-center gap-4 mb-4 text-center">
            <p className="text-sm font-light text-neutral-300 uppercase tracking-widest">
              {currentImages[lightboxIndex].label}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
                disabled={lightboxIndex === 0}
                className={`px-5 py-2 border text-xs uppercase tracking-widest font-mono transition-colors ${
                  lightboxIndex === 0 ? "border-neutral-900 text-neutral-800 cursor-not-allowed" : "border-neutral-800 hover:border-white"
                }`}
              >
                Prev
              </button>
              <button
                onClick={() => setLightboxIndex(prev => prev !== null && prev < currentImages.length - 1 ? prev + 1 : prev)}
                disabled={lightboxIndex === currentImages.length - 1}
                className={`px-5 py-2 border text-xs uppercase tracking-widest font-mono transition-colors ${
                  lightboxIndex === currentImages.length - 1 ? "border-neutral-900 text-neutral-800 cursor-not-allowed" : "border-neutral-800 hover:border-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. FOUNDER SECTION */}
      <SafeComponent>
        <section id="founder-section" className="py-24 md:py-36 bg-black px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Owner Visual Column (Asymmetric Column Weight) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="aspect-[3/4] overflow-hidden relative bg-neutral-950 border border-neutral-900">
                  <SafeImage
                    src={IMAGES_CONFIG.owner.url}
                    fallbackSrc={IMAGES_CONFIG.owner.fallbackUrl}
                    alt={IMAGES_CONFIG.owner.label}
                    fallbackLabel={IMAGES_CONFIG.owner.label}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 will-change-transform"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-neutral-800">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Creative Director</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Philosophy Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono block mb-2">03 / HUMAN PHILOSOPHY</span>
                <h3 className="text-4xl md:text-5xl font-extralight tracking-tight uppercase text-white mb-8">
                  Pure care, personal focus.
                </h3>
              </Reveal>
              
              <Reveal delay={100}>
                <div className="space-y-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
                  <p>
                    At Bellita, we believe luxury shouldn’t look or feel artificial. Salon therapy is an intimate human engagement, requiring premium ingredients, clinical tools, and uncompromising hygiene.
                  </p>
                  <p>
                    Whether sculpting a razor fade, formulating deep-bond treatments, or designing clean bridal silhouettes, we construct our work to reflect personal confidence. We avoid mass templates in favor of tailored detail for both men and women.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 pt-8 border-t border-neutral-900 flex items-center gap-4">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-xs uppercase tracking-widest text-white font-medium font-mono">
                    {FOUNDER_NAME}
                  </span>
                </div>
              </Reveal>
            </div>

          </div>
        </section>
      </SafeComponent>

      {/* 5. REVIEWS */}
      <SafeComponent>
        <section className="py-24 md:py-36 bg-[#0A0A0A] border-b border-neutral-950 px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono block mb-4">PUBLIC APPRAISAL</span>
            </Reveal>

            {/* Big Aggregate Ratings Grid */}
            <Reveal delay={50}>
              <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-16 justify-center mb-16">
                <div>
                  <div className="text-5xl md:text-6xl font-light tracking-tight text-white tabular-nums">4.6</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Google reviews</div>
                </div>
                
                {/* Minimal vertical divider */}
                <div className="hidden sm:block w-[1px] h-12 bg-neutral-800" />
                
                <div>
                  <div className="text-5xl md:text-6xl font-light tracking-tight text-white tabular-nums">4.6</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">on Justdial · 416 votes</div>
                </div>
              </div>
            </Reveal>

            {/* Slidable Reviews quotes */}
            <Reveal delay={150}>
              <div className="relative min-h-[160px] md:min-h-[140px] flex items-center justify-center w-full">
                {REVIEWS.map((review, i) => (
                  <div
                    key={review.author}
                    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 will-change-opacity"
                    style={{
                      opacity: activeReview === i ? 1 : 0,
                      pointerEvents: activeReview === i ? "auto" : "none"
                    }}
                  >
                    <p className="text-lg md:text-xl font-light italic max-w-2xl leading-relaxed text-neutral-200">
                      "{review.quote}"
                    </p>
                    <span className="text-[10px] uppercase tracking-[0.3em] mt-6 text-neutral-500 font-mono">
                      — {review.author}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Slide Selectors */}
            <Reveal delay={200}>
              <div className="flex gap-2.5 mt-8">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReview(i)}
                    className={`w-1.5 h-1.5 transition-all ${
                      activeReview === i ? "bg-white w-5" : "bg-neutral-800"
                    }`}
                    aria-label={`Select review slide ${i + 1}`}
                  />
                ))}
              </div>
            </Reveal>

          </div>
        </section>
      </SafeComponent>

      {/* 6. VISIT / CONTACT (Black Section) */}
      <SafeComponent>
        <section id="visit-section" className="py-24 md:py-36 bg-black text-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Info Column */}
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono block mb-2">04 / THE LOCATION</span>
                  <h3 className="text-4xl md:text-5xl font-extralight tracking-tight uppercase mb-12">
                    Enter the space
                  </h3>
                </Reveal>

                <div className="space-y-10">
                  <Reveal delay={80}>
                    <div className="flex gap-4 items-start">
                      <MapPin className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-2">Address</h4>
                        <p className="text-base font-light text-neutral-200 leading-relaxed max-w-md">
                          116, 1st Floor, The Landmark, Urjanagar 1, A-115, Kudasan, Gandhinagar, Gujarat 382419
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className="flex gap-4 items-start">
                      <Clock className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-2">Salon Hours</h4>
                        <p className="text-base font-light text-neutral-200 leading-relaxed">
                          Monday — Sunday
                          <span className="block text-sm text-neutral-400 mt-1 font-mono">09:00 am — 09:00 pm</span>
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={160}>
                    <div className="flex gap-4 items-start">
                      <Phone className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-2">Direct Phone</h4>
                        <a href={TEL_LINK} className="text-base font-light text-white hover:underline decoration-neutral-500">
                          099044 55668
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Reveal delay={100}>
                  <div className="border border-neutral-900 bg-[#0A0A0A] p-8 space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400 mb-4">Immediate Bookings</h4>
                    
                    <a 
                      href={TEL_LINK}
                      className="flex items-center justify-between w-full border border-neutral-800 hover:border-white px-5 py-4 text-xs uppercase tracking-widest text-white transition-colors"
                    >
                      <span>Call to reserve</span>
                      <Phone className="w-4 h-4" />
                    </a>

                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full border border-neutral-800 hover:border-white px-5 py-4 text-xs uppercase tracking-widest text-neutral-300 transition-colors"
                    >
                      <span>Message on WhatsApp</span>
                      <MessageSquare className="w-4 h-4" />
                    </a>

                    <a 
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full border border-neutral-800 hover:border-white px-5 py-4 text-xs uppercase tracking-widest text-neutral-300 transition-colors"
                    >
                      <span>Get route on maps</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a 
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full border border-neutral-800 hover:border-white px-5 py-4 text-xs uppercase tracking-widest text-neutral-300 transition-colors"
                    >
                      <span>Follow on Instagram</span>
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              </div>

            </div>

            {/* Clean Editorial Footer */}
            <div className="mt-24 pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-sm font-light tracking-[0.25em] block">{SALON_NAME}</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2 block">Premium Unisex Lounge</span>
              </div>
              
              <div className="flex gap-8 text-[10px] uppercase tracking-widest text-neutral-500">
                <button onClick={() => scrollToSection("services-section")} className="hover:text-white transition-colors cursor-pointer">Menu</button>
                <button onClick={() => scrollToSection("gallery-section")} className="hover:text-white transition-colors cursor-pointer">Gallery</button>
                <button onClick={() => scrollToSection("visit-section")} className="hover:text-white transition-colors cursor-pointer">Directions</button>
              </div>

              <span className="text-[9px] uppercase tracking-widest text-neutral-600 font-mono">
                &copy; {new Date().getFullYear()} {SALON_NAME} · All rights reserved
              </span>
            </div>

          </div>
        </section>
      </SafeComponent>
      </div> {/* /#content-sections */}

      {/* MOBILE BOTTOM FIXED STICKY BAR (Only appears after scroll exits hero) */}
      {showMobileBar && (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-black/95 border-t border-neutral-900 flex items-center h-[56px] select-none animate-fade-in px-4 py-2 gap-3">
          <a
            href={TEL_LINK}
            className="flex-1 h-full flex items-center justify-center bg-white text-black text-[11px] uppercase tracking-widest font-medium"
          >
            Call Salon
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-full flex items-center justify-center border border-neutral-800 text-white text-[11px] uppercase tracking-widest font-normal"
          >
            Directions
          </a>
        </div>
      )}

    </div>
  );
}
