export function ProductShowcase() {
  const showcaseImages = [
    {
      src: "src/assets/images/3in1.png",
      title: "3-in-1 Multifunction",
      description: "Fan, Humidifier & Night Light - 600ml Water Tank Capacity"
    },
    {
      src: "src/assets/images/3windspeed.png",
      title: "3 Wind Speeds & Adjustable",
      description: "Tender, Cool, Strong Wind with 60° Adjustment & Timer Function"
    },
    {
      src: "src/assets/images/5spray.png",
      title: "5 Spray Levels & 600ml Tank",
      description: "Low (12H), Medium (4H), High (2.5H) Mist Duration"
    },
    {
      src: "src/assets/images/suitablefor.png",
      title: "Perfect for Every Space",
      description: "Bedroom, Office, Kitchen, Home - Ultra-Portable Design"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All-in-One Cooling Solution
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of portable cooling with advanced features
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {showcaseImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-cyan-50 to-blue-50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  {image.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}