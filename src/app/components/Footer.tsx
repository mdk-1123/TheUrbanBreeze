import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              TheUrbanBreeze
            </h3>
            <p className="text-gray-400 mb-4">Your Space. Your Breeze.</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium portable cooling solutions for modern urban living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about.tsx" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#returns" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#warranty" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:support@theurbanbreeze.com" className="hover:text-cyan-400 transition-colors">
                  support@theurbanbreeze.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+911234567890" className="hover:text-cyan-400 transition-colors">
                  +91 1234 567 890
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="#facebook" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#instagram" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#twitter" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 TheUrbanBreeze. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#returns" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
