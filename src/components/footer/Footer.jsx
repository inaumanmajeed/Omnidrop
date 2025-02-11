import './footer.css';
import Logo from '../../assets/images/omnidropFooter.svg';
import LogoText from '../../assets/images/footerText.svg';

const Footer = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-[#141414] h-[70dvh] w-full flex flex-col items-center p-6 justify-between relative"
    >
      <img
        src={LogoText}
        alt="Omnidrop Logo"
        className="absolute bottom-16 right-48 omnidrop_logo"
      />
      <div />
      <div className="footer_content flex justify-between items-start w-full px-48">
        <img src={Logo} alt="Omnidrop Logo" />
        <div className="flex footer__menu gap-20">
          <ul className="list">
            <li>Pages</li>
            <li>Features</li>
            <li>FAQs</li>
            <li>Affiliates</li>
          </ul>
          <ul className="list">
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </ul>
          <ul className="list">
            <li>Follow us on</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <p className="copyright text-[#FFFFFF99] text-left w-full px-48">
        © Copyright 2024 OMNIDROP HOLDING LLC, WY, US
      </p>
    </div>
  );
};

export default Footer;
