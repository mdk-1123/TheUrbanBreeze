import { Package } from 'lucide-react';

export function ProductDetails() {
  const specifications = [
    { label: "Brand", value: "TheUrbanBreeze" },
    { label: "Material", value: "ABS Plastic" },
    { label: "Mounting Type", value: "Floor Mount" },
    { label: "Weight", value: "0.5 Kilograms" },
    { label: "Color", value: "White (Assorted Colors Available)" },
    { label: "Water Tank Capacity", value: "600ml" },
    { label: "Wind Speeds", value: "3 Modes (Tender/Cool/Strong)" },
    { label: "Spray Levels", value: "5 Levels (Low/Medium/High)" },
    { label: "Light Modes", value: "7-Color Options" },
    { label: "Timer Function", value: "1H / 2H / 3H Auto Shut-off" },
    { label: "Power Supply", value: "USB (DC5V/2A or above)" },
    { label: "Dimensions", value: "7.9in × 8.3in × 10.2in" }
  ];

  const boxContents = [
    "1 × Mini Personal Air Cooler Fan",
    "1 × USB Power Cable",
    "1 × Water Tank (600ml)",
    "1 × User Manual"
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Specifications */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Technical Specifications
            </h2>
            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <span className="text-gray-700 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's in the Box */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              What's in the Box
            </h2>
            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Complete Package
                  </h3>
                  <p className="text-gray-600">
                    Everything you need for instant personal cooling
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {boxContents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/60 rounded-xl">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Recommended Uses:</span> Camping, Desk Use, Home Use, Office Use, Outdoor Activities, Personal Cooling, Travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}