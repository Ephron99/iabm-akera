import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-16 px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-700 w-fit pb-2">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          IABM Iterambere ry'Abahinzi started in 2007 and members, Rwawalo Borozi is our Rwandan cooperative workers in Makera a members, and a growth and impact-menors.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-green-700">764</span>
            <span className="text-sm font-semibold text-gray-600">Members (65.3%)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-green-700">34.7%</span>
            <span className="text-sm font-semibold text-gray-600">Females</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-green-700">1,562</span>
            <span className="text-sm font-semibold text-gray-600">Potential members</span>
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4">
           {/* Placeholder for corn icon */}
           <div className="text-yellow-500 w-12 h-12"></div>
        </div>
      </div>

      <div className="bg-[#1a5d1a] text-white p-8 rounded-xl h-full flex flex-col items-center text-center justify-center space-y-4">
        <div className="bg-white/20 p-3 rounded-full">
           <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
        </div>
        <h3 className="text-2xl font-bold underline decoration-yellow-400">Our Vision</h3>
        <p className="text-sm">Be a leading cooperative in Sustainable development.</p>
      </div>

      <div className="bg-[#fbbd08] text-gray-900 p-8 rounded-xl h-full flex flex-col items-center text-center justify-center space-y-4">
        <div className="bg-black/10 p-3 rounded-full">
          <svg className="w-8 h-8 text-green-800" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
        </div>
        <h3 className="text-2xl font-bold underline decoration-green-800">Our Mission</h3>
        <p className="text-sm font-medium">Strive to increasing member income through increased production, added value and access to competitive markets.</p>
        <div className="pt-4 self-end">
           {/* Placeholder for cow icon */}
           <div className="text-4xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
