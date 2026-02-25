import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Users,
  MessageSquare,
  Cpu,
  BrainCircuit,
  Mail,
  Calendar,
  ShoppingCart,
  FileText,
  Headphones,
  Search,
  Plus,
  Minus,
  Check,
  ChevronRight,
  TrendingUp,
  Clock,
  Target,
  Layers,
} from "lucide-react";

// ─── Brand Color ────────────────────────────────────────────────────────────
const LIME = "#57ff1e";

// ─── Data ───────────────────────────────────────────────────────────────────

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

const STRATEGY_FEATURES = [
  {
    label: "01 / Discovery",
    title: "Architect your revenue engine",
    desc: "We audit your offers, delivery and tooling to blueprint a single operating system instead of scattered automations.",
  },
  {
    label: "02 / Prioritisation",
    title: "Rank every growth lever",
    desc: "We score impact vs. effort so your first AI systems attack the highest‑leverage bottlenecks in your pipeline.",
  },
  {
    label: "03 / Governance",
    title: "Guardrails, not guesswork",
    desc: "We define clear ownership, KPIs and safety rails so AI becomes an accountable member of your team.",
  },
];

const LEAD_SYSTEMS_POINTS = [
  {
    metric: "24/7",
    title: "Always‑on qualification",
    desc: "AI agents handle inbound leads across forms, chat and email so no opportunity sits idle overnight.",
  },
  {
    metric: "12–24x",
    title: "Follow‑up touchpoints",
    desc: "Sequenced outreach across channels that mirrors your best closer and compounds trust automatically.",
  },
  {
    metric: "≤5 min",
    title: "Speed‑to‑lead",
    desc: "Hot prospects hear back in minutes, while your team stays focused on strategy and delivery.",
  },
];

const TESTIMONIALS = [
  {
    name: "Jordan Patel",
    role: "Founder · B2B Creative Studio",
    headline: "From scattered tools to a single growth engine.",
    quote:
      "We finally have one AI system owning intake, routing and follow‑up. Pipeline feels calm, even at record volume.",
    metric: "+38% qualified opportunities",
  },
  {
    name: "Danielle Cho",
    role: "Agency Owner · Paid Media",
    headline: "Lead flow without adding headcount.",
    quote:
      "Our reps now step into calls with fully‑qualified, context‑rich leads. The AI handles the grind—we handle strategy.",
    metric: "20+ hours saved per week",
  },
  {
    name: "Luca Moretti",
    role: "Ops Director · RevOps Collective",
    headline: "Clinical implementation that our team actually trusts.",
    quote:
      "Everything is documented, observable and reversible. It feels like working with an internal product squad, not a vendor.",
    metric: "Zero incidents across launch",
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

// ─── Sub-Components ──────────────────────────────────────────────────────────

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

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

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
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/8square-logo.png"
            alt="8Square Growth"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          {[
            { label: "Strategy", href: "#strategy" },
            { label: "Lead Systems", href: "#systems" },
            { label: "Proof", href: "#proof" },
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

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all text-black"
          style={{ background: LIME }}
          id="nav-cta-btn"
        >
          Get In Touch
        </motion.button>
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

      {/* ── Centered hero text block ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-0 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          <span className="text-gradient block">Transform Your Agency</span>
          <span className="text-gradient block">with Structured AI Systems</span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto text-zinc-400 text-base leading-relaxed mb-10"
        >
          We build AI growth systems for agencies billing{" "}
          <span className="text-white font-medium">$20k–$30k/month</span>{" "}
          who are ready to scale—without scaling their problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Secondary — dark glass, subtle lime border */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(87,255,30,0.18)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-secondary-cta"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white backdrop-blur-sm transition-all"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            Get Started
          </motion.button>

          {/* Primary — Electric Lime fill with outer glow */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 36px rgba(87,255,30,0.45)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-primary-cta"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-black transition-all"
            style={{
              background: LIME,
              boxShadow: "0 0 24px rgba(87,255,30,0.30)",
            }}
          >
            Book a Call
          </motion.button>
        </motion.div>
      </div>

      {/* ── Trusted By strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 pb-28 px-6"
      >
        {/* Label */}
        <p className="text-center text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.25em] mb-7">
          Trusted by 200+ brands
        </p>

        {/* Logo row */}
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

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
      />
    </section>
  );
}

// ─── Value Section 1: AI Strategy Architecture ───────────────────────────────

function StrategyArchitectureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="strategy" ref={ref} className="py-32 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// AI Strategy Architecture</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
            A 3D blueprint for scalable, AI‑driven growth.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            We don&apos;t bolt AI onto random workflows. We architect an end‑to‑end growth system that aligns offers,
            operations and data—so every agent, automation and human is pulling in the same direction.
          </p>
          <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.25em]">
            <span
              className="px-3 py-1 rounded-full"
              style={{ border: `1px solid ${LIME}`, background: "rgba(87,255,30,0.08)", color: LIME }}
            >
              Discovery
            </span>
            <span
              className="px-3 py-1 rounded-full"
              style={{ border: `1px solid ${LIME}`, background: "rgba(87,255,30,0.06)", color: LIME }}
            >
              Architecture
            </span>
            <span
              className="px-3 py-1 rounded-full"
              style={{ border: `1px solid ${LIME}`, background: "rgba(87,255,30,0.06)", color: LIME }}
            >
              Governance
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {STRATEGY_FEATURES.map((item, i) => (
            <div
              key={item.title}
              className="relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
              id={`strategy-card-${i}`}
            >
              <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(87,255,30,0.16), transparent 55%)",
                }}
              />
              <div className="relative z-10 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-current text-[9px]" style={{ color: LIME }}>
                    {i + 1}
                  </span>
                  <span>{item.label}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Value Section 2: Automated Lead Systems ─────────────────────────────────

function AutomatedLeadSystemsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="systems"
      ref={ref}
      className="py-32"
      style={{ background: "#070707" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// Automated Lead Systems</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight max-w-xl">
            Turn every touchpoint into a structured, AI‑driven pipeline.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            From first click to booked call, we design AI systems that capture context, qualify fit and keep your
            expertise front‑and‑centre. No spammy sequences—just orchestrated, on‑brand conversations.
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
                id={`systems-point-${i}`}
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
            style={{ background: "rgba(87,255,30,0.24)" }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-zinc-500">
              <span className="status-dot" />
              Live lead orchestration
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              One pipeline. Dozens of intelligent touchpoints.
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              We connect your forms, CRM, calendar and comms into a single orchestrated system so every lead is seen,
              scored and nurtured without manual chasing.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              {[
                "Dynamic routing based on fit, intent and segment.",
                "Human‑in‑the‑loop approvals for key decision moments.",
                "Visibility dashboards so you can see every touchpoint at a glance.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: LIME }} />
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
    <section
      id="proof"
      ref={ref}
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <SectionLabel>// Proof & Testimonials</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight mb-4">
            Built for operators who care about precision.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Agencies and teams use 8Square Growth to turn messy, ad‑hoc workflows into clean, measurable systems that
            scale without chaos.
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
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(87,255,30,0.18), transparent 60%)",
                }}
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
                    className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full"
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

// ─── Integrated Lead Form ─────────────────────────────────────────────────────

function LeadFormSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <SectionLabel>// Get a Clinical Growth Blueprint</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            Tell us where you&apos;re stuck. We&apos;ll map the systems that unstick you.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Share a snapshot of your current pipeline, delivery load and tooling. Within 48 hours we&apos;ll respond
            with a concise system architecture outlining quick wins and high‑leverage AI plays.
          </p>
          <ul className="space-y-3 text-sm text-zinc-300">
            {[
              "No fluff—just a clear diagram of the AI systems we would build first.",
              "You keep the blueprint whether or not we work together.",
              "Designed for agencies billing $20k–$30k/month who want compounding systems, not one‑off hacks.",
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
          className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div
            className="absolute -top-24 -right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(87,255,30,0.22)" }}
          />
          <form
            className="relative z-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-black/40 rounded-lg px-4 py-3 text-sm border outline-none"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-black/40 rounded-lg px-4 py-3 text-sm border outline-none"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  placeholder="you@agency.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Agency / Company
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 rounded-lg px-4 py-3 text-sm border outline-none"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  placeholder="8Square Digital"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Monthly Revenue Band
                </label>
                <select
                  className="w-full bg-black/40 rounded-lg px-4 py-3 text-sm border outline-none"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>$15k–$20k / mo</option>
                  <option>$20k–$30k / mo</option>
                  <option>$30k–$50k / mo</option>
                  <option>$50k+ / mo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                Biggest Bottleneck Right Now
              </label>
              <textarea
                rows={4}
                className="w-full bg-black/40 rounded-lg px-4 py-3 text-sm border outline-none resize-none"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
                placeholder="Share a quick snapshot of your leads, delivery and operations…"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)] gap-4 items-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-3 bg-black text-white"
                style={{ border: `1px solid ${LIME}` }}
              >
                Send My Blueprint
                <ArrowRight className="w-4 h-4" style={{ color: LIME }} />
              </button>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                We&apos;ll review your submission and reply within two business days with a tailored systems outline—no
                spam, no fluffy sales deck.
              </p>
            </div>
          </form>
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
          © 2026 · Advanced AI Architecture
        </div>
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
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
      <StrategyArchitectureSection />
      <AutomatedLeadSystemsSection />
      <ProofAndTestimonialsSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
}
