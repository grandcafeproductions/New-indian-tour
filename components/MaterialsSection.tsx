import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MATERIAL_ITEMS } from '../constants';

const MaterialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">Popular Materials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MATERIAL_ITEMS.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
            <div className="h-48 overflow-hidden relative">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Arrow overlay that appears on hover */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
            </div>
            <div className="p-4 border-t-2 border-transparent group-hover:border-[#40E0D0] transition-colors">
              <h3 className="font-bold text-gray-600 text-sm uppercase text-center group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsSection;