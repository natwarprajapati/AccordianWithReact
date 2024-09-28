import { useState } from 'react';
import AccordionItem from './AccordionItems';


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isActive={index === activeIndex}
          title={item.title}
          content={item.content}
          onTitleClick={onTitleClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
