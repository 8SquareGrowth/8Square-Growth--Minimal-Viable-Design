import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  ShieldCheck,
  Users,
  MessageSquare,
  Cpu,
  ChevronRight,
  Plus,
  Minus,
  Check
} from "lucide-react";

// --- Data Constants ---

const SERVICES = [
  {
    title: "Chatbot Development",
    desc: "Custom AI support systems for instant resolution.",
    icon: <MessageSquare className="w-6 h-6 text-electric-lime" />
  },
  {
    title: "Tools Integrations",
    desc: "Seamlessly connecting AI to your CRM and workflow stack.",
    icon: <Zap className="w-6 h-6 text-electric-lime" />
  },
  {
    title: "Automated Workflows",
    desc: "Ending manual labor with clinical automation logic.",
    icon: <Cpu className="w-6 h-6 text-electric-lime" />
  },
  {
    title: "AI Strategy",
    desc: "Expert roadmapping for long-term scalable growth.",
    icon: <BarChart3 className="w-6 h-6 text-electric-lime" />
  }
];

const PROCESS = [
  { id: "01", title: "Subscribe", desc: "Choose your plan and launch in minutes." },
  { id: "02", title: "Analyze", desc: "We audit your workflows to find AI leverage." },
  { id: "03", title: "Build", desc: "Our engineers craft bespoke, secure solutions." },
  { id: "04", title: "Optimise", desc: "Iterative testing until peak performance." }
];

const METRICS = [
  { val: "500+", label: "Deployments", icon: <CheckCircle2 className="w-8 h-8 opacity-20" /> },
  { val: "50k+", label: "Hours Saved", icon: <Zap className="w-8 h-8 opacity-20" /> },
  { val: "85%", label: "Faster Logic", icon: <Cpu className="w-8 h-8 opacity-20" /> },
  { val: "$2M+", label: "ROI Delivered", icon: <BarChart3 className="w-8 h-8 opacity-20" /> }
];

const REVIEWS = [
  {
    name: "Amy Louise", role: "Customer Success",
    text: "Our internal processes were optimized beyond expectations. Clean, fast, and impactful.",
    img: "https://i.pravatar.cc/150?u=amy"
  },
  {
    name: "Benjamin Daul", role: "Head of Engineering",
    text: "The precision of their integration logic is unmatched. Significant savings across the board.",
    img: "https://i.pravatar.cc/150?u=ben"
  },
  {
    name: "Jesse Leigh", role: "CEO & Founder",
    text: "The best investment for our business scaling. Their AI doesn't just work; it excels.",
    img: "https://i.pravatar.cc/150?u=jesse"
  },
  {
    name: "Mateo Alvarez", role: "Head of Growth",
    text: "From brief to live AI agent in days. Inbound lead quality improved noticeably.",
    img: "https://i.pravatar.cc/150?u=mateo"
  }
];

const PRICING = [
  {
    name: "Starter", price: "499",
    feats: ["One pilot", "Workflow audit", "2 Integrations", "Email support"]
  },
  {
    name: "Pro", price: "799", popular: true,
    feats: ["Two pilots", "Slack support", "5 Integrations", "RAG Setup", "Monitoring"]
  },
  {
    name: "Enterprise", price: "999",
    feats: ["Unlimited builds", "PM support", "Global security", "Custom SOPs", "SLA Guarantee"]
  }
];

const FAQS = [
  { q: "What does membership include?", a: "Full access to our AI architecture, deployment, and 24/7 system monitoring." },
  { q: "How fast is implementation?", a: "We typically move from audit to first deployment within 7–14 business days." },
  { q: "Can I cancel anytime?", a: "Yes, our monthly plans are flexible. Pause or cancel whenever your parameters change." }
];

// --- Components ---

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-electric-lime flex items-center justify-center rounded-sm">
            <div className="w-5 h-5 border-2 border-black"></div>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">8Square</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#services" className="hover:text-electric-lime transition-colors">Services</a>
          <a href="#process" className="hover:text-electric-lime transition-colors">Process</a>
          <a href="#pricing" className="hover:text-electric-lime transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-electric-lime transition-colors">Reviews</a>
        </div>
        <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
          Connect
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-electric-lime/10 blur-[120px] rounded-full opacity-50"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-electric-lime/20 bg-electric-lime/5 text-electric-lime text-[10px] font-black tracking-[0.2em] uppercase mb-10">
            Available for Work
          </span>
          <h1 className="text-6xl md:text-[90px] font-light leading-[1] tracking-tight mb-8 text-gradient">
            Structured AI Solutions <br />
            <span className="text-zinc-600">For Scalable Growth</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Supercharge your workflow with clinical-grade AI automation. We architect growth systems for the digital-first era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-electric-lime text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
              Start Your Build
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              View Systems
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-black text-white selection:bg-electric-lime selection:text-black min-h-screen font-sans">
      <Nav />
      <Hero />

      {/* Services Grid */}
      <section id="services" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-electric-lime text-xs font-black uppercase tracking-widest">// AI Solutions</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 text-gradient">Automate with Precision.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-8 border border-white/5 bg-zinc-900/30 rounded-sm hover:border-electric-lime/30 transition-all group">
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-electric-lime transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {METRICS.map((m, i) => (
            <div key={i} className="text-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{m.icon}</div>
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{m.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light">How We Move</h2>
            <div className="w-24 h-1 bg-electric-lime mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS.map((p, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-black text-white/5 absolute -top-8 -left-4">{p.id}</div>
                <div className="relative z-10 pt-4 border-t border-white/10 group">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    {p.title} <ArrowRight className="w-4 h-4 text-electric-lime opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl font-light mb-6">Scale Your Operations</h2>
            <p className="text-zinc-500 text-lg">Predictable pricing for clinical-grade results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((p, i) => (
              <div key={i} className={`p-10 border ${p.popular ? 'border-electric-lime bg-electric-lime/5' : 'border-white/5 bg-zinc-900/20'} rounded-sm relative flex flex-col`}>
                {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-lime text-black text-[10px] font-black uppercase tracking-widest rounded-full">Best ROI</div>}
                <div className="mb-10 text-center">
                  <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">{p.name}</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs text-zinc-500 font-bold">$</span>
                    <span className="text-6xl font-bold">{p.price}</span>
                    <span className="text-sm text-zinc-600">/mo</span>
                  </div>
                </div>
                <div className="space-y-5 mb-12 flex-grow">
                  {p.feats.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                      <Check className="w-4 h-4 text-electric-lime" /> {f}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 font-black uppercase tracking-widest text-xs transition-all ${p.popular ? 'bg-electric-lime text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-10 bg-zinc-900/30 border border-white/5 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-lime/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-xl font-light italic mb-10 text-zinc-300 relative z-10">"{r.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={r.img} className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" alt={r.name} />
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-widest">{r.name}</h4>
                    <p className="text-xs text-zinc-500 font-medium">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-32 bg-zinc-950 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-light mb-12">Frequent Queries</h2>
            <div className="space-y-4">
              {FAQS.map((f, i) => (
                <div key={i} className="border border-white/5 bg-black/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">{f.q}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-electric-lime" /> : <Plus className="w-5 h-5 text-zinc-600" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-electric-lime p-16 rounded-sm text-black relative group">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <h2 className="text-5xl font-bold mb-6 tracking-tighter leading-none italic uppercase">Ready for Clinical Automation?</h2>
            <p className="text-black/70 mb-10 text-lg">Send us a message and we'll audit your system within 24 hours.</p>
            <button className="px-10 py-5 bg-black text-electric-lime font-black uppercase tracking-[0.2em] text-xs flex items-center gap-3">
              Initialize connection <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
          © 2026 8Square Growth / Advanced AI Architecture
        </div>
      </footer>
    </div>
  );
}
