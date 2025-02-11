import './pricing.css';
import PricingImg from '../../assets/images/pricing.svg';
import AutomateImg from '../../assets/images/automate.svg';
import NextImg from '../../assets/images/nextButton.svg';

const Pricing = () => {
  return (
    <div className="w-full my-20 flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center gap-20 ">
        <p className="text-[64px] font-normal text-center leading-[63px]">
          Discover why thousands of dropshippers use Omnidrop
        </p>
        <div className="flex items-center w-full flex-wrap justify-center gap-20">
          {/* card One */}
          <div className="pricing__card">
            <div className="h-1/2 bg-white relative">
              <img
                className="absolute left-0 right-0 bottom-0 object-cover h-full w-full"
                src={PricingImg}
                alt="pricing"
              />
            </div>
            <div className="pricing__bottom h-1/2 flex flex-col items-start px-7 py-9 justify-between gap-5">
              <div className="">
                <p className="text-[32px] leading-7 font-normal">Product</p>
                <p className="text-[32px] font-normal">Sourcing</p>
              </div>
              <p className="text-[14px] font-normal w-3/4">
                Over 1M+ products from the highest quality suppliers at the
                lowest prices with the fastest shipping times
              </p>
              <div className="bg-[#FFFFFFB2] relative py-2 w-10/12 flex items-center justify-between rounded-full h-10">
                <p className="font-medium pl-3">Learn more</p>
                <img className="absolute -right-1 cursor-pointer" src={NextImg} alt="" />
              </div>
            </div>
          </div>
          {/* card Two */}
          <div className="pricing__card">
            <div className="h-1/2 bg-white relative">
              <img
                className="absolute left-0 right-0 bottom-0 object-cover h-full w-full"
                src={AutomateImg}
                alt="pricing"
              />
            </div>
            <div className="pricing__bottom h-1/2 flex flex-col items-start px-7 py-9 justify-between gap-5">
              <div className="">
                <p className="text-[32px] leading-7 font-normal">Automated</p>
                <p className="text-[32px] font-normal">Fulfillment</p>
              </div>
              <p className="text-[14px] font-normal w-3/4">
                In just a few clicks connect your online store to Omnidrop &
                automate all your product fulfillment
              </p>
              <div className="bg-[#FFFFFFB2] relative py-2 w-10/12 flex items-center justify-between rounded-full h-10">
                <p className="font-medium pl-3">Learn more</p>
                <img className="absolute -right-1 cursor-pointer" src={NextImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
