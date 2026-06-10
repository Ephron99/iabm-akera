import React from 'react';
import bg1 from '../images/seed.jpeg';
import bg2 from '../images/Flour.jpg';

const MaizeValueChain = () => {
  const activities = [
    {
      title: "Seed Multiplication",
      image: bg1
    },
    {
      title: "Processing into Flour",
      image: bg2
    },
    {
      title: "Commercialization",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Animal feed",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="bg-[#5d4037] py-16 px-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Maize Value Chain</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 group">
            <div className="w-full h-48 rounded-2xl overflow-hidden border-4 border-white/20 group-hover:border-yellow-400 transition-colors">
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-lg font-semibold text-center">{activity.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8 opacity-50">
         <div className="text-4xl"></div>
         <div className="text-4xl"></div>
      </div>
    </section>
  );
};

export default MaizeValueChain;
