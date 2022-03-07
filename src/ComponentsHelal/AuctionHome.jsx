import React from 'react';
import AuctionFilter from './pages/AuctionHome/AuctionFilter/AuctionFilter';
import SliderBanner from './pages/AuctionHome/SliderBanner/SliderBanner';

const AuctionHome = () => {
    return (
        <>
            <SliderBanner />
            <AuctionFilter />
        </>
    )
}

export default AuctionHome;