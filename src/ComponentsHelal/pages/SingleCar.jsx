import React from 'react';
import Footer from '../../Components/ShirePage/Footer/Footer';
import Header from '../../Components/ShirePage/Header/Header';
import SingleCarAuction from './SingleCarAuction/SingleCarAuction/SingleCarAuction';

const SingleCar = () => {
    return (
        <>
            <Header/>
            <SingleCarAuction />
            <Footer/>
        </>
    )
}

export default SingleCar;