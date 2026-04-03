import { ShieldCheck, Truck, Star } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-b from-cyan-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About TheUrbanBreeze
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart cooling designed for modern living. Stay cool, comfortable, and refreshed anywhere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
              <img
                src="https://via.placeholder.com/500"
                alt="About Product"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              TheUrbanBreeze Mini Air Cooler is designed to give you instant relief from heat.
              Whether you are working at your desk, relaxing at home, or traveling, this compact
              cooling solution ensures comfort anytime, anywhere.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With its powerful airflow, water-based cooling, and lightweight design, it’s the
              perfect alternative to bulky air conditioners.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
                <ShieldCheck className="text-cyan-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">
                  Safe & Energy Efficient
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
                <Truck className="text-cyan-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">
                  Fast Delivery Across India
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
                <Star className="text-cyan-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">
                  Trusted by 1000+ Happy Customers
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}