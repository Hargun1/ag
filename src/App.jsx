import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-happy-bg selection:bg-happy-yellow selection:text-gray-900 font-serif">
      
      {/* Navbar overlay */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-tight drop-shadow-md font-sans">
          Happy greenz
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-white" 
        style={{ backgroundImage: "url('/images/WhatsApp Image 2026-09-17 at 10.05.28.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold font-sans tracking-[0.2em] uppercase mb-4 drop-shadow-lg">
            HAPPY GREENZ
          </h1>
          <p className="font-cursive text-4xl md:text-5xl text-happy-yellow italic drop-shadow-md">
            Launching Soon
          </p>
        </div>
      </section>

      {/* Yellow Promotional Banner */}
      <div className="bg-happy-yellow text-gray-900 py-4 px-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4 shadow-md z-20 relative">
        <span className="font-semibold font-sans tracking-wide text-sm sm:text-base uppercase">
          Special Launch Offer - Sustainable Green Care
        </span>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition font-sans text-sm font-bold uppercase tracking-wider">
          Get Quote
        </button>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img 
              src="/images/WhatsApp Image 2026-09-17 at 10.05.29.jpeg" 
              alt="Green Oasis" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-cursive text-4xl text-happy-yellow mb-2">Best Value</h3>
              <p className="text-white font-serif text-lg leading-relaxed">
                Elevate your urban spaces with our premium indoor setups.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img 
              src="/images/WhatsApp Image 2026-09-17 at 10.00.18.jpeg" 
              alt="Lush Greens" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-cursive text-4xl text-happy-yellow mb-2">Eco Friendly</h3>
              <p className="text-white font-serif text-lg leading-relaxed">
                Advanced hydroponic systems that save water and space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-happy-bg py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cursive text-5xl md:text-6xl text-gray-900 mb-6">Subscribe</h2>
          <p className="font-serif text-happy-gray text-lg mb-10 max-w-md mx-auto">
            Sign up to be the first to know about our soft launch events and exclusive green offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full sm:w-80 bg-transparent border-b-2 border-gray-300 py-3 px-2 focus:outline-none focus:border-happy-yellow-dark text-gray-800 font-sans text-lg placeholder:text-gray-400 transition-colors" 
              required
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto px-10 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all font-cursive text-2xl"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-happy-dark text-gray-400 py-12 px-8 flex flex-col md:flex-row justify-between items-center text-sm gap-6 border-t border-gray-800">
        <p className="font-sans">Copyright © {new Date().getFullYear()} Happy greenz - Todos los derechos reservados.</p>
        <div className="flex gap-8 font-cursive text-xl text-gray-300">
          <a href="#" className="hover:text-happy-yellow transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-happy-yellow transition-colors">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
