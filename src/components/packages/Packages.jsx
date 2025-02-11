import Button from '../share/button/Button';
import checked from '../../assets/images/tick.svg';
import './packages.css';
const Packages = () => {
  return (
    <div className="pt-8 pb-20 px-16 w-full">
      <div className="w-full flex-wrap flex gap-20 items-center justify-center">
        {/* card One */}
        <div className="card__wrapper">
          <h6 className="flex flex-col text-[#18181B] text-[26px] font-semibold">
            All-in-One Monthly
            <p>
              49.99$ <span className="font-normal text-xs">/month</span>
            </p>
          </h6>
          <Button
            title={'Get Started'}
            className={
              'bg-[#242424] rounded-[30px] text-white uppercase w-full py-3'
            }
          />
          <ul className="list__wrapper text-[#18181B]">
            <p className="text-[19px] mb-3 font-medium">What you get:</p>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Access to all Products</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Spend</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Order Fulfillment</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Customers</p>
            </li>
          </ul>
        </div>
        {/* card Two */}
        <div className="card__wrapper popular__card">
          <div className="popular__card__header popular__card">
            <p className="uppercase font-semibold text-[14px]">most popular</p>
          </div>
          <h6 className="flex flex-col text-[#18181B] text-[26px] font-semibold">
            All-in-One Monthly
            <p>
              49.99$ <span className="font-normal text-xs">/month</span>
            </p>
          </h6>
          <Button
            title={'Get Started'}
            className={
              'bg-[#242424] rounded-[30px] text-white uppercase w-full py-3'
            }
          />
          <ul className="list__wrapper text-[#18181B]">
            <p className="text-[19px] mb-3 font-medium">What you get:</p>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Access to all Products</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Spend</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Order Fulfillment</p>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={checked} alt="check" />
              <p>Unlimited Customers</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;
