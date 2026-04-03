import { Droplets, Gauge, Timer } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Droplets,
      title: "Fill Water Tank",
      description: "Add water to the 600ml tank (add ice for extra cooling). Choose spray level: Low/Medium/High."
    },
    {
      icon: Gauge,
      title: "Select Speed & Adjust",
      description: "Pick from 3 wind speeds and adjust up to 60° for perfect airflow direction."
    },
    {
      icon: Timer,
      title: "Set Timer & Light",
      description: "Choose 7-color light mode and set 1/2/3H auto timer. Enjoy cool comfort!"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-cyan-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple as 1-2-3
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with your TheUrbanBreeze Mini Air Cooler is effortless
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 -z-10" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                
                {/* Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border-4 border-cyan-100 mt-8">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600" />
                </div>

                {/* Text */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="src/assets/images/powersupply.png" 
              alt="USB Power Options" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">Multiple Power Options</h4>
              <p className="text-sm text-gray-600">
                USB Power Strip, Adapter, or Power Bank - Works anywhere!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="src/assets/images/safecooling.png" 
              alt="Ultra Low Noise" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">Safe & Quiet Cooling</h4>
              <p className="text-sm text-gray-600">
                Ultra-low noise for bedroom, office, and study use.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="src/assets/images/7colour.png" 
              alt="Timer and Light" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">7-Color Light & Timer</h4>
              <p className="text-sm text-gray-600">
                Ambient lighting with 1/2/3H auto shut-off timer.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}