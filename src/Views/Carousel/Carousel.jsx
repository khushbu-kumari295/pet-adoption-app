import React, { useState } from "react";
import "./Carousel.css";

export const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const childCount = React.Children.count(children);

    const goToNext = () => {
        setActiveIndex((activeIndex + 1) % childCount);
    };

    const goToPrev = () => {
        setActiveIndex(activeIndex === 0 ? childCount - 1 : activeIndex - 1);
    };

    return (
        <div className="carousel" role="region">
            <div className="inner-div" style={{ transform: `translateX( ${-1 * activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <button
                className="carousel__control carousel__control--previous"
                onClick={goToPrev}
                aria-label='Prev'
            >
                &lt;
            </button>
            <button
                className="carousel__control carousel__control--next"
                onClick={goToNext}
                aria-label='Next'
            >
                &gt;
            </button>
            <div className="dot-indicator-container">
                <ul>
                    {React.Children.map(children, (child, index) => <li>
                        <button
                            onClick={() => setActiveIndex(index)}
                            className={index === activeIndex ? 'selected' : ''}>
                            {index}
                        </button>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};
export default Carousel;