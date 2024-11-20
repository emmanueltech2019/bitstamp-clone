import React, { useState } from 'react';

interface AccordionProps {
    title: any;
    answer: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    const handleClick = () => {
        setAccordionOpen(!accordionOpen);
    };

    return (
        <div className=''>
            <div className="question py-[2rem] border-b-[0.5px] border-[#003b2f8e] ">
                <header onClick={handleClick} className='cursor-pointer'>
                    {title}
                </header>
                {
                    !accordionOpen ? (
                        <div className="answer overflow-hidden transition all duration-300 ease-in-out h-0">{answer}</div>
                    ) : (
                        <div className="answer  transition all duration-3000 ease-in-out h-auto">
                            {answer}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Accordion;