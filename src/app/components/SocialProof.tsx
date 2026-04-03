import { Star, Users } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Office Professional",
      content: "The water cooling feature is amazing! I use it at my desk every day. The 7-color light creates a nice ambiance. Perfect for summer!",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      role: "Student",
      content: "Lightweight and portable! I carry it to the library and hostel. The USB power is so convenient. The timer function helps me save energy.",
      rating: 5,
      avatar: "RV"
    },
    {
      name: "Ananya Patel",
      role: "Remote Worker",
      content: "Love the 3 speed modes and spray function! Super quiet - doesn't disturb my video calls. Best purchase for working from home.",
      rating: 5,
      avatar: "AP"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Summary */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.8/5</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Users className="w-5 h-5" />
            <p className="text-lg sm:text-xl font-semibold">5000+ Happy Customers</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}