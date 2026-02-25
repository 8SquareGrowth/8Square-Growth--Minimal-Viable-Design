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
import React, { useState, useRef } from "react";

const services = [
  "Chatbot Development",
  "Tools integrations",
  "Automated Workflows",
  "AI Strategy"
];

const process = [
  {
    id: "step-1",
    number: "01",
    title: "Subscribe",
    description: "Choose your plan and launch in minutes—upgrade, pause, or cancel anytime.",
    icon: <Cpu className="w-8 h-8 text-electric-lime" />
  },
  {
    id: "step-2",
    number: "02",
    title: "Analyze",
    description: "We begin by auditing your workflows to pinpoint where AI can streamline and elevate your processes.",
    icon: <BarChart3 className="w-8 h-8 text-electric-lime" />
  },
  {
    id: "step-3",
    number: "03",
    title: "Build & Implement",
    description: "Next, our engineers craft bespoke AI solutions for your company—relentlessly prioritizing quality and safety.",
    icon: <Zap className="w-8 h-8 text-electric-lime" />
  },
  {
    id: "step-4",
    number: "04",
    title: "Test & Optimise",
    description: "You approve or request revisions—we iterate fast, polishing each build until you’re fully satisfied.",
    icon: <CheckCircle2 className="w-8 h-8 text-electric-lime" />
  }
];

const testimonials = [
  {
    id: "test-1",
    name: "Amy Louise",
    role: "Customer Success Manager",
    content: "Thanks to their team, our internal processes were optimized, resulting in significant better results for my work.",
    image: "https://picsum.photos/seed/amy/100/100"
  },
  {
    id: "test-2",
    name: "Benjamin Daul",
    role: "Head of Engineering",
    content: "Thanks to their team, our internal processes were optimized, resulting in significant savings and better results.",
    image: "https://picsum.photos/seed/ben/100/100"
  },
  {
    id: "test-3",
    name: "Jesse Leigh",
    role: "CEO & Founder",
    content: "The best investment solution for our business! AI technologies not only save time, but also increase efficiency.",
    image: "https://picsum.photos/seed/jesse/100/100"
  },
  {
    id: "test-4",
    name: "Mateo Alvarez",
    role: "Head of Growth",
    content: "From brief to live AI agent in days. The site is fast, clear, and our inbound quality noticeably improved.",
    image: "https://picsum.photos/seed/mateo/100/100"
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
          <a href="#ai-solutions" className="hover:text-electric-lime transition-colors">Services</a>
          <a href="#process" className="hover:text-electric-lime transition-colors">Process</a>
          <a href="#pricing" className="hover:text-electric-lime transition-colors">Pricing</a>
          <a href="#proof" className="hover:text-electric-lime transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-electric-lime transition-colors">FAQ</a>
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
              Available for Work
            </span>
            <h1 className="text-[60px] md:text-[110px] font-thin leading-[0.9] tracking-[-0.04em] mb-8 text-gradient">
              Structured AI Solutions <br /> For Scalable Growth
            </h1>
            <p className="max-w-2xl mx-auto text-granite-gray text-lg md:text-xl mb-12 leading-relaxed">
              Supercharge your workflow with AI automation.
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
      {/* How We Work Section */}
      <section id="process" className="py-32 bg-vampire-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-4">How We Work</h2>
            <p className="text-spanish-gray">A structured approach to clinical-grade internal automation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-2 select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-raisin-black w-fit rounded-sm border border-white/5 group-hover:border-electric-lime/50 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-anti-flash-white">{step.title}</h3>
                  <p className="text-sm text-granite-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="py-32 bg-raisin-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-lime/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <span className="text-electric-lime font-mono text-sm mb-4 block tracking-widest uppercase">// AI Solutions</span>
              <h2 className="text-[50px] md:text-[70px] font-light leading-tight mb-8">
                From automation to <span className="text-electric-lime">advanced analytics</span>, we bring your vision to life.
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Chatbot Development", desc: "We build custom AI chat for instant support and streamlined operations." },
                  { title: "Tools integrations", desc: "We plug AI into your software, CRM systems, and marketing touchpoints." },
                  { title: "Automated Workflows", desc: "Automate workflows to streamline tasks, boost efficiency, and save time." },
                  { title: "AI Strategy", desc: "Get expert guidance to implement AI that fuels business growth." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 p-1 bg-electric-lime/10 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-electric-lime" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                      <p className="text-spanish-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <BarChart3 className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">500+</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Successful Deployments</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <Zap className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">50k+</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Hours Automated</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <Cpu className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">85%</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Reduction in Time</p>
                </div>
              </div>
              <div className="aspect-square bg-vampire-black border border-white/5 p-8 flex flex-col justify-between hover:border-electric-lime/30 transition-all">
                <ShieldCheck className="w-10 h-10 text-spanish-gray" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">$2M+</h5>
                  <p className="text-xs text-granite-gray uppercase tracking-widest">Cost Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section id="proof" className="py-32 bg-vampire-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-4">Client Reviews</h2>
            <p className="text-spanish-gray">Trusted by industry leaders to deliver clinical-grade automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 glass-card rounded-sm border-l-4 border-l-electric-lime h-full flex flex-col justify-between"
              >
                <p className="text-xl italic mb-8 text-anti-flash-white">"{test.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-anti-flash-white">{test.name}</h5>
                    <p className="text-sm text-granite-gray">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-32 bg-raisin-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-4">Pricing Plans</h2>
            <p className="text-spanish-gray">From first AI steps to enterprise scale—clear, flexible pricing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/mo",
                desc: "Start fast, prove value.",
                features: ["One pilot", "Full audit + 90-day plan", "Light workflow review", "Up to 2 integrations", "Email support (48h)"]
              },
              {
                name: "Pro",
                price: "$799",
                period: "/mo",
                desc: "Scale pilots into systems.",
                popular: true,
                features: ["Two pilots or 1 expanded build", "Up to 5 integrations", "Guardrails + human handoff", "Slack support", "RAG setup + monitoring"]
              },
              {
                name: "Enterprise",
                price: "$999",
                period: "/mo",
                desc: "Custom, secure, enterprise-grade.",
                features: ["Three+ solutions across teams", "Security & compliance review", "Unlimited integrations", "Dedicated PM", "Training program"]
              }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-sm border ${plan.popular ? 'border-electric-lime' : 'border-white/5'} bg-vampire-black relative group flex flex-col h-full`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-lime text-vampire-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-electric-lime">{plan.price}</span>
                    <span className="text-spanish-gray">{plan.period}</span>
                  </div>
                  <p className="text-sm text-granite-gray mt-4">{plan.desc}</p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-sm text-spanish-gray">
                      <CheckCircle2 className="w-4 h-4 text-electric-lime flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${plan.popular ? 'bg-electric-lime text-vampire-black hover:scale-[1.05]' : 'bg-white/5 text-anti-flash-white hover:bg-white/10'}`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-vampire-black">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Answers?</h2>
            <p className="text-spanish-gray">Common parameters and system queries.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What does the membership include?", a: "Unlimited access to our core AI tools, priority system updates, 24/7 monitoring, and white-glove support from our implementation architects." },
              { q: "How do I get started with your services?", a: "Simply select a plan above and complete your initial transmission. Our team will reach out within 24 hours to begin your system audit." },
              { q: "Can I cancel my membership anytime?", a: "Yes. Our systems are built for flexibility. You can pause, upgrade, or deactivate your membership parameters at any point through your dashboard." },
              { q: "Do I need technical expertise?", a: "Negative. We handle the clinical-grade architecture and deployment. You focus on the business growth while our AI handles the complex workflows." },
              { q: "Are there additional costs?", a: "No hidden fees. Your membership covers architecture, hosting, and constant optimization. API consumption beyond standard thresholds is billed at cost." },
              { q: "How often do you release updates?", a: "Daily. Our AI models and integration hooks are constantly evolving to maintain peak performance and security compliance." }
            ].map((faq, i) => (
              <details key={i} className="group bg-raisin-black/30 border border-white/5 rounded-sm overflow-hidden transition-all hover:border-electric-lime/30">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg text-anti-flash-white font-light">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-electric-lime transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-granite-gray leading-relaxed text-sm border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-raisin-black horizon-glow">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Let's Talk!</h2>
            <p className="text-spanish-gray">Send us a message and we will get back to you within 24 hours to arrange a call!</p>
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
