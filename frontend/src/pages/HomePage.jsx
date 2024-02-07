import HeroSection from "../components/HomeComponents/HeroSection";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import Footer from "../components/home-components/Footer";
import PricingCards from "../components/home-components/PricingCards";
import Hire from "../components/Hire-section/Hire";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Hire />
      <PricingCards />
      <Footer />
    </>
  );
};

export default HomePage;
