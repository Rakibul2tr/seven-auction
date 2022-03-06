import React from 'react';
import AuctionFilter from './AuctionFilter/AuctionFilter';
import SliderBanner from './AuctionHome/SliderBanner/SliderBanner';

const AuctionHome = () => {
    return (
        <>
            <SliderBanner />
            <AuctionFilter />
        </>
    )
}

export default AuctionHome;