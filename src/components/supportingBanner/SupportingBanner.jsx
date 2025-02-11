import "./supportingBanner.css";
import Globe from "../../assets/images/sphare.svg";
import Seller from "../../assets/images/seller.svg";
import Fastest from "../../assets/images/fastest.svg";
import Store from "../../assets/images/store.svg";
import Boxes from "../../assets/images/boxes.svg";

const SupportingBanner = () => {
  return (
    <div className="supporting_banner_container w-full px-5 flex justify-center items-center">
      <div className="bg-[#242425] w-full flex rounded-b-[30px] justify-center items-center">
        <div
          data-aos="fade-up"
          className="supporting_banner h-[412px] text-white w-full flex-wrap flex justify-between border-[0.5px] rounded-[30px] border-[#FFFFFF2E] p-6 items-center"
        >
          {/* card one */}
          <div className="supporting_banner_card">
            <img src={Globe} alt="globe" className="globe" />
            <img src={Seller} alt="seller" className="seller" />
            <img src={Fastest} alt="Fastest" className="fastest" />
            <p className="font-medium text-xl">
              Fastest shipping, lowest rates
            </p>
            <p className="font-normal text-[15px]">
              Giving your products the fastest shipping, lowest rates &
              automatically fulfilled without you lifting a finger
            </p>
          </div>
          {/* card two */}
          <div className="supporting_banner_card">
            <img src={Store} alt="Store" className="store" />

            <p className="font-medium text-xl">
              Integrate your Shopify store with one click
            </p>
            <p className="font-normal text-[15px]">
              all your business metrics from one dashboard
            </p>
          </div>
          {/* card three */}
          <div className="supporting_banner_card">
            <img src={Boxes} alt="Boxes" className="boxes" />
            <p className="font-medium text-xl">5+ million</p>
            <p className="font-normal text-[15px]">Products in our database</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportingBanner;
