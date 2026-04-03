import { Battery, Zap, Droplets } from 'lucide-react';
import heroImage from '../../assets/images/hero.png'; // ✅ FIXED import

export function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ COMMON CHECKOUT FUNCTION
  const goToCheckout = () => {
    const section = document.getElementById('pricing');
    section?.scrollIntoView({ behavior: 'smooth' });

    // 🔥 wait for scroll then open checkout
    setTimeout(() => {
      window.dispatchEvent(new Event('openCheckout'));
    }, 500);
  };

  return (
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-b from-cyan-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mini Personal Air Cooler Fan
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Portable Air Conditioner with Evaporative Cooling. Perfect for desk, travel, and daily use.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              {/* ✅ Buy Now */}
              <button 
                onClick={goToCheckout}
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Buy Now - ₹699
              </button>

              {/* View Features */}
              <button 
                onClick={() => scrollToSection('features')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
              >
                View Features
              </button>

            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-100">
                <Battery className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium text-gray-700">USB Powered</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-100">
                <Droplets className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium text-gray-700">Water Tank Cooling</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium text-gray-700">Lightweight 0.5kg</span>
              </div>

            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
              
              <img
                src={heroImage} // ✅ FIXED
                alt="Mini Personal Air Cooler Fan"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">50% OFF</p>
              <p className="text-sm text-gray-600">Limited Time</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}