import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "src/assets/images/hero.png", alt: "Mini Personal Air Cooler Fan" },
    { src: "src/assets/images/3in1.png", alt: "3-in-1 Multifunction" },
    { src: "src/assets/images/3windspeed.png", alt: "3 Wind Speeds Control" },
    { src: "src/assets/images/5spray.png", alt: "600ml Water Tank with Spray" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore every detail of your cooling companion
          </p>
        </div>

        <div className="relative">
          
          {/* Main Image */}
          <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-video">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-contain p-8"
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative rounded-xl overflow-hidden aspect-square transition-all ${
                  currentImage === index
                    ? 'ring-4 ring-cyan-500 shadow-lg'
                    : 'ring-2 ring-gray-200 hover:ring-cyan-300'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover bg-gradient-to-br from-cyan-50 to-blue-50 p-2"
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}