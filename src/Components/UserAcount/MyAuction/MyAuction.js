import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './MyAuction.css'
import car1 from "../../../assets/images/car/car-5.png";
import car2 from "../../../assets/images/car/car-6.png";
import countryFlag from "../../../assets/images/saudi-flag.png";
import SoldTabe from './SoldTabe';
import LiveAuctionTabe from './LiveAuctionTabe';
import UnsoldTabe from './UnsoldTabe';

const MyAuction = () => {
    const Livecars = [
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car1,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of ",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car2,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        }
        
        
    ];
    const [menuChange,setmenuChange]=useState('live')
   
    return (
    <Container style={{ background: "#F6F8FA" }}>
       <Row className="pb-4">
        <div className="my_auction">
          <h4>My Auction</h4>
        </div>
        <div className="auction_body">
            <div className="My_auction_menu py-3">
                <button 
                onClick={() => setmenuChange("live")}
                className={menuChange === "live" ? "bidMenuactive && live_btn" : null}
                >Live Auction</button>
                <button 
                onClick={() => setmenuChange("won")}
                className={menuChange === "won" ? "bidMenuactive && won_btn" : null}
                >Sold</button>
                <button 
                onClick={() => setmenuChange("lost")}
                className={menuChange === "lost" ? "bidMenuactive && lost_btn" : null}
                >Unsold</button>
            </div>
            {
                menuChange==='live'&&<LiveAuctionTabe Livecars={Livecars} />
            }
            {
               menuChange==='won'&&<SoldTabe Livecars={Livecars} /> 
            }
            {
               menuChange==='lost'&&<UnsoldTabe Livecars={Livecars} /> 
            }
        </div>
      </Row>
    </Container>
    );
};

export default MyAuction;