import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    About, AdoptionFaq, Cat, CovidResources, Dog, FooterComponent, HeaderComponent, NewAdopters, PlanVist,
    Privacy, SpecialEvents,
    UpcomingSchedule
} from './Views';
import { ScrollToTop } from './Views/ScrollToTop';

export function Routing() {
    return <BrowserRouter>
        <HeaderComponent />
        <ScrollToTop />
        <div id="main">
            <Routes>
                <Route path="/cat" element={<Cat />} />
                <Route path="/dog" element={<Dog />} />
                <Route path="/adoption-faq" element={<AdoptionFaq />} />
                <Route path="/visit" element={<PlanVist />} />
                <Route path="/privacy" element={<Privacy />} />      <Route path="/privacy" element={<Privacy />} />
                <Route path="/covid" element={<CovidResources />} />
                <Route path="/new-adopters" element={<NewAdopters />} />
                <Route path="/special-events" element={<SpecialEvents />} />
                <Route path="/upcoming-schedules" element={<UpcomingSchedule />} />
                <Route index element={<About />} />
            </Routes>
        </div>
        <FooterComponent />
    </BrowserRouter>;
}



