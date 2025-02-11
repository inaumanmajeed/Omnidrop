import Accordion from './Accordion';
import { FAQ_DATA } from '../../static/FaqData';

const Faq = () => {
  return (
    <div className="pt-8 faq__content pb-20 px-16 w-full">
      <div>
        <p
          data-aos="zoom-out-down"
          className="flex justify-between gap-2 font-medium items-center bg-[#F4F4F4] py-1 px-4 w-fit rounded-full"
        >
          FAQ
          <span className="w-[6px] h-[6px] rounded-full bg-[#242424]" />
        </p>
        <p
          data-aos="zoom-in-right"
          className="font-normal mt-4 text-[clamp(38px,5vw,68px)]"
        >
          Everything you
        </p>
        <p
          data-aos="zoom-in-right"
          className="font-normal text-[clamp(38px,5vw,68px)]"
        >
          need to know
        </p>
        <Accordion data={FAQ_DATA} />
      </div>
    </div>
  );
};

export default Faq;
