import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import adoptMeImgMobile from '../Images/adopt-me.jpg';
import adoptMeImg from '../Images/carausel1.jpg';
import catYogaImg from '../Images/carausel2.jpg';
import dog5krun from '../Images/carausel3.jpg';
import petmas from '../Images/carausel4.jpg';
import catYogaImgMobile from '../Images/cat-yoga.jpg';
import dog5krunMobile from '../Images/huskypuppy.jpg';
import missionImg from '../Images/mission.jpg';
import petmasMobile from '../Images/petmas.jpg';
import { Carousel, CarouselItem } from "./Carousel";

export function About() {
    const [isDesktop, setDesktop] = useState(
        window.matchMedia("(min-width: 950px)").matches
    );

    const updateMedia = () => {
        setDesktop(window.matchMedia("(min-width: 950px)").matches);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    let navigate = useNavigate();
    return (
        <div className="about">
            <Carousel>
                <CarouselItem>
                    <img alt="Adopt me" src={isDesktop ? adoptMeImg : adoptMeImgMobile} onClick={() => { navigate('/new-adopters'); }}></img>
                </CarouselItem>
                <CarouselItem><img alt="Cat Yoga" src={isDesktop ? catYogaImg : catYogaImgMobile} onClick={() => { navigate('/special-events#cat-yoga'); }}></img></CarouselItem>
                <CarouselItem><img alt="Dog 5K Run" src={isDesktop ? dog5krun : dog5krunMobile} onClick={() => { navigate('/special-events#dog-run'); }}></img></CarouselItem>
                <CarouselItem><img alt="Pet Xmas" src={isDesktop ? petmas : petmasMobile} onClick={() => { navigate('/special-events#pet-mas'); }}></img></CarouselItem>
            </Carousel>

            <div className="plan-adopt-container">
                <h2 className="plan-adopt-title">Planning to Adopt a Pet?</h2>
                <div className="card">
                    <h3 >New Adopter's Checklist</h3>
                    <p>Make the transition as smooth as possible.</p>
                    <Link to={'/new-adopters'} alt="Learn more about new adopters checklist">Learn More</Link>
                </div>
                <div className="card">
                    <h3 >Resources for COVID-19</h3>
                    <p>Read about the current adoption procedures, how local shelters and rescue groups are responding, and what you can do right now to help dogs and cats in need.</p>
                    <Link to={'/covid'} alt="Learn more about resources for covid 19">Learn More</Link>
                </div>
                <div className="card">
                    <h3 >Pet Adoption FAQs</h3>
                    <p>Get answers to questions you've never thought about.</p>
                    <Link to={'/adoption-faq'} alt="Learn more about Frequently asked question about pet adoption">Learn More</Link>
                </div>
            </div>
            <div className="mission">
                <div className="mission-image">
                    <img src={missionImg} alt="Mission"></img>
                </div>
                <div className="description">
                    <h2>Our Mission and Vision</h2>
                    <p className="inspirational-quote">Saving one pet will not change the world, but surely, for that one pet the world will change forever</p>
                    <p>Our Center will provide temporary fur-ever paradise and medical care for rescued cats and dogs for the purpose of finding them suitable, lovable and permanent new homes.</p>
                    <h3>Visit our Fur-ever Paradise</h3>
                    <p>Address:</p>
                    <p>121 N Paw St, Seattle WA 98109</p>
                    <p>Hours:</p>
                    <p>Mon: 12PM- 6PM ( Last visit at 5PM)</p>
                    <p>Wed-Thurs: 12PM- 6PM ( Last visit at 5PM)</p>
                    <p>Fri-Sun: 12PM- 6PM ( Last visit at 5PM)</p>
                    <p>For more questions? See our <Link to={'/adoption-faq'}>FAQ.</Link></p>
                </div>
            </div>
        </div >
    )
}