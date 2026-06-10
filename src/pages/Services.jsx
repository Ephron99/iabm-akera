import React from 'react';
import { Sprout, Users, TrendingUp, Landmark, ShieldCheck, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Input Supply",
      desc: "Distribution of high-quality seeds, fertilizers, and pesticides to optimize crop production.",
      icon: <Sprout className="w-8 h-8 text-green-600" />
    },
    {
      title: "Capacity Building",
      desc: "Regular training sessions for members on modern agricultural techniques and sustainable farming.",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      title: "Value Addition",
      desc: "Processing maize into high-grade flour and producing animal feed at our factory facilities.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      title: "Financial Support",
      desc: "Assisting members in accessing bank loans and managing agricultural finance.",
      icon: <Landmark className="w-8 h-8 text-green-600" />
    },
    {
      title: "Market Access",
      desc: "Collective aggregation and marketing of produce to ensure competitive pricing for members.",
      icon: <Truck className="w-8 h-8 text-green-600" />
    },
    {
      title: "Seed Multiplication",
      desc: "Professional seed multiplication services to ensure a steady supply of quality planting material.",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />
    }
  ];

  return (
    <div className="pt-24 pb-16 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            IABM provides a comprehensive range of services to support our members and the 
            wider agricultural community in Makera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-[#fdfdf5] rounded-2xl border border-green-100 hover:shadow-xl transition-all group">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-green-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Become a Member Today</h2>
            <p className="text-green-100 text-lg">Join over 700 farmers and start growing your future with IABM.</p>
          </div>
          <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all whitespace-nowrap">
            Join the Cooperative
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
