import React from 'react';
import Banner from '../HomeSection/Banner';
import AboutUs from '../HomeSection/AboutUs';
import ServiceSection from '../HomeSection/ServiceSection';
import NewsSection from '../HomeSection/NewsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceSection></ServiceSection>
            <NewsSection></NewsSection>
        </div>
    );
};

export default Home;