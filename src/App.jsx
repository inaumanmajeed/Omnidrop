import Banner from "./components/banner/Banner";
import Pricing from "./components/pricing/Pricing";
import SupportingBanner from "./components/supportingBanner/SupportingBanner";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Banner />
      <SupportingBanner />
      <Pricing />
    </div>
  );
};

export default App;
