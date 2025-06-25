
import Header from '../components/Header';
import Hero from '../components/Hero';
import PlansSection from '../components/PlansSection';
import EnquiryForm from '../components/EnquiryForm';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="home">
        <Hero />
        <PlansSection />
        <EnquiryForm />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
