
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PlansSection from '../components/PlansSection';
import Features from '../components/Features';
import PromoBanner from '../components/PromoBanner';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="home">
        <Hero />
        <PromoBanner />
        <PlansSection />
        <Features />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
