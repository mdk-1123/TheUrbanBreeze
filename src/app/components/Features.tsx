import { Feather, Zap, Gauge, Volume2, Droplets, Timer, Lightbulb, Wind } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Droplets,
      title: "600ml Water Tank Cooling",
      description: "Built-in water tank for enhanced evaporative cooling. Add water for fresher, cooler air during hot days."
    },
    {
      icon: Gauge,
      title: "3 Speed Wind Modes",
      description: "Tender, Cool, and Strong wind settings. Customize airflow from gentle breeze to powerful cooling."
    },
    {
      icon: Wind,
      title: "5 Spray Mist Levels",
      description: "Adjustable mist intensity with lasting spray times. Low (12H), Medium (4H), High (2.5H) for optimal humidity."
    },
    {
      icon: Zap,
      title: "USB Powered Convenience",
      description: "Works with laptop, power bank, wall adapter, and car charger. Perfect for home, office, and travel."
    },
    {
      icon: Lightbulb,
      title: "7-Color Light Options",
      description: "Beautiful ambient lighting with 7 color modes. Creates a soothing atmosphere while cooling."
    },
    {
      icon: Timer,
      title: "Smart 1/2/3H Timer",
      description: "Auto shut-off timer for energy saving. Set it and forget it for peaceful sleep."
    },
    {
      icon: Volume2,
      title: "Ultra-Low Noise",
      description: "Whisper-quiet operation won't disturb your work, study, or sleep. Safe for bedroom use."
    },
    {
      icon: Feather,
      title: "Lightweight & Portable",
      description: "Only 0.5kg with compact design. Easy to carry for camping, office, desk use, and outdoor activities."
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Features for Personal Cooling
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            3-in-1 multifunction: Fan, Humidifier, and Night Light in one compact device.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}