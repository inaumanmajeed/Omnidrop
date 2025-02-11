import Banner from './components/banner/Banner';
import ContactUs from './components/contactUs/ContactUs';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Packages from './components/packages/Packages';
import Pricing from './components/pricing/Pricing';
import SupportingBanner from './components/supportingBanner/SupportingBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init(
   { offset: 250,}
  );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Banner />
      <SupportingBanner />
      <Pricing />
      <Faq />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
