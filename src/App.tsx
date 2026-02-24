/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight
} from "lucide-react";
import { useState, useRef } from "react";

const services = [
  "Voice Support Assistant",
  "Lead Qualification Bot",
  "RAG Knowledge Search",
  "Sales Email Drafter",
  "Calendar Booking Concierge",
  "Data Cleanup & Sync",
  "Post-Purchase Care Bot",
  "Payment Recovery Nudges"
];

const valueProps = [
  {
    id: "prop-1",
    number: "01",
    title: "Precision Architecture",
    description: "We don't just build; we architect growth systems with mathematical precision. Every workflow is calculated to maximize ROI and minimize friction.",
    icon: <Cpu className="w-8 h-8 text-electric-lime" />
  },
  {
    id: "prop-2",
    number: "02",
    title: "Data-Driven Intelligence",
    description: "Our solutions are anchored in deep analytics. We turn raw data into actionable intelligence that drives your business forward at velocity.",
    icon: <BarChart3 className="w-8 h-8 text-electric-lime" />
  },
  {
    id: "prop-3",
    number: "03",
    title: "Seamless Integration",
    description: "AI that feels like a natural extension of your team. We plug directly into your existing stack, ensuring zero downtime and immediate impact.",
    icon: <Zap className="w-8 h-8 text-electric-lime" />
  }
];

const testimonials = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    content: "8 Square Growth transformed our lead qualification process. We've seen a 40% increase in conversion rates since implementing their custom AI bots.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: "test-2",
    name: "Marcus Thorne",
    role: "Ops Director, ScaleUp",
    content: "The precision they bring to automation is unmatched. It's not just about saving time; it's about the clinical accuracy of their systems.",
    image: "https://picsum.photos/seed/marcus/100/100"
  }
];

export default function App() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. Our architects will contact you shortly.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-electric-lime selection:text-vampire-black">
      {/* Navigation */}
      <nav id="nav" className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
        <div id="logo" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-electric-lime rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-vampire-black"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">8 Square</span>
        </div>
        <div id="nav-links" className="hidden md:flex items-center gap-8 text-sm font-medium text-spanish-gray">
          <a href="#services" className="hover:text-electric-lime transition-colors">Services</a>
          <a href="#propositions" className="hover:text-electric-lime transition-colors">Propositions</a>
          <a href="#proof" className="hover:text-electric-lime transition-colors">Proof</a>
          <a href="#contact" className="hover:text-electric-lime transition-colors">Contact</a>
        </div>
        <button id="nav-cta" className="px-6 py-2 bg-white/5 border border-white/10 rounded-sm text-sm font-medium hover:bg-white/10 transition-all">
          Connect
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-32 overflow-hidden horizon-glow">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-electric-lime/30 bg-electric-lime/5 text-electric-lime text-xs font-bold tracking-widest uppercase mb-8">
              High-Performance Growth Architecture
            </span>
            <h1 className="text-[60px] md:text-[130px] font-thin leading-[0.9] tracking-[-0.04em] mb-8 text-gradient">
              Engineered <br /> For Scale.
            </h1>
            <p className="max-w-2xl mx-auto text-granite-gray text-lg md:text-xl mb-12 leading-relaxed">
              We build clinical-grade AI systems that automate your most complex B2B workflows, 
              allowing your brand to move with the precision of an architect and the speed of light.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button id="hero-cta-primary" className="group relative px-10 py-4 bg-electric-lime text-vampire-black font-bold rounded-sm overflow-hidden transition-all hover:scale-105 neon-glow">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Build <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button id="hero-cta-secondary" className="px-10 py-4 bg-white/5 border border-white/10 text-anti-flash-white font-bold rounded-sm hover:bg-white/10 transition-all">
                View Systems
              </button>
            </div>
          </motion.div>
        </div>

        {/* Service Marquee */}
        <div id="services" className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-vampire-black via-transparent to-vampire-black z-10 pointer-events-none"></div>
          <div className="flex overflow-hidden whitespace-nowrap py-8 border-y border-white/5 bg-raisin-black/30">
            <div className="flex animate-marquee">
              {[...services, ...services].map((service, i) => (
                <div key={i} className="flex items-center gap-4 px-12">
                  <div className="w-2 h-2 bg-electric-lime rounded-full"></div>
                  <span className="text-2xl font-light tracking-tight text-spanish-gray uppercase">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="propositions" className="py-32 bg-vampire-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 select-none">
                  {prop.number}
                </div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-raisin-black w-fit rounded-sm border border-white/5 group-hover:border-electric-lime/50 transition-colors">
                    {prop.icon}
                  </div>
                  <h3 className="text-3xl font-light mb-4 text-anti-flash-white">{prop.title}</h3>
                  <p className="text-granite-gray leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nymera Replicated Section */}
      <section id="full-cycle" className="py-32 bg-raisin-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-lime/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <span className="text-electric-lime font-mono text-sm mb-4 block tracking-widest uppercase">// Full-Cycle Development</span>
              <h2 className="text-[50px] md:text-[70px] font-light leading-tight mb-8">
                B2B Full-Cycle Product Development Bureau for <span className="text-electric-lime">Innovative SaaS Brands</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-1 bg-electric-lime/10 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-electric-lime" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Strategic Discovery</h4>
                    <p className="text-spanish-gray">We dive deep into your business logic to uncover hidden growth levers.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-1 bg-electric-lime/10 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-electric-lime" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Rapid Prototyping</h4>
                    <p className="text-spanish-gray">Move from concept to functional prototype in record time without cutting corners.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-1 bg-electric-lime/10 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-electric-lime" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Enterprise Deployment</h4>
                    <p className="text-spanish-gray">Secure, scalable, and fully integrated systems that work from day one.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <Users className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">12+</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Core Architects</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <Zap className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">48h</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Rapid Response</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <MessageSquare className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">24/7</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">System Monitoring</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <ShieldCheck className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">100%</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Security Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Testimonials */}
      <section id="proof" className="py-32 bg-vampire-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-4">Validated Performance</h2>
            <p className="text-spanish-gray">Don't take our word for it. Trust the data and our partners.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-electric-lime/10 blur-3xl rounded-full"></div>
              <img 
                src="https://picsum.photos/seed/growth/800/600" 
                alt="Growth Metrics" 
                className="relative z-10 w-full rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-12">
              {testimonials.map((test) => (
                <div key={test.id} className="p-8 glass-card rounded-sm border-l-4 border-l-electric-lime">
                  <p className="text-xl italic mb-8 text-anti-flash-white">"{test.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                    <div>
                      <h5 className="font-bold text-anti-flash-white">{test.name}</h5>
                      <p className="text-sm text-granite-gray">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-raisin-black horizon-glow">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Initialize Connection</h2>
            <p className="text-spanish-gray">Ready to architect your growth? Fill out the parameters below.</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-granite-gray">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-vampire-black border border-white/10 px-6 py-4 rounded-sm focus:border-electric-lime outline-none transition-colors"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-granite-gray">Corporate Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-vampire-black border border-white/10 px-6 py-4 rounded-sm focus:border-electric-lime outline-none transition-colors"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-granite-gray">Project Parameters</label>
              <textarea 
                rows={5}
                required
                className="w-full bg-vampire-black border border-white/10 px-6 py-4 rounded-sm focus:border-electric-lime outline-none transition-colors resize-none"
                placeholder="Describe your current bottlenecks..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-electric-lime text-vampire-black font-bold uppercase tracking-widest rounded-sm hover:scale-[1.02] transition-all neon-glow">
              Send Transmission
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-vampire-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-electric-lime rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 border border-vampire-black"></div>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">8 Square Growth</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-granite-gray hover:text-electric-lime transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-granite-gray hover:text-electric-lime transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-granite-gray hover:text-electric-lime transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
            
            <p className="text-granite-gray text-sm">
              © 2026 8 Square Growth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
