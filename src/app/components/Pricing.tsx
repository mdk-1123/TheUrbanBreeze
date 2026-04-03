import { Shield, Truck, RotateCcw, Minus, Plus, User, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useEffect } from "react";
import { State, City } from "country-state-city";

export function Pricing() {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    city: '',
    state: ''
  });

  const states = State.getStatesOfCountry("IN");
  const cities = City.getCitiesOfState("IN", customerDetails.state);

  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
  const openCheckout = () => {
    setShowCheckout(true);
  };

  window.addEventListener("openCheckout", openCheckout);

  return () => {
    window.removeEventListener("openCheckout", openCheckout);
  };
}, []);

  const validateForm = () => {
    if (!customerDetails.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!customerDetails.email.includes('@')) {
      toast.error('Please enter a valid email');
      return false;
    }
    if (customerDetails.contact.length < 10) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    try {
      // 🔥 Create order from backend
      const res = await fetch("http://127.0.0.1:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: 699 * quantity * 100 })
      });

      const order = await res.json();

      if (!order.id) {
        throw new Error("Order creation failed");
      }

      // 🔥 Razorpay options
      const options = {
        key: "rzp_live_SWwDKO8auSKXVT", // 🔴 replace with your LIVE key
        amount: order.amount,
        currency: "INR",
        name: "TheUrbanBreeze",
        description: `Mini Personal Air Cooler (Qty: ${quantity})`,
        order_id: order.id,

        image: "https://via.placeholder.com/300",

        handler: async function (response: any) {
          console.log("Payment Success:", response);

          toast.success("Payment Successful! 🎉");

          // Optional: verify payment
          await fetch("http://127.0.0.1:5000/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              ...response,
              ...customerDetails,
              quantity
            })
          });

          setShowCheckout(false);
          setCustomerDetails({ name: '', email: '', contact: '' });
        },

        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.contact
        },

        notes: {
          quantity: quantity.toString(),
          product: "Mini Air Cooler"
        },

        theme: {
          color: "#06b6d4"
        },

        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled");
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      toast.error("Payment failed ❌");
    }
  };

  const trustSignals = [
    { icon: RotateCcw, title: "7 Day Returns", description: "Easy returns & exchange" },
    { icon: Shield, title: "Secure Payment", description: "100% safe & encrypted" },
    { icon: Truck, title: "Fast Shipping", description: "Delivered in 3-5 days" }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 px-6 sm:px-8 py-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Mini Personal Air Cooler Fan
            </h2>
            <p className="text-white/90">Limited Time Offer - Pack of 1</p>
          </div>

          <div className="p-6 sm:p-10">
            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl sm:text-3xl text-gray-400 line-through">₹1,399</span>
                <span className="text-5xl sm:text-6xl font-bold text-gray-900">₹699</span>
              </div>
              <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                50% OFF - Save ₹700
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5 text-gray-700" />
                </button>
                <span className="w-12 text-center font-bold text-xl text-gray-900">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex justify-between items-center">
              <span className="text-gray-700 font-medium">Total:</span>
              <span className="text-3xl font-bold text-gray-900">₹{699 * quantity}</span>
            </div>

            {/* Customer Details Form */}
            {showCheckout && (
              <div className="mb-6 space-y-4 bg-cyan-50/50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Enter Your Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={customerDetails.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={customerDetails.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={customerDetails.contact}
                        onChange={(e) => handleInputChange('contact', e.target.value)}
                        placeholder="10 digit mobile number"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        maxLength={10}
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Address *
                    </label>
                    <div className="relative">
                      <textarea
                        value={customerDetails.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="House No, Street, Area, Landmark"
                        rows={3}
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                  
                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <div className="relative">
                      <select
                        value={customerDetails.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      >
                      <option value="">Select State</option>
                        {State.getStatesOfCountry("IN").map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
              </div>

{/* City */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    City *
  </label>
  <div className="relative">
    <select
      value={customerDetails.city}
      onChange={(e) => handleInputChange('city', e.target.value)}
      disabled={!customerDetails.state}
      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100"
    >
      <option value="">Select City</option>
      {City.getCitiesOfState("IN", customerDetails.state).map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  </div>
</div>

{/* Pincode */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Pincode *
  </label>
  <div className="relative">
    <input
      type="text"
      value={customerDetails.pincode}
      onChange={(e) => handleInputChange('pincode', e.target.value)}
      placeholder="Enter 6-digit pincode"
      maxLength={6}
      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
    />
  </div>
</div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            {!showCheckout ? (
              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-8 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-8"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div className="flex gap-3 mb-8">
                <button 
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-full font-bold hover:border-gray-400 transition-all duration-300"
                >
                  Back
                </button>
                <button 
                  onClick={handlePayment}
          
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-6 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Pay Now
                </button>
              </div>
            )}

            {/* Trust Signals */}
            <div className="grid sm:grid-cols-3 gap-4">
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{signal.title}</p>
                    <p className="text-xs text-gray-600">{signal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}