import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './MyBid.css'
import car1 from "../../../assets/images/car/car-1.png";
import car2 from "../../../assets/images/car/car-2.png";
import car3 from "../../../assets/images/car/car-3.png";
import car4 from "../../../assets/images/car/car-4.png";
import countryFlag from "../../../assets/images/saudi-flag.png";
import WonTabe from './WonTabe';
import LiveAuctionTabe from './LiveAuctionTabe';
import LostTabe from './LostTabe';

const MyBid = () => {

    const [bidedAuctions,setbidedAuctions]=useState([])
    fetch(`https://seven-auction.herokuapp.com/api/user/my-bids`)
    .then(res=>res.json())
    .then(data=>setbidedAuctions(data))
    
    const Livecars = [
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car1,
            bidCount: 45,
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
            bidCount: 35,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing ",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car3,
            bidCount: 51,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car4,
            bidCount: 37,
            timecount: "06:30:50",
            price: "149,000 S.R"
        }
        
    ];
    const [menuChange,setmenuChange]=useState('live')
   
    return (
    <Container style={{ background: "#F6F8FA" }}>
       <Row className="pb-4">
        <div className="my_wallet">
          <h4>My Bids</h4>
        </div>
        <div className="bid_body">
            <div className="bid_menu py-3">
                <button 
                onClick={() => setmenuChange("live")}
                className={menuChange === "live" ? "bidMenuactive && live_btn" : null}
                >Live Auction</button>
                <button 
                onClick={() => setmenuChange("won")}
                className={menuChange === "won" ? "bidMenuactive && won_btn" : null}
                >won</button>
                <button 
                onClick={() => setmenuChange("lost")}
                className={menuChange === "lost" ? "bidMenuactive && lost_btn" : null}
                >lost</button>
            </div>
            {
                menuChange==='live'&&<LiveAuctionTabe Livecars={Livecars}bidedAuctions={bidedAuctions} />
            }
            {
               menuChange==='won'&&<WonTabe Livecars={Livecars}bidedAuctions={bidedAuctions} /> 
            }
            {
               menuChange==='lost'&&<LostTabe Livecars={Livecars}bidedAuctions={bidedAuctions} /> 
            }
        </div>
      </Row>
    </Container>
    );
};

export default MyBid;