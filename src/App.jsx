import React from 'react';
import {
  Leaf,
  Droplet,
  Sun,
  Wind,
  CheckCircle2,
  Package,
  Ruler,
  Sprout
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-green selection:text-white font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-panel border-0 rounded-none bg-white/90 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="text-brand-green h-6 w-6" />
          <span className="text-xl font-bold text-brand-green tracking-tight">happhygreenz</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-brand-green transition-colors">Features</a>
          <a href="#specs" className="hover:text-brand-green transition-colors">Specs</a>
          <a href="#science" className="hover:text-brand-green transition-colors">The Science</a>
        </div>
        <a href="#contact" className="bg-brand-green hover:bg-[#153825] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Bulk Order
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block bg-brand-accent/20 text-brand-green font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
            Corporate Gifting Collection
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1]">
            Root Cube <br />
            <span className="text-brand-green">4-4 Planter</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            An exquisitely crafted, compact 4-pot hydroponic system designed for modern offices, corporate wellness kits, and executive client gifting.
            Grow fresh culinary herbs and exotic plants with <strong className="text-brand-green">zero soil mess.</strong>
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="bg-brand-accent text-[#6b551f] font-bold px-6 py-3 rounded-lg shadow-sm">
              <span className="text-sm block font-medium opacity-80">STARTING FROM</span>
              <span className="text-2xl">₹999</span> <span className="text-sm font-medium">onwards</span>
            </div>
          </div>
        </div>

        {/* Hero Image with Overlay Logo */}
        <div className="md:w-1/2 relative group w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 -z-10 transition-transform group-hover:rotate-6"></div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
            <img
              src="/images/WhatsApp Image 2026-09-17 at 10.00.18.jpeg"
              alt="Root Cube Planter"
              className="w-full h-auto rounded-[2rem] object-cover aspect-square"
            />
            {/* The Custom Logo Overlay on the White Bucket */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center opacity-80 mix-blend-multiply pointer-events-none mt-12">
              <Sprout className="w-8 h-8 text-gray-500 mb-1 opacity-70" />
              <span className="text-2xl font-black tracking-widest text-gray-600 uppercase" style={{ fontFamily: 'sans-serif' }}>
                AGROWVITZ
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 glass-panel p-4 flex items-center gap-3 animate-bounce shadow-xl">
            <div className="bg-green-100 p-2 rounded-full">
              <Leaf className="text-brand-green w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Fully Customizable</p>
              <p className="text-sm font-bold text-gray-800">Your Logo Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Elevate Gifting with Sustainable Living</h2>
            <p className="text-gray-600 text-lg">
              Empower your stakeholders to grow fresh greenery right on their office desk, kitchen counter, or apartment balcony.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="/images/WhatsApp Image 2026-09-17 at 10.05.28.jpeg" alt="Kitchen Elegance" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Sun className="text-brand-accent w-6 h-6" /> Kitchen & Indoor Elegance
                </h3>
                <p className="text-gray-600">
                  Seamlessly integrates into modern kitchen or pantry aesthetics. Fresh basil and herbs at your fingertips year-round.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="/images/WhatsApp Image 2026-09-17 at 10.05.29.jpeg" alt="Urban Oasis" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Wind className="text-blue-400 w-6 h-6" /> Balcony & Urban Oasis
                </h3>
                <p className="text-gray-600">
                  Designed to withstand outdoor elements while bringing a serene touch of greenery to urban apartment balconies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents & Specs */}
      <section id="specs" className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Package className="text-brand-green w-8 h-8" /> What's in the Box?
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 bg-white border border-gray-100">
              <img src="/images/WhatsApp Image 2026-09-17 at 10.05.30.jpeg" alt="Kit Contents" className="w-full h-auto" />
            </div>

            <ul className="space-y-4">
              {[
                { title: "Reservoir Tank", desc: "Heavy-duty food-grade square bucket" },
                { title: "Netpots (4 Pcs)", desc: "Sturdy 3-inch black slotted pots" },
                { title: "Growing Media", desc: "Premium clayballs & cocodiscs" },
                { title: "Nutrients", desc: "Balanced organic hydroponic plant food" },
                { title: "Air Pump & Stone", desc: "One-way oxygen pump with silicon tube" }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors cursor-default border border-transparent hover:border-gray-200">
                  <CheckCircle2 className="text-brand-green shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2">
            <div className="glass-panel p-8 md:p-10 sticky top-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Ruler className="text-brand-green w-7 h-7" /> System Specs
              </h2>

              <div className="space-y-4">
                {[
                  { label: "Length & Width", value: "30 cm × 26 cm" },
                  { label: "Height", value: "22 cm" },
                  { label: "Planting Capacity", value: "4 Healthy Plants (Simultaneous)" },
                  { label: "System Type", value: "Kratky / DWC Hybrid Aeration" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                    <span className="text-gray-500 font-medium">{spec.label}</span>
                    <span className="font-bold text-gray-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-brand-green/5 border border-brand-green/20 p-5 rounded-xl">
                <h4 className="font-bold text-brand-green mb-2">Corporate Gifting Advantage</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fully customizable branding options available for bulk orders including company logo engraving on bucket, custom sleeve packaging, and personalized greeting cards. Perfect for ESG initiatives!
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Advanced Hydroponic Science</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <div className="rounded-3xl overflow-hidden shadow-md mb-6 h-72">
                <img src="/images/WhatsApp Image 2026-09-17 at 10.05.31.jpeg" alt="Roots" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Optimal Root Suspension</h3>
              <p className="text-gray-600 leading-relaxed">
                Slotted netpots filled with clayballs securely anchor the plant while allowing roots to cascade directly into the nutrient-rich reservoir below for accelerated growth.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="rounded-3xl overflow-hidden shadow-md mb-6 h-72 bg-blue-50 flex items-center justify-center relative">
                {/* Simulated image for the Oxygenated water since we ran out of 5 images. We'll reuse 10.05.30 or use an icon */}
                <img src="/images/WhatsApp Image 2026-09-17 at 10.00.18.jpeg" alt="Oxygenated Chamber" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
                <Droplet className="absolute text-white w-20 h-20 opacity-90 drop-shadow-lg animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Oxygenated Water Chamber</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipped with a silent air pump and bubble stone that infuses maximum dissolved oxygen into the water, preventing root rot and boosting growth velocity by up to 3x.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-[#112a1d] text-white py-20 relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 opacity-10">
          <Leaf className="w-96 h-96" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with happhygreenz</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Inspire your team and clients with living gifts that promote wellness, sustainability, and green innovation.
          </p>

          <div className="glass-panel !bg-white/10 !border-white/20 p-8 md:p-12 mb-8">
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-2">Bulk Inquiries & Customization</h3>
            <a href="mailto:corporate@happhygreenz.com" className="text-2xl md:text-3xl font-medium hover:text-brand-accent transition-colors block mb-6">
              corporate@happhygreenz.com
            </a>

            <div className="inline-flex items-center justify-center gap-3 bg-white text-brand-green px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <Package className="w-5 h-5" />
              Request a Custom Quote
            </div>
          </div>

          <p className="text-green-900/60 text-sm font-medium mt-16">
            © {new Date().getFullYear()} happhygreenz | Corporate Gifting Collection
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
