import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Sparkles,
  Users,
  Rocket,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Clock,
  Globe,
  Heart
} from "lucide-react";

const About = () => {
  // Interactive state for the "Our Pillars" section
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: Users,
      badge: "Community First",
      title: "Empowering 50K+ Active Shoppers",
      description: "We don't just process orders; we build connections. By listening directly to user feedback, we continuously refine our platform to create an environment where quality meets absolute convenience.",
      metric: "50,000+",
      metricLabel: "Verified Users"
    },
    {
      id: 1,
      icon: Rocket,
      badge: "Velocity",
      title: "Next-Generation Logistics Infrastructure",
      description: "Waiting is a thing of the past. Our decentralized fulfillment framework routes your products from the closest local node, cutting traditional transit times by up to 40%.",
      metric: "1.8 Days",
      metricLabel: "Average Delivery"
    },
    {
      id: 2,
      icon: ShieldCheck,
      badge: "Security",
      title: "Uncompromising Trust & Fraud Prevention",
      description: "Every merchant on SkyMart passes through a rigorous multi-tier verification process. Your transactions, data, and post-purchase warranties are completely protected end-to-end.",
      metric: "99.9%",
      metricLabel: "Secure Escrow"
    },
    {
      id: 3,
      icon: Sparkles,
      badge: "Curation",
      title: "Handpicked Premium Standards",
      description: "We filter out the noise. Instead of overwhelming you with endless low-tier listings, our curation algorithms prioritize authentic, long-lasting products engineered to perform.",
      metric: "4.9/5",
      metricLabel: "Quality Rating"
    }
  ];

  const timelineMilestones = [
    { year: "2022", title: "The Spark", desc: "SkyMart founded in a small garage with 3 developers and 1 objective: kill slow shipping." },
    { year: "2024", title: "Nationwide Node", desc: "Expanded fulfillment footprint across 15 major metro hubs, passing 10k daily orders." },
    { year: "2026", title: "The Next Phase", desc: "Integrating intelligent localized supply routing to predict and ship before you even click buy." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Missing Navbar added */}

      {/* Hero Section: Elevated layout with tightened top padding */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Behind the Blueprint
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Reinventing the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500">
                Velocity of Commerce
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              SkyMart bridges the gap between premium global supply chains and hyper-local fast delivery, removing the friction from modern digital retail.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#explore-pillars" className="bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 px-6 py-3.5 rounded-xl font-medium shadow-md shadow-slate-900/10 inline-flex items-center gap-2 group text-sm">
                See How It Works
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive/Visual Abstract Layout instead of stock photos */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-linear-to-tr from-orange-400/20 to-amber-300/10 rounded-3xl blur-3xl -z-10 transform scale-95"></div>
            
            <div className="border border-slate-200/80 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">skymart_core_v2.1</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                    <Clock className="text-orange-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-semibold text-sm">Predictive Inventory</h4>
                      <p className="text-xs text-slate-500">Stocking products based on neighborhood demand shifts before checkout.</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                    <Globe className="text-amber-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-semibold text-sm">Zero-Carbon Corridors</h4>
                      <p className="text-xs text-slate-500">Optimized multi-drop delivery paths aiming for net-neutral impact footprint.</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                    <Heart className="text-rose-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-semibold text-sm">Vetted Direct Partnerships</h4>
                      <p className="text-xs text-slate-500">Bypassing unnecessary wholesalers to secure margins for our consumers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Tabs Section: Deep Dive into Brand Attributes */}
      <section id="explore-pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200/60">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Engineered for a frictionless journey.
          </h2>
          <p className="mt-4 text-slate-600">
            Click through our operational core pillars to explore how we differ from legacy massive marketplaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Selector list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-orange-500 shadow-md shadow-orange-500/5 text-slate-900 font-semibold"
                      : "bg-transparent border-slate-200/70 text-slate-500 hover:bg-slate-100/70 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isSelected ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-sm tracking-wide">{pillar.badge}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${
                    isSelected ? "translate-x-1 text-orange-500" : "text-slate-300 group-hover:translate-x-0.5"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Pane */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-4xl p-8 sm:p-10 shadow-xl relative min-h-85 flex flex-col justify-between transition-all duration-300">
            <div className="space-y-4">
              <span className="text-xs font-bold text-orange-600 tracking-widest uppercase block bg-orange-50 w-fit px-2.5 py-1 rounded-md">
                {pillars[activeTab].badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {pillars[activeTab].title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base pt-2">
                {pillars[activeTab].description}
              </p>
            </div>

            {/* Dynamic Metric Display Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-baseline gap-4">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight transition-all">
                {pillars[activeTab].metric}
              </span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                — {pillars[activeTab].metricLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="bg-slate-900 text-white py-24 my-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ea580c,transparent_25%)] opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Our Timeline Matrix</h2>
            <p className="text-slate-400 mt-4">
              How a highly specialized micro-fulfillment objective grew into a national supply chain alternative.
            </p>
          </div>

          {/* Chronological Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800/80 transition-all">
                <div className="text-orange-500 font-mono font-bold text-lg mb-2 block">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {milestone.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {milestone.desc}
                </p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-slate-700">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sleek, Non-Banner CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="border border-slate-200 bg-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-orange-500 to-amber-400"></div>
          
          <div className="max-w-xl text-left space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Ready to test the speed?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Experience dynamic contextual routing and highly reliable logistics setups firsthand. Browse the new catalog layout.
            </p>
          </div>

          <div className="shrink-0">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md shadow-orange-500/10 active:scale-95 text-sm uppercase tracking-wider">
              Explore Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;