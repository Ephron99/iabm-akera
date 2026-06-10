import React from 'react';
import bg2 from '../images/bg2.jpeg';
const About = () => {
  return (
    <div className="pt-24 pb-16 px-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-yellow-400 w-fit pb-2">About IABM</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            IABM (Iterambere ry’Abahinzi-Borozi ba Makera) is a maize cooperative that started its activities in 2007. 
            Located in the heart of Makera, we have grown from a small group of farmers to a cornerstone of the local agricultural community.
          </p>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-700">
            <h3 className="text-xl font-bold text-green-800 mb-2">Our Growth</h3>
            <p className="text-gray-700">
              Today, IABM has 764 active members, including 65.3% males and 34.7% females. 
              We also support 1,562 potential members who supply maize and seeds to our processing facilities.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={bg2} 
            alt="Farmers working" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1a5d1a] text-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 underline decoration-yellow-400 underline-offset-8">Our Vision</h2>
          <p className="text-xl italic">"Be a leading cooperative in Sustainable development"</p>
        </div>
        <div className="bg-[#fbbd08] text-gray-900 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 underline decoration-green-800 underline-offset-8">Our Mission</h2>
          <p className="text-lg font-medium">
            "Strive to increasing member income through increased production, added value and access to competitive markets."
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
        <p className="text-gray-700 leading-relaxed">
          Since 2007, IABM has been at the forefront of agricultural innovation in Rwanda. 
          What began as a focus on maize has expanded into seed multiplication, high-quality flour processing, 
          and now, a strategic expansion into the horticulture value chain.
        </p>
      </div>
    </div>
  );
};

export default About;
