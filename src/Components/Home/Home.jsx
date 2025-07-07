import React from 'react';
import Banner from '../HomeSection/Banner';
import AboutUs from '../HomeSection/AboutUs';
import ServiceSection from '../HomeSection/ServiceSection';
import NewsSection from '../HomeSection/NewsSection';
import BestReliable from '../HomeSection/BestReliable';
import DigitalPaltfrom from '../HomeSection/DigitalPaltfrom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceSection></ServiceSection>
            <BestReliable></BestReliable>
            <DigitalPaltfrom></DigitalPaltfrom>
            <NewsSection></NewsSection>
        </div>
    );
};

export default Home;