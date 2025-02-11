import "./banner.css";
import Logo from "../../assets/images/Omnidrop.svg";
import BrandName from "../../assets/images/logoName.svg";
import AllName from "../../assets/images/All.svg";
import OneName from "../../assets/images/inOne.svg";
import Button from "../share/button/Button";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        {/* navbar */}
        <nav className="nav flex justify-between items-center p-6">
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              alt="brand logo"
              className="w-[24.66px] h-[28.76px]"
            />
            <img
              src={BrandName}
              alt="brand name"
              className="w-[88px] h-[19.26px]"
            />
          </div>
          <Button
            className={"bg-[#F9CB22] py-2 rounded-[30px] font-medium px-5"}
            title={"Contact Us"}
          />
        </nav>
        {/* banner content */}
        <div className="banner-content flex gap-10 items-center justify-center">
          <div className="flex flex-col items-start ml-40">
            <p className="text-[#FFFFFF] text-lg text-center font-normal">
              The All-In-One Platform To Start,
            </p>
            <p className="text-[#FFFFFF] text-lg text-center font-normal">
              Scale & Run Your Dropshipping Business
            </p>
          </div>
          <Button
            className={
              "bg-[#FFFFFF] border border-[#DEDEDE] py-2 rounded-[30px] font-medium px-5"
            }
            title={"Start free trial"}
          />
        </div>
        <img src={AllName} alt="All" className="all_font" />
        <img src={OneName} alt="All" className="one_font" />
        {/* div for adjustment */}
        <div />
      </div>
    </div>
  );
};

export default Banner;
