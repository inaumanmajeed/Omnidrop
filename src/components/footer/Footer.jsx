import './footer.css';
import Logo from '../../assets/images/omnidropFooter.svg';
import LogoText from '../../assets/images/footerText.svg';

const Footer = () => {
  return (
    <div className="bg-[#141414] h-[70dvh] w-full flex flex-col items-center p-6 justify-between relative">
      <img
        src={LogoText}
        alt="Omnidrop Logo"
        data-aos="zoom-in-up"
        className="absolute bottom-16 right-48"
      />
      <div />
      <div className="flex justify-between items-start w-full px-48">
        <img
          data-aos="zoom-in-up"
          src={Logo}
          alt="Omnidrop Logo"
          className=""
        />
        <div className="flex gap-20">
          <ul className="list">
            <li data-aos="zoom-in-up">Pages</li>
            <li data-aos="zoom-in-up">Features</li>
            <li data-aos="zoom-in-up">FAQs</li>
            <li data-aos="zoom-in-up">Affiliates</li>
          </ul>
          <ul className="list">
            <li data-aos="zoom-in-up">Terms and conditions</li>
            <li data-aos="zoom-in-up">Privacy policy</li>
          </ul>
          <ul className="list">
            <li data-aos="zoom-in-up">Follow us on</li>
            <li data-aos="zoom-in-up">Twitter</li>
            <li data-aos="zoom-in-up">Instagram</li>
          </ul>
        </div>
      </div>
      <p
        data-aos="zoom-in-up"
        className="text-[#FFFFFF99] text-left w-full px-48"
      >
        © Copyright 2024 OMNIDROP HOLDING LLC, WY, US
      </p>
    </div>
  );
};

export default Footer;
