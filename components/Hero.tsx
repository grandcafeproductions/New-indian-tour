import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
      <img 
        src="https://picsum.photos/seed/indianchildsmile/1600/600" 
        alt="Smiling Indian Child" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10"></div>
    </div>
  );
};

export default Hero;