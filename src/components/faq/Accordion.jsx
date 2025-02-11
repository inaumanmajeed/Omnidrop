import { useState } from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/images/up.svg';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="accordion-item bg-[#F4F4F4] mb-8 rounded-2xl p-6"
        >
          <div
            className="accordion-title text-2xl font-medium flex justify-between items-center"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <img
              src={Close}
              alt="close"
              className={`w-[17.33px] h-[16px] transform ${activeIndex !== index ? 'rotate-180' : ''}`}
            />
          </div>
          {activeIndex === index && (
            <div className="accordion-content font-normal pt-5">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
