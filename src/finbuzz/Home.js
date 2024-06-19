import React from "react";
import Header from './HomeComponent/Header.js';
import Navbar from './HomeComponent/Navbar.js';
import Section from "./HomeComponent/Section.js";
import About from "./HomeComponent/About.js";
import WhatWeDo from "./HomeComponent/WhatWeDo.js";
import OurMainGoal from "./HomeComponent/OurMainGoal.js";
import RecentCaseStudies from "./HomeComponent/RecentCaseStudies.js";
import WhyChooseUs from "./HomeComponent/WhyChooseUs.js";
import ExpertPeopleMatter from "./HomeComponent/ExpertPeopleMatter.js";
import OurTestimonials from "./HomeComponent/OurTestimonials.js";
import ContactUs from "./HomeComponent/ContactUs.js";
import WhatsNewsBlog from "./HomeComponent/WhatsNewsBlog.js";
import SubscribeUs from "./HomeComponent/SubscribeUs.js";
import Footer from "./HomeComponent/Footer.js";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Section />
            <About />
            <WhatWeDo />
            <OurMainGoal />
            <RecentCaseStudies />
            <WhyChooseUs />
            <ExpertPeopleMatter />
            <OurTestimonials />
            <ContactUs />
            <WhatsNewsBlog />
            <SubscribeUs />
            <Footer />
        </>
    )
}