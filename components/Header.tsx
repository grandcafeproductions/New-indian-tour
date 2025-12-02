import React from 'react';
import { Phone, MapPin, Search, Heart, Globe, Clock, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Black/Dark Gray */}
      <div className="bg-[#1a1a1a] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
                <span className="hover:text-white cursor-pointer transition-colors">Submit a request for tour selection</span>
                <span className="hover:text-white cursor-pointer transition-colors">Callback</span>
                <span className="hover:text-white cursor-pointer transition-colors">Contacts</span>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                   <Phone size={14} /> <span>+7 (495) 108-10-80</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                   <MessageCircle size={14} /> <span>+7 (915) 155-09-91</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <div className="flex flex-col leading-none text-[10px]">
                         <span>Mon-Fri: 10:00 - 19:00</span>
                         <span>Sat: 11:00 - 15:00</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-[#2d2d2d] bg-opacity-90 backdrop-blur-sm text-white py-4 px-4 shadow-md sticky top-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center gap-3 mb-4 md:mb-0">
                 <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden border-2 border-gray-500">
                    <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-cover opacity-80" />
                 </div>
                 <div className="flex flex-col">
                    <span className="font-serif text-xl tracking-wider uppercase">India-Tour</span>
                    <span className="text-[10px] text-gray-400 tracking-widest uppercase">Travel Company</span>
                 </div>
            </div>

            {/* Currency Rates */}
            <div className="hidden lg:flex items-center gap-4 text-xs text-amber-500 font-mono">
                <span>$ 82.14</span>
                <span>€ 95.36</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-300">
                <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Countries</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Tours</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Ayurveda</a>
                <a href="#" className="hover:text-amber-500 transition-colors">For Tourists</a>
                <a href="#" className="hover:text-amber-500 transition-colors">About Us</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Partners</a>
                <a href="#" className="text-white hover:text-red-500"><Heart size={16} fill="currentColor" /></a>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;