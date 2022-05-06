import React from 'react';
import Products from '../DataLoaded/Products/Products';
import Banner from './Banner/Banner';
import './Home.css'
import OneSection from './OneSection/OneSection';
import Twosection from './Twosection/Twosection';
const Home = () => {

    return (
        <div>
         
            <Banner></Banner>  
            <Products></Products>     
            <OneSection></OneSection>
            <Twosection></Twosection>

           
        </div>
    );
};

export default Home;