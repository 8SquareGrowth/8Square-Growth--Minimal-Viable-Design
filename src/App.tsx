import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Users,
  Mail,
  Calendar,
  ShoppingCart,
  FileText,
  Headphones,
  Search,
  ChevronRight,
  TrendingUp,
  Target,
} from "lucide-react";

// ─── Brand Color ─────────────────────────────────────────────────────────────
const LIME = "#57ff1e";

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ROW_1 = [
  { label: "Voice Support Assistant", metric: "2X RECURRING REVENUE", icon: <Headphones className="w-4 h-4" /> },
  { label: "RAG Knowledge Search", metric: "29% CONVERSION INCREASED", icon: <Search className="w-4 h-4" /> },
  { label: "Sales Email Drafter", metric: "45% CHURN RATE DECREASED", icon: <Mail className="w-4 h-4" /> },
  { label: "Calendar Booking Co-pilot", metric: "1.5X RECURRING REVENUE", icon: <Calendar className="w-4 h-4" /> },
  { label: "Voice Support Assistant", metric: "2X RECURRING REVENUE", icon: <Headphones className="w-4 h-4" /> },
  { label: "RAG Knowledge Search", metric: "29% CONVERSION INCREASED", icon: <Search className="w-4 h-4" /> },
  { label: "Sales Email Drafter", metric: "45% CHURN RATE DECREASED", icon: <Mail className="w-4 h-4" /> },
  { label: "Calendar Booking Co-pilot", metric: "1.5X RECURRING REVENUE", icon: <Calendar className="w-4 h-4" /> },
];

const TICKER_ROW_2 = [
  { label: "Meeting Action Items", metric: "3X REVENUE", icon: <FileText className="w-4 h-4" /> },
  { label: "Content → Social Captions", metric: "20% CONVERSION INCREASED", icon: <Zap className="w-4 h-4" /> },
  { label: "Post-Purchase Care Bot", metric: "32% CHURN RATE DECREASED", icon: <ShoppingCart className="w-4 h-4" /> },
  { label: "Payment Recovery Nudges", metric: "57% CONVERSION INCREASED", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Meeting Action Items", metric: "3X REVENUE", icon: <FileText className="w-4 h-4" /> },
  { label: "Content → Social Captions", metric: "20% CONVERSION INCREASED", icon: <Zap className="w-4 h-4" /> },
  { label: "Post-Purchase Care Bot", metric: "32% CHURN RATE DECREASED", icon: <ShoppingCart className="w-4 h-4" /> },
  { label: "Payment Recovery Nudges", metric: "57% CONVERSION INCREASED", icon: <TrendingUp className="w-4 h-4" /> },
];

const ADS_FIX_STEPS = [
  {
    label: "01 / Audit",
    title: "Stop the bleed first",
    desc: "We analyse exactly where your ad spend is leaking — tracking gaps, audience mismatch, and landing pages that kill conversions.",
  },
  {
    label: "02 / System",
    title: "Build a conversion path",
    desc: "We rebuild the journey from ad click to booked call so every euro you spend has a measurable path to revenue.",
  },
  {
    label: "03 / Optimise",
    title: "Data-driven improvement",
    desc: "Monthly performance reviews with clear numbers: cost per lead, cost per customer, and ROI — no jargon, no vanity metrics.",
  },
];

const LEAD_SYSTEMS_POINTS = [
  {
    metric: "3–5x",
    title: "More qualified enquiries",
    desc: "Optimised landing pages, SEO content, and conversion paths that bring in buyers, not browsers.",
  },
  {
    metric: "24/7",
    title: "Always on, always capturing",
    desc: "Your website and digital presence work while you sleep — no leads fall through the cracks.",
  },
  {
    metric: "≤48h",
    title: "Fast to first results",
    desc: "Quick-win optimisations you can see working within weeks, not months.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Founder · E-commerce Brand (32 staff)",
    headline: "Finally stopped wasting money on ads that went nowhere.",
    quote:
      "Within 8 weeks 8Square had rebuilt our entire digital funnel. Our cost per lead dropped by half and enquiries doubled. We finally know our marketing is working.",
    metric: "Cost per lead −52%",
  },
  {
    name: "Daniel Okafor",
    role: "MD · B2B Services (18 staff)",
    headline: "We went from feast-or-famine to a predictable pipeline.",
    quote:
      "We used to rely entirely on referrals. Now we have a consistent stream of inbound enquiries every week. The website actually works for us now.",
    metric: "+3.4x inbound leads",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder · SaaS Startup (12 staff)",
    headline: "Ranked on page 1 after years of being invisible on Google.",
    quote:
      "We'd paid for SEO for two years and barely moved. 8Square identified the real issues in weeks. Six months later we're ranking for our most valuable keywords.",
    metric: "Page 1 in 6 months",
  },
];

const TRUST_METRICS = [
  {
    value: "206%",
    label: "Organic Traffic Growth",
    desc: "More qualified buyers finding your product without paid spend — in 12 months.",
  },
  {
    value: "3×",
    label: "Pipeline Value Increase",
    desc: "After repositioning the offer and tightening ICP targeting.",
  },
  {
    value: "86%",
    label: "Search Visibility Increase",
    desc: "Appearing in AI tools and on page one — in under 5 months.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ─── Sub-Components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[10px] font-black uppercase tracking-[0.25em] mb-4"
      style={{ color: LIME }}
    >
      {children}
    </span>
  );
}

function TickerCard({
  label,
  metric,
  icon,
  glass = false,
}: {
  label: string;
  metric: string;
  icon: React.ReactNode;
  glass?: boolean;
}) {
  return (
    <div
      className={
        glass
          ? "hero-service-card flex items-center gap-4 px-5 py-3.5 rounded-xl shrink-0 cursor-default select-none transition-all duration-300"
          : "glass-card flex items-center gap-4 px-5 py-3.5 rounded-lg shrink-0 cursor-default select-none"
      }
      style={{ minWidth: 240 }}
    >
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
        style={{ background: "rgba(87,255,30,0.08)", color: LIME }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">{label}</p>
        <p className="text-[10px] font-black uppercase tracking-widest mt-0.5" style={{ color: LIME }}>
          {metric}
        </p>
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.92)" : "rgba(5,5,5,0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/8square-logo.png"
            alt="8Square Growth"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          {[
            { label: "The Problem", href: "#pain-ads" },
            { label: "Lead Growth", href: "#pain-leads" },
            { label: "Results", href: "#proof" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#start"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all text-black cursor-pointer"
          style={{ background: LIME }}
          id="nav-cta-btn"
        >
          Get My Free Audit
        </motion.a>
      </div>
    </motion.nav>
  );
}

// ─── Trusted-by brand logos ───────────────────────────────────────────────────

const BRAND_LOGOS = [
  { src: "/logo-brand-1.png", alt: "DealersOnline" },
  { src: "/logo-brand-2.png", alt: "Malapa" },
  { src: "/logo-brand-3.png", alt: "eezipay" },
  { src: "/logo-brand-4.png", alt: "Kastelo" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      {/* Subtle film-grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Centered hero text block */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-0 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          <span className="text-gradient block">Build Pipeline. Drive Growth.</span>
          <span className="text-gradient block">Scale With Confidence.</span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto text-zinc-400 text-base leading-relaxed mb-10"
        >
          We help SMEs and startups turn their digital presence into a predictable lead generation machine — without
          wasting another penny on ads that don&apos;t convert.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#pain-ads"
            whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(87,255,30,0.18)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-secondary-cta"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white backdrop-blur-sm transition-all cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            See How It Works
          </motion.a>

          <motion.a
            href="#start"
            whileHover={{ scale: 1.03, boxShadow: "0 0 36px rgba(87,255,30,0.45)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-primary-cta"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-black transition-all cursor-pointer"
            style={{
              background: LIME,
              boxShadow: "0 0 24px rgba(87,255,30,0.30)",
            }}
          >
            Get My Free Audit
          </motion.a>
        </motion.div>
      </div>

      {/* Trusted by strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 pb-28 px-6"
      >
        <p className="text-center text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.25em] mb-7">
          Trusted by growing businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 max-w-3xl mx-auto">
          {BRAND_LOGOS.map((brand) => (
            <img
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              className="h-8 w-auto object-contain select-none"
              style={{ opacity: 0.55, filter: "brightness(0) invert(1)" }}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
      />
    </section>
  );
}

// ─── Pain Point Section 1: Ads ────────────────────────────────────────────────

function PainPointAdsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const ADS_STATS = [
    { icon: <BarChart3 className="w-5 h-5" />, value: "3.2×", label: "Average ROAS" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "−67%", label: "Lower CPL" },
    { icon: <Target className="w-5 h-5" />, value: "€0", label: "Wasted spend" },
  ];

  return (
    <section id="pain-ads" ref={ref} className="py-32 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// The Ads Problem</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
            Burning Cash on Ads That Bring Zero New Customers?
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            You&apos;ve tried Facebook, Instagram, maybe even Google Ads. The agency promised leads. The budget
            disappeared. The customers didn&apos;t arrive. You&apos;re not alone — most SME ad spend is wasted because
            there&apos;s no system connecting the click to the close.
          </p>
          <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.25em]">
            {["Ads Audit", "Conversion Path", "ROI Tracking"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full"
                style={{ border: `1px solid ${LIME}`, background: "rgba(87,255,30,0.07)", color: LIME }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="space-y-4"
        >
          {/* 3 fix-step glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ADS_FIX_STEPS.map((item, i) => (
              <div
                key={item.title}
                className="relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
                id={`ads-card-${i}`}
              >
                <div
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(87,255,30,0.16), transparent 55%)" }}
                />
                <div className="relative z-10 space-y-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 flex items-center gap-2">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full border text-[9px]"
                      style={{ color: LIME, borderColor: LIME }}
                    >
                      {i + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Results stat panel */}
          <div className="glass-card rounded-2xl p-6 grid grid-cols-3 gap-4">
            {ADS_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(87,255,30,0.08)", color: LIME }}
                >
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pain Point Section 2: Lead Generation ───────────────────────────────────

function PainPointLeadsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pain-leads" ref={ref} className="py-32" style={{ background: "#070707" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// The Lead Drought</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight max-w-xl">
            Can&apos;t Find Enough Quality Leads? Here&apos;s Why — and How We Fix It.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            Relying on word-of-mouth and cold outreach keeps your pipeline unpredictable. If new business dries up for a
            month, everything stalls. We build always-on digital systems that attract, capture, and qualify leads while
            you focus on running your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {LEAD_SYSTEMS_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                id={`leads-point-${i}`}
              >
                <div className="mb-4">
                  <div className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500 mb-2">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: LIME }}>
                    {point.metric}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="glass-card rounded-3xl p-8 relative overflow-hidden"
        >
          <div
            className="absolute -top-16 -right-10 w-56 h-56 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(87,255,30,0.22)" }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-zinc-500">
              <span className="status-dot" />
              Always-on lead engine
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              One system. Consistent pipeline.
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              We connect your website, social presence, and outreach into a single lead engine — so you always know
              where your next customer is coming from.
            </p>
            <ul className="space-y-3">
              {[
                "Targeted content that attracts your ideal buyer.",
                "Lead capture pages that convert visitors into enquiries.",
                "Automated follow-up so no warm lead goes cold.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: LIME }} />
                  <span className="text-xs md:text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Proof & Testimonials ─────────────────────────────────────────────────────

function ProofAndTestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proof" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <SectionLabel>// Real Results</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight mb-4">
            What Growing Businesses Say After 90 Days.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We work with ambitious SMEs and startups who are done guessing and ready to grow with a system behind them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="relative glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden"
              id={`testimonial-${i}`}
            >
              <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(87,255,30,0.18), transparent 60%)" }}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                  <Users className="w-3 h-3" style={{ color: LIME }} />
                  <span>Client Story</span>
                </div>
                <p className="text-sm font-semibold text-white leading-relaxed">{t.headline}</p>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">&quot;{t.quote}&quot;</p>
                <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-[11px] text-zinc-500">{t.role}</div>
                  </div>
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ border: `1px solid ${LIME}`, color: LIME, background: "rgba(87,255,30,0.06)" }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Credibility Bar ──────────────────────────────────────────────────

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 border-y"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(87,255,30,0.02)" }}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {TRUST_METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: LIME }}>
              {m.value}
            </div>
            <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Multi-Step Lead Form ─────────────────────────────────────────────────────

function MultiStepLeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [dir, setDir] = useState(1);

  const goNext = () => { setDir(1); setStep(2); };
  const goBack = () => { setDir(-1); setStep(1); };

  const inputClass =
    "w-full bg-black/40 rounded-xl px-4 py-3.5 text-sm text-white border outline-none focus:border-[#57ff1e] transition-colors placeholder-zinc-600";
  const inputStyle = { borderColor: "rgba(255,255,255,0.12)" };
  const labelClass = "block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2";

  const stepVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full"
          style={{ background: LIME }}
          animate={{ width: step === 1 ? "50%" : "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="p-8 md:p-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        {/* Lime glow */}
        <div
          className="absolute -top-20 -right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(87,255,30,0.15)" }}
        />

        <AnimatePresence mode="wait" custom={dir}>
          {step === 1 ? (
            <motion.div
              key="step1"
              custom={dir}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 space-y-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Let&apos;s start with your name</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Step 1 of 2</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <button
                onClick={goNext}
                className="w-full py-4 rounded-xl text-sm font-bold text-black transition-all"
                style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(255,255,255,0.08)" }}
              >
                Next Step →
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="step2"
              custom={dir}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">What&apos;s your best email?</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Step 2 of 2</p>
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  className={inputClass}
                  style={inputStyle}
                  placeholder="name@company.com"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-5 py-4 rounded-xl text-sm font-bold text-white transition-all shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  ←
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-xl text-sm font-bold text-black flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: LIME,
                    boxShadow: "0 0 24px rgba(87,255,30,0.30)",
                  }}
                >
                  Get the System
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Lead Form Section ────────────────────────────────────────────────────────

function LeadFormSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="start"
      ref={ref}
      className="py-32 border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// Your Free Growth Audit</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            Get Your Free Digital Growth Audit
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Answer two quick questions and we&apos;ll send you a personalised breakdown of exactly where your digital
            presence is leaking leads — and what to do about it. Free. No sales call required.
          </p>
          <ul className="space-y-3">
            {[
              "Find out why your ads aren't converting.",
              "Discover why Google isn't showing your site.",
              "See the exact quick wins that will generate more enquiries.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: LIME }} />
                <span className="text-xs md:text-sm text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
        >
          <MultiStepLeadForm />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-12 border-t text-center"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/8square-logo.png"
            alt="8Square Growth"
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
          © 2026 · 8Square Growth
        </div>
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
          <a href="#pain-ads" className="hover:text-white transition-colors">The Problem</a>
          <a href="#pain-leads" className="hover:text-white transition-colors">Lead Growth</a>
          <a href="#proof" className="hover:text-white transition-colors">Results</a>
          <a href="#start" className="hover:text-white transition-colors">Get Audit</a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="text-white min-h-screen font-sans"
      style={{ background: "#050505", WebkitFontSmoothing: "antialiased" }}
    >
      <Nav />
      <Hero />
      <PainPointAdsSection />
      <PainPointLeadsSection />
      <ProofAndTestimonialsSection />
      <TrustBar />
      <LeadFormSection />
      <Footer />
    </div>
  );
}
