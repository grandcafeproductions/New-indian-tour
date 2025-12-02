import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D5A5A] text-gray-300 py-10 px-4 text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-600 mb-6">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-gray-400/50 flex items-center justify-center border border-gray-400">
                    <span className="font-serif font-bold text-white text-lg">IT</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">INDIA-TOUR</span>
                    <span className="text-[10px] text-gray-400">TRAVEL COMPANY</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
                 <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-400" />
                    <span>+7 (495) 108-10-80</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-400" />
                    <span>+7 (915) 155-09-91</span>
                 </div>
                 <div className="flex gap-2">
                     <div className="bg-[#1DA1F2] p-1 rounded-full text-white hover:opacity-80 cursor-pointer"><Twitter size={14} /></div>
                     <div className="bg-[#4267B2] p-1 rounded-full text-white hover:opacity-80 cursor-pointer"><Facebook size={14} /></div>
                 </div>
                 <div className="text-right">
                    <div className="text-white font-bold">Mon-Fri: 10:00 - 19:00</div>
                    <div>Sat: 11:00 - 15:00</div>
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center md:text-left mb-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Ayurveda clinics</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Visa to India</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">For tourists</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">News</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Partners</a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
            <div>
                 India Tour © All rights reserved | 1998 - 2025
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-white">Contacts</a>
                <a href="#" className="hover:text-white">Privacy policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;