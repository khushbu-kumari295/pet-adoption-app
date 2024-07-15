import { faq, fosteringFaq } from '../data/faq-data';
import faqImage from '../Images/faq1.jpg';
import AccordionItem from "./Accordion/AccordionItem";

export function AdoptionFaq() {
    return (
        <div className="faq">
            <div className="faq-image">
                <img src={faqImage} alt="FAQ"></img>
            </div>
            <div className="faq-section">
                <h2>General</h2>
            </div>
            {faq.map((f, i) =>
                <AccordionItem
                    key={i}
                    accordionData={{
                        title: f.question,
                        content: f.answer
                    }}
                />
            )}
            <div className="faq-section">
                <h2>Fostering</h2>
            </div>
            {fosteringFaq.map((f, i) =>
                <AccordionItem
                    key={i}
                    accordionData={{
                        title: f.question,
                        content: f.answer
                    }}
                />
            )}
        </div>
    )
}