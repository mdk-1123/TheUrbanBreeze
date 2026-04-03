import { Check, X } from 'lucide-react';

export function Comparison() {
  const comparisons = [
    { feature: "Evaporative Cooling (Water Tank)", urbanBreeze: true, traditional: false },
    { feature: "USB Powered (Multi-Source)", urbanBreeze: true, traditional: false },
    { feature: "600ml Water Tank", urbanBreeze: true, traditional: false },
    { feature: "5 Spray Mist Levels", urbanBreeze: true, traditional: false },
    { feature: "3 Wind Speed Modes", urbanBreeze: true, traditional: true },
    { feature: "7-Color Night Light", urbanBreeze: true, traditional: false },
    { feature: "Auto Timer (1/2/3H)", urbanBreeze: true, traditional: false },
    { feature: "60° Adjustable Airflow", urbanBreeze: true, traditional: true },
    { feature: "Ultra-Low Noise", urbanBreeze: true, traditional: false },
    { feature: "Portable (0.5kg)", urbanBreeze: true, traditional: false },
    { feature: "Compact Design", urbanBreeze: true, traditional: false },
    { feature: "Travel Friendly", urbanBreeze: true, traditional: false }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose TheUrbanBreeze?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            See how we compare to traditional fans
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-3xl overflow-hidden shadow-xl">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-white border-b-2 border-gray-200">
            <div className="col-span-1 p-4 sm:p-6"></div>
            <div className="col-span-1 p-4 sm:p-6 text-center border-l-2 border-gray-200">
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base mb-2">
                BEST VALUE
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-lg">TheUrbanBreeze</h3>
            </div>
            <div className="col-span-1 p-4 sm:p-6 text-center border-l-2 border-gray-200">
              <h3 className="font-bold text-gray-500 text-sm sm:text-lg mt-10">Traditional Fans</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className={`grid grid-cols-3 border-b border-gray-200 last:border-0 ${
                index % 2 === 0 ? 'bg-white/50' : 'bg-white/20'
              }`}
            >
              <div className="col-span-1 p-4 sm:p-5 flex items-center">
                <span className="text-gray-700 font-medium text-sm sm:text-base">{item.feature}</span>
              </div>
              <div className="col-span-1 p-4 sm:p-5 flex items-center justify-center border-l-2 border-gray-200">
                {item.urbanBreeze ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 flex items-center justify-center">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="col-span-1 p-4 sm:p-5 flex items-center justify-center border-l-2 border-gray-200">
                {item.traditional ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}