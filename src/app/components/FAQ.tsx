import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the water tank cooling work?",
      answer: "Fill the 600ml water tank with water (you can add ice for extra cooling). The evaporative cooling system uses the water to create a cooler, fresher airflow. The 5-spray mist levels let you control humidity - Low level lasts 12H, Medium lasts 4H, and High lasts 2.5H."
    },
    {
      question: "What are the different speed modes?",
      answer: "The fan has 3 wind speed modes: Tender Wind for gentle breeze, Cool Wind for moderate cooling, and Strong Wind for maximum airflow. The fan head can also be adjusted up to 60° to direct airflow exactly where you need it."
    },
    {
      question: "How do I power the air cooler?",
      answer: "It's USB powered (DC5V/2A or above) and works with multiple power sources: USB power strip, USB wall adapter, power bank, laptop USB port, or car charger. This makes it perfect for home, office, and travel use."
    },
    {
      question: "What is the 7-color light feature?",
      answer: "The built-in night light has 7 different color options that create a soothing ambient atmosphere. You can use it as a mood light while sleeping, working, or relaxing. The timer function (1H/2H/3H) lets you set auto shut-off."
    },
    {
      question: "How loud is the fan?",
      answer: "This mini air cooler is designed for ultra-low noise operation. It won't disturb your work, study, or sleep, making it perfect for bedroom use, office desks, and study rooms."
    },
    {
      question: "Is it really portable?",
      answer: "Yes! Weighing only 0.5kg (500 grams) with compact dimensions (7.9in × 8.3in × 10.2in), it's incredibly lightweight and easy to carry. Perfect for camping, desk use, travel, and outdoor activities."
    },
    {
      question: "What comes in the package?",
      answer: "You'll receive: 1× Mini Personal Air Cooler Fan, 1× USB Power Cable, 1× Water Tank (600ml capacity), and 1× User Manual. Everything you need to start cooling immediately."
    },
    {
      question: "What is your returns policy?",
      answer: "We offer a hassle-free 7-day return and exchange policy. If you're not satisfied with your purchase, simply contact our support team within 7 days of delivery for a full refund or exchange."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 bg-gradient-to-b from-cyan-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about TheUrbanBreeze
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 sm:px-8 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our support team is here to help you!</p>
          <a 
            href="mailto:support@theurbanbreeze.com" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}