import React from 'react';
import Banner from '../HomeSection/Banner';
import AboutUs from '../HomeSection/AboutUs';
import ServiceSection from '../HomeSection/ServiceSection';
import NewsSection from '../HomeSection/NewsSection';
import BestReliable from '../HomeSection/BestReliable';
import DigitalPaltfrom from '../HomeSection/DigitalPaltfrom';
import OurTeam from '../HomeSection/OurTeam';
import TrustedBy from '../HomeSection/TrustedBy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceSection></ServiceSection>
            <BestReliable></BestReliable>
            <OurTeam></OurTeam>
            <DigitalPaltfrom></DigitalPaltfrom>
           <TrustedBy></TrustedBy>
            <NewsSection></NewsSection>
        </div>
    );
};

export default Home;