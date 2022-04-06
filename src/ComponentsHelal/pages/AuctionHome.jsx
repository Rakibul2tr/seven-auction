import React from 'react';
import Footer from '../../Components/ShirePage/Footer/Footer';
import Header from '../../Components/ShirePage/Header/Header';
import AuctionFilter from './AuctionHome/AuctionFilter/AuctionFilter';
import SliderBanner from './AuctionHome/SliderBanner/SliderBanner';

const AuctionHome = () => {
    return (
        <>
            <Header/>
            <SliderBanner />
            <AuctionFilter />
            <Footer/>
        </>
    )
}

export default AuctionHome;