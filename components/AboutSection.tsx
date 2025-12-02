import React from 'react';
import { Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4 text-gray-500">
             <Award size={40} />
        </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">India Tour – 27 years of successful work!</h3>
      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">Travel company</p>

      <div className="text-gray-600 text-sm leading-relaxed space-y-4 font-light text-justify md:text-center">
        <p>
          We specialize in travel to India's most fascinating regions. We offer a variety of tours, from classic
          sightseeing programs to tailored trips, as well as wellness tours for Ayurveda and Panchakarma
          enthusiasts.
        </p>
        <p>
          Our company's specialists are well-versed in India and annually attend international tourism exhibitions
          in India (GITB, ITM, Destination East, KTM, ITB, ODISHA Travel Bazar, Vibrant Gujarat International Travel
          Mart), test new routes, communicate with guides, inspect Ayurvedic clinics and resorts, and hotels along
          tourist routes. We work with trusted partners and carefully select hotels, routes, and excursions.
        </p>
        <p>
            We are proud to announce that India-Tour is the winner of several awards in the tourism industry and 
            the only company in Russia to receive the AYUSH SANCHARAM award for its contribution to the 
            development and popularization of Ayurveda and yoga.
        </p>
        <p className="font-bold text-gray-800 mt-4">
            India-Tour travel company is a member of the TURPOMOSHCH Association of Tour Operators, 
            registration number PTO 021365.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;