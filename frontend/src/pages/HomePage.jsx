import HeroSection from "../components/HomeComponents/HeroSection";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import OurFeatures from "../components/HomeComponents/OurFeatures";
import Footer from "../components/HomeComponents/Footer";
import PricingCards from "../components/HomeComponents/PricingCards";

const HomePage = () => {
  return (
    <div className="div overflow-hidden">
      <HeroSection />
      <OurFeatures />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default HomePage;
