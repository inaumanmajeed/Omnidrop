import NextImg from '../../assets/images/contact.svg';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="contact__us__wrapper">
      <p data-aos="flip-up" className="font-normal">
        Now it’s your turn
      </p>
      <div
        data-aos="flip-up"
        className="bg-[#FFFFFF] button__contact relative py-2 w-[226px] px-4 flex items-center justify-between rounded-full h-[66px] "
      >
        <p className="font-medium text-[#242424] text-[22px]">Learn more</p>
        <img className="absolute right-1 cursor-pointer" src={NextImg} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
