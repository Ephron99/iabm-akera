import React from 'react';
import bg1 from '../images/seed.jpeg';
import bg2 from '../images/img7.jpeg';
import bg3 from '../images/img8.jpeg';
import bg4 from '../images/img2.jpeg';
const Horticulture = () => {
  const crops = [
    { name: "Onions", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400" },
    { name: "", image: bg2},
    { name: "", image: bg3 },
    { name: "Tomatoes", image: bg4 }
  ];

  return (
    <section className="py-16 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-700 w-fit pb-2 mb-8">Horticulture Value Chain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Apart from the maize value chain, IABM members are active in the horticulture value chain by producing different horticultural crops including onions, tomatoes, sweet peppers, peas, and cabbages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              IABM has realized the need for diversifying its business lines by engaging in horticulture value chain as a cooperative where it ensures coordination of the production and marketing of the members' horticulture produce.
            </p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Learn More About Our Services
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {crops.map((crop, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg h-40">
                <img src={crop.image} alt={crop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold">{crop.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horticulture;
