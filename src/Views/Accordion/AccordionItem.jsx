import React, { useState } from 'react';
import './Accordion.css';

export function AccordionItem({ accordionData }) {
    const [isOpen, setOpen] = useState(false);
    const { title, content } = accordionData;
    const arrow = isOpen ? '\u2BC6' : '\u2BC8';
    return (
        <div className="accordion-item">
            <div className="accordion-title"
                role="button"
                aria-expanded={isOpen ? true : false}
                onClick={() => setOpen(!isOpen)}>
                <div>{arrow}</div>
                <div>{title}</div>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`} role="region">
                {content}
            </div>

        </div>
    );
};

export default AccordionItem;
