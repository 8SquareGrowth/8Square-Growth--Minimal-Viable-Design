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

const PAIN_POINTS = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "No Time to Scale",
    desc: "You're billing $20k–$30k/month, but every hour goes to client delivery. There's no room left to grow.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Inconsistent Lead Flow",
    desc: "Your pipeline is feast-or-famine. Without automated nurturing, hot leads go cold while you're heads-down.",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Manual Repetitive Tasks",
    desc: "Reporting, follow-ups, onboarding, content. You're paying team members to do work an AI should handle.",
  },
];

const PROCESS = [
  {
    id: "01",
    phase: "Architect",
    title: "Map Your Growth Levers",
    desc: "We audit your agency's entire workflow—lead gen, delivery, client comms—and identify the exact AI entry points that will unlock growth without adding headcount.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    id: "02",
    phase: "Content",
    title: "Build the System Engine",
    desc: "Our engineers deploy bespoke AI agents and automations into your existing stack. CRM, Slack, email, proposals—all intelligently connected and running on autopilot.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "03",
    phase: "Income",
    title: "Activate Scalable Revenue",
    desc: "With freed-up capacity and consistent lead flow, you stop exchanging time for money. Your agency grows its revenue without growing its problems.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const SERVICES = [
  {
    title: "AI Chat & Voice Agents",
    desc: "24/7 client support and lead qualification bots that handle objections, book calls, and nurture leads—so your team can focus on billable work.",
    icon: <MessageSquare className="w-6 h-6" />,
    metric: "Save 20+ hrs/week",
  },
  {
    title: "Workflow Automation",
    desc: "Connect your entire tech stack. Proposals, contracts, onboarding sequences, and reporting all run automatically from a single trigger.",
    icon: <Zap className="w-6 h-6" />,
    metric: "85% faster delivery",
  },
  {
    title: "Lead Nurture Sequences",
    desc: "Multi-channel AI sequences that follow up with leads at exactly the right time with the right message—no manual effort required.",
    icon: <Target className="w-6 h-6" />,
    metric: "+45% close rate",
  },
  {
    title: "AI Growth Strategy",
    desc: "A custom 90-day AI roadmap built for your agency. We identify where automation compounds—so every system we build pays for itself.",
    icon: <BarChart3 className="w-6 h-6" />,
    metric: "Proven ROI framework",
  },
];

const METRICS = [
  { val: "500+", label: "AI Systems Deployed" },
  { val: "50k+", label: "Hours Saved for Clients" },
  { val: "$2M+", label: "Revenue Unlocked" },
  { val: "14d", label: "Avg. Time to Live" },
];

const REVIEWS = [
  {
    name: "Amy Louise",
    role: "Agency Owner · $25k/mo",
    text: "In 6 weeks, 8Square automated our entire onboarding and reporting. We added two new clients without hiring anyone.",
    img: "https://i.pravatar.cc/150?u=amy",
  },
  {
    name: "Benjamin Daul",
    role: "Head of Growth · $28k/mo",
    text: "Our lead follow-up used to fall through the cracks constantly. Now the AI handles it and our close rate is up 40%.",
    img: "https://i.pravatar.cc/150?u=ben",
  },
  {
    name: "Jesse Leigh",
    role: "Founder · $22k/mo",
    text: "This is the best investment I've made for my agency. We went from overwhelmed to operating like a $100k/mo business.",
    img: "https://i.pravatar.cc/150?u=jesse",
  },
  {
    name: "Mateo Alvarez",
    role: "Growth Director · $30k/mo",
    text: "From strategy call to live AI agent in 12 days. The quality of inbound leads we're now converting is a step-change.",
    img: "https://i.pravatar.cc/150?u=mateo",
  },
];

const PRICING = [
  {
    name: "Accelerator",
    price: "499",
    desc: "The perfect entry point to start automating.",
    feats: [
      "1 AI Agent Build",
      "Workflow audit & map",
      "2 CRM integrations",
      "Email support",
      "30-day onboarding",
    ],
  },
  {
    name: "Scale",
    price: "799",
    popular: true,
    desc: "The complete system for agencies ready to grow.",
    feats: [
      "3 AI Agent Builds",
      "Priority Slack support",
      "5 Stack integrations",
      "RAG knowledge base",
      "Lead nurture sequences",
      "Monthly optimization",
    ],
  },
  {
    name: "Dominance",
    price: "999",
    desc: "A dedicated growth partner for top-tier agencies.",
    feats: [
      "Unlimited builds",
      "Dedicated PM",
      "Enterprise security",
      "Custom SOPs & playbooks",
      "SLA guarantee",
      "Quarterly strategy session",
    ],
  },
];

const FAQS = [
  {
    q: "What does my membership include?",
    a: "Full-service AI architecture, agent deployment, stack integrations, and 24/7 system monitoring. You get a dedicated team that operates as your AI growth arm.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most agencies see their first AI agent live within 7–14 business days. Measurable efficiency gains typically appear in the first 30 days—before you've paid a second month.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Zero. We handle everything from architecture to deployment. You simply tell us your biggest bottleneck and we build the system that solves it.",
  },
  {
    q: "Can I cancel or pause anytime?",
    a: "Yes. Our plans are fully flexible with no lock-in contracts. Pause or cancel with 30 days notice whenever your parameters change.",
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

function TickerCard({ label, metric, icon }: { label: string; metric: string; icon: React.ReactNode }) {
  return (
    <div
      className="glass-card flex items-center gap-4 px-5 py-3.5 rounded-lg shrink-0 cursor-default select-none"
      style={{ minWidth: 240, border: "1px solid rgba(255,255,255,0.08)" }}
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
            src="/Logo/8Square-Logo-Dark (1).png"
            alt="8Square Growth"
            className="h-10 w-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          {["Services", "Process", "Pricing", "Reviews"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {l}
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      {/* Atmospheric grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-8 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-7xl md:text-[88px] font-bold leading-[1.02] tracking-tight mb-8"
        >
          <span className="text-gradient">Structured AI Solutions</span>
          <br />
          <span className="text-gradient">For Scalable Growth</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12 font-light"
        >
          We build AI growth systems for agencies billing{" "}
          <span className="text-white font-medium">$20k–$30k/month</span> who are ready to scale—without scaling their problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(87,255,30,0.25)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-primary-cta"
            className="px-10 py-4 rounded-full text-black font-black uppercase tracking-widest text-xs transition-all"
            style={{ background: LIME }}
          >
            See Our Pricing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.07)" }}
            whileTap={{ scale: 0.97 }}
            id="hero-secondary-cta"
            className="px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Service Ticker Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-12 pb-20 w-full overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)" }}
      >
        {/* Row 1 — scrolls left */}
        <div className="mb-3">
          <div className="service-ticker-track row-1" id="ticker-row-1">
            {TICKER_ROW_1.map((item, i) => (
              <React.Fragment key={i}>
                <TickerCard label={item.label} metric={item.metric} icon={item.icon} />
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div>
          <div className="service-ticker-track row-2" id="ticker-row-2">
            {TICKER_ROW_2.map((item, i) => (
              <React.Fragment key={i}>
                <TickerCard label={item.label} metric={item.metric} icon={item.icon} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(transparent, #050505)" }} />
    </section>
  );
}

// ─── Pain Points ──────────────────────────────────────────────────────────────

function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-32 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <SectionLabel>// The Real Problem</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
            You're Not Short on Clients.<br />You're Short on Systems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="glass-card glass-card-hover rounded-xl p-8 group"
              id={`pain-point-${i}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: "rgba(87,255,30,0.08)",
                  color: LIME,
                  border: "1px solid rgba(87,255,30,0.15)",
                }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="py-32" style={{ background: "#070707" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <SectionLabel>// AI Solutions</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient max-w-xl leading-tight">
            Automate What's Eating Your Margin.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="glass-card glass-card-hover rounded-xl p-8 group flex gap-6"
              id={`service-card-${i}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1"
                style={{
                  background: "rgba(87,255,30,0.08)",
                  color: LIME,
                  border: "1px solid rgba(87,255,30,0.12)",
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-lime transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "rgba(87,255,30,0.08)", color: LIME, border: "1px solid rgba(87,255,30,0.15)" }}
                >
                  {s.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────

function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 border-y"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(87,255,30,0.02)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
            id={`metric-${i}`}
          >
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: LIME }}
            >
              {m.val}
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <SectionLabel>// How We Work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Architect. Content. Income.
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            A simple 3-phase framework engineered to compound your agency's revenue over 90 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="relative"
              id={`process-step-${i}`}
            >
              {/* Connector line (desktop) */}
              {i < PROCESS.length - 1 && (
                <div
                  className="absolute hidden md:block top-6 left-full w-full h-px -translate-y-1/2 z-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(87,255,30,0.3), rgba(87,255,30,0.05))",
                    width: "calc(100% - 48px)",
                    left: "calc(100% + 8px)",
                  }}
                />
              )}

              <div
                className="glass-card glass-card-hover rounded-xl p-8 h-full relative z-10"
              >
                {/* Phase badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6"
                  style={{
                    background: "rgba(87,255,30,0.08)",
                    color: LIME,
                    border: "1px solid rgba(87,255,30,0.15)",
                  }}
                >
                  {p.id} — {p.phase}
                </div>

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(87,255,30,0.08)",
                    color: LIME,
                    border: "1px solid rgba(87,255,30,0.12)",
                  }}
                >
                  {p.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" ref={ref} className="py-32" style={{ background: "#070707" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mb-24"
        >
          <SectionLabel>// Membership</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Predictable Investment.<br />Exponential Returns.
          </h2>
          <p className="text-zinc-500 text-lg">
            Built for agencies making $20k–$30k/month who are ready to stop leaving growth on the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="rounded-xl relative flex flex-col"
              id={`pricing-card-${i}`}
              style={{
                background: p.popular ? "rgba(87,255,30,0.05)" : "rgba(255,255,255,0.02)",
                border: p.popular ? `1px solid rgba(87,255,30,0.4)` : "1px solid rgba(255,255,255,0.07)",
                boxShadow: p.popular ? "0 0 60px rgba(87,255,30,0.08)" : "none",
              }}
            >
              {p.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-black text-[10px] font-black uppercase tracking-widest"
                  style={{ background: LIME }}
                >
                  Best ROI
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-8">
                  <div className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">{p.name}</div>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-sm text-zinc-500 font-bold mb-2">$</span>
                    <span className="text-6xl font-bold text-white">{p.price}</span>
                    <span className="text-sm text-zinc-600 mb-2">/mo</span>
                  </div>
                  <p className="text-zinc-500 text-sm">{p.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {p.feats.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                      <Check className="w-4 h-4 shrink-0" style={{ color: LIME }} />
                      {f}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  id={`pricing-select-${i}`}
                  className="w-full py-4 rounded-lg font-black uppercase tracking-widest text-xs transition-all"
                  style={
                    p.popular
                      ? { background: LIME, color: "#000" }
                      : {
                        background: "rgba(255,255,255,0.05)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                  }
                >
                  Select Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <SectionLabel>// Client Results</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            What Agencies Say After 90 Days.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="glass-card glass-card-hover rounded-xl p-8 group relative overflow-hidden"
              id={`review-card-${i}`}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "rgba(87,255,30,0.06)" }}
              />
              <p className="text-lg font-light italic mb-8 text-zinc-300 leading-relaxed relative z-10">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={r.img}
                  className="w-11 h-11 rounded-full border grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{ borderColor: "rgba(87,255,30,0.2)" }}
                  alt={r.name}
                />
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wide">{r.name}</h4>
                  <p className="text-[11px] text-zinc-500 font-medium mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ + CTA ────────────────────────────────────────────────────────────────

function FaqAndCta() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-32 border-t overflow-hidden relative"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "#070707" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* FAQ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionLabel>// Common Questions</SectionLabel>
          <h2 className="text-4xl font-bold text-gradient mb-10">Frequent Queries</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                id={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                  style={{ background: openFaq === i ? "rgba(87,255,30,0.03)" : "transparent" }}
                >
                  <span className="font-semibold text-sm text-white">{f.q}</span>
                  {openFaq === i ? (
                    <Minus className="w-4 h-4 shrink-0 ml-4" style={{ color: LIME }} />
                  ) : (
                    <Plus className="w-4 h-4 shrink-0 ml-4 text-zinc-600" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-5 text-zinc-500 text-sm leading-relaxed border-t"
                        style={{ borderColor: "rgba(255,255,255,0.05)", paddingTop: "16px" }}
                      >
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: LIME }}
          id="cta-card"
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          <div className="relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/50 mb-6">
              // Ready to Scale?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-5">
              Let's Build Your Growth Engine.
            </h2>
            <p className="text-black/65 mb-10 text-base leading-relaxed">
              Book a free 30-min strategy call. We'll audit your agency's biggest bottleneck and show you exactly which AI system will unlock your next $10k/month.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#111" }}
              whileTap={{ scale: 0.97 }}
              id="cta-primary-btn"
              className="px-10 py-4 bg-black rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all"
              style={{ color: LIME }}
            >
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
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
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 flex items-center justify-center rounded-sm font-black text-black text-xs"
            style={{ background: LIME }}
          >
            8S
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
            8Square Growth
          </span>
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
      <PainPoints />
      <Services />
      <Metrics />
      <Process />
      <Pricing />
      <Reviews />
      <FaqAndCta />
      <Footer />
    </div>
  );
}
