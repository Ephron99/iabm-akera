import React from 'react';
import bg2 from '../images/seed.jpeg';
const MaizeValueChainPage = () => {
  const steps = [
    {
      title: "Seed Multiplication",
      desc: "We provide high-quality, certified seeds to our members to ensure the best possible harvest yields.",
      icon: "",
      image: bg2
    },
    {
      title: "Input Supply",
      desc: "Access to essential production inputs including fertilizers and pesticides to protect and nourish crops.",
      icon: "",
      image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Maize Processing",
      desc: "Our state-of-the-art factory processes raw maize into high-grade flour for commercial distribution.",
      icon: "",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Animal Feed",
      desc: "By-products from our maize processing are converted into nutritious animal feed for local livestock.",
      icon: "",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#fdfdf5]">
      <div className="max-w-6xl mx-auto px-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Maize Value Chain</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Our core business is built on a comprehensive approach to the maize value chain, 
          from the soil to the shelf.
        </p>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-4">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">{step.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl h-80 w-full">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brown-800 bg-[#5d4037] text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Commercialization & Markets</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We ensure our members' products reach competitive markets, providing fair pricing and 
            sustainable income for our community of farmers.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all">
            Inquire About Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaizeValueChainPage;
