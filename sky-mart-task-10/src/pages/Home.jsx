import React from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  CircleDollarSign,
  Monitor, 
  Shirt, 
  Armchair, 
  Home as HomeIcon, 
  Dumbbell, 
  Watch,
  Star,
  Milk,
  Hourglass
} from 'lucide-react';
import { useNavigate } from 'react-router';

const SkyMartHome = () => {

  const navigate = useNavigate()
  // Mock Data mapped directly from your application footprint
  const stats = [
    { label: "Products Available", value: "20+" },
    { label: "Delivery Threshold", value: "Free on ₹999+" },
    { label: "Top Products", value: "5 Highly Rated" },
    { label: "Categories To Explore", value: "6 Total" }
  ];

  const categories = [
    { id: 1, name: "groceries", icon: ShoppingBag, count: 5, bg: "bg-blue-50 text-blue-600 border-blue-100" },
    { id: 2, name: "fragrances", icon: Milk, count: 5, bg: "bg-orange-50 text-orange-600 border-orange-100" },
    { id: 3, name: "furniture", icon: Armchair, count: 5, bg: "bg-purple-50 text-purple-600 border-purple-100" },
    { id: 4, name: "beauty", icon: Hourglass, count: 15, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  ];

  const topRated = [
    { id: 101, title: "Professional Camera Lens", price: 599.99, rating: 4.9 },
    { id: 102, title: "Ergonomic Office Chair", price: 199.99, rating: 4.8 },
    { id: 103, title: "4K Ultra HD Monitor", price: 349.99, rating: 4.7 },
    { id: 104, title: "Aromatherapy Diffuser", price: 49.99, rating: 4.6 },
    { id: 105, title: "Mechanical Keyboard", price: 149.99, rating: 4.8 }
  ];

  const newArrivals = [
    { id: 201, title: "Wireless Bluetooth Headphones", price: 99.99, badge: "New" },
    { id: 202, title: "Smart Watch Series 5", price: 299.99, badge: "Hot" },
    { id: 203, title: "Comfortable Cotton T-Shirt", price: 24.99, badge: "New" },
    { id: 204, title: "Ergonomic Office Chair", price: 199.99, badge: "Restocked" },
    { id: 205, title: "Stainless Steel Water Bottle", price: 34.99, badge: "New" }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-16">
        
        {/* Dynamic Greeting & Operational State Hub */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Workspace */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-4xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none"></div>
            
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                Good morning 👋 Welcome back, Latikesh!
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                Discover today's picks — <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500">hand-curated</span> quality.
              </h1>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                Explore an optimized localized pipeline featuring premier selections across electronics, fashion, and everyday essentials.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate("/main/shop")} className="bg-slate-900 text-white hover:bg-slate-800 transition-all px-6 py-3.5 rounded-xl font-medium text-sm inline-flex items-center gap-2 shadow-md shadow-slate-900/10">
                Shop Now <ArrowRight size={16} />
              </button>
              <button onClick={() => navigate("/main/shop")} className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all px-6 py-3.5 rounded-xl font-medium text-sm">
                View All Products
              </button>
            </div>
          </div>

          {/* Mini Realtime Cart Overview Status Box */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-4xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#ea580c,transparent_45%)] opacity-30"></div>
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-800 rounded-xl text-orange-500">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">0 Cart Items</h3>
                  <p className="text-xs text-slate-400">In your bag</p>
                </div>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-400">LIVE</span>
            </div>

            <div className="my-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Total Cart Value</span>
              <span className="text-4xl font-black tracking-tight text-white">$0.00</span>
              <p className="text-xs text-slate-400 mt-1">Ready to checkout at your convenience</p>
            </div>

            <button disabled className="w-full bg-slate-800 border border-slate-700 text-slate-400 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-not-allowed text-center relative z-10">
              Bag Empty
            </button>
          </div>
        </div>

        {/* Real-time Metric Data Tape */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm">
          {stats.map((stat, i) => (
            <div key={i} className="text-left p-2 border-r last:border-0 border-slate-100">
              <span className="text-xl sm:text-2xl font-black text-slate-900 block">{stat.value}</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Categories Section Matrix */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
              <p className="text-xs text-slate-500 mt-0.5">6 Core specialized channels available</p>
            </div>
            <button className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1 group">
              View All <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.id} className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer bg-white border-slate-200/80 group`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 transition-colors ${cat.bg}`}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 capitalize group-hover:text-orange-600 transition-colors">{cat.name}</h3>
                  <span className="text-xs text-slate-400 mt-1 block font-medium">{cat.count} items</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dual Array Product Split Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Top Rated Product Column */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                Top Rated <span className="text-xs font-normal text-slate-400">(See all)</span>
              </h2>
              <Sparkles size={16} className="text-amber-500" />
            </div>

            <div className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {topRated.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span className="flex items-center text-amber-500 gap-0.5">
                        <Star size={12} fill="currentColor" /> {item.rating}
                      </span>
                      <span>•</span>
                      <span>Verified Order</span>
                    </div>
                  </div>
                  <span className="text-sm font-black text-slate-900">${item.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* New Arrivals Product Column */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                New Arrivals <span className="text-xs font-normal text-slate-400">(See all)</span>
              </h2>
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            </div>

            <div className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {newArrivals.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                      <span className="text-[9px] font-extrabold uppercase tracking-wide bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded border border-orange-100">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Added recently</p>
                  </div>
                  <span className="text-sm font-black text-slate-900">${item.price}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Corporate Trust Matrix Badging */}
        <footer className="pt-8 border-t border-slate-200/80">
          <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Fast Delivery</h4>
                <p className="text-xs text-slate-500 mt-0.5">Same-day options on select nodes</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Secure Payments</h4>
                <p className="text-xs text-slate-500 mt-0.5">100% verified escrow checkouts</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <CircleDollarSign size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Best Prices</h4>
                <p className="text-xs text-slate-500 mt-0.5">Price-match guarantees structural</p>
              </div>
            </div>

          </div>

          {/* Copyright Stamp Block */}
          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
            <span>© 2026 SkyMart • Built with React + Redux + TanStack Query</span>
            <span className="font-mono tracking-wide text-[10px] bg-slate-100 px-2 py-1 rounded">v3.4.0-production</span>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default SkyMartHome;