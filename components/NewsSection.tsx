import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-[#9ACD9E] py-16 px-4 border-t-4 border-emerald-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">Company News</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="bg-white shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
              {/* Image Area with Date Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-[#40E0D0] text-white px-3 py-1 text-xs font-bold shadow-sm">
                  {news.monthYear}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-serif font-bold text-gray-700 text-sm mb-3 uppercase leading-tight line-clamp-3">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-4 flex-grow mb-4 leading-relaxed">
                  {news.description}
                </p>
                <div className="mt-auto">
                    <button className="flex items-center text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors">
                        READ MORE <ChevronRight size={14} className="ml-1" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-4">
            <button className="flex items-center text-gray-700 font-bold text-sm hover:text-white transition-colors">
                <ChevronRight className="bg-gray-700/20 rounded-full p-1 w-6 h-6 mr-1" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;