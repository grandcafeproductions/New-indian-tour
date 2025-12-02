import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import MaterialsSection from './components/MaterialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceGrid />
        <AboutSection />
        <NewsSection />
        <MaterialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;