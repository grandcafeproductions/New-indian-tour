import React from 'react';
import { SERVICE_ITEMS } from '../constants';

const ServiceGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-widest mb-2">Namaste! Welcome to India-Tour!</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_ITEMS.map((item) => (
          <div key={item.id} className="group relative overflow-hidden shadow-lg cursor-pointer h-48 md:h-56 bg-white border border-gray-200">
            {/* Image Container */}
            <div className="w-full h-full overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.isSpecial ? 'object-contain p-8 bg-gray-50' : ''}`}
                />
            </div>
            
            {/* Overlay Label */}
            <div className="absolute bottom-4 left-0 bg-[#40E0D0] text-white py-1 px-4 text-sm font-bold shadow-md transform transition-transform duration-300 group-hover:translate-x-2">
              {item.title}
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;