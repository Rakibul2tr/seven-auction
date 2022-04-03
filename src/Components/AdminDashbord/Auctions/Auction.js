import React, { useEffect, useState } from 'react';
import "./Auction.css";
import { Container, Row} from "react-bootstrap";
import AuctionSold from './AuctionSold';
import Auctionlive from './Auctionlive';
import AuctionUnsold from './AuctionUnsold';
import AuctionAllData from './AuctionAllData';
import UseHoocks from '../../../UseHoocks/UseHoocks';

const Auction = () => {
  const {AdminbearerToken}=UseHoocks()

  const [auctionList,setAuctionList]=useState();
  useEffect(()=>{
    fetch(`https://seven-auction.herokuapp.com/api/admin/auctions`,{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:AdminbearerToken,
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      setAuctionList(data);
    })
  },[])
 
  console.log(auctionList);
    const tabeldatas=[
        {id:1,date:'10/2/1997',status:'live',customer:'rakibul',vehile:'farrari 250 ago',type:'car'},

        {id:2,date:'10/2/1997',status:'sold',customer:'sakibul',vehile:'farrari 250 ago',type:'car'},
        {id:3,date:'10/2/1997',status:'sold',customer:'sakibul',vehile:'farrari 250 ago',type:'car'},

        {id:4,date:'10/2/1997',status:'live',customer:'nakibul',vehile:'farrari 250 ago',type:'car'},

        {id:5,date:'10/2/1997',status:'unsold',customer:'bakibul',vehile:'farrari 250 ago',type:'bick'},
        {id:6,date:'10/2/1997',status:'unsold',customer:'bakibul',vehile:'farrari 250 ago',type:'bick'},
    ]


    
    const filterlive=tabeldatas.filter(item=>{return item.status==='live'})
    const filtersold=tabeldatas.filter(item=>{return item.status==='sold'})
    const filterunsold=tabeldatas.filter(item=>{return item.status==='unsold'})



    const [menuChange,setmenuChange]=useState('all')
    return (
        <Container style={{ background: "#F6F8FA" }}className='min-vh-100'>
        <Row className="p-4">
          <div className="auction-title">
            <h4>Auction</h4>
          </div>
          <Row className="pt-3">
             <div className="top_auction_section">
                {/* {
                    tickets.map(item=>(<div className="auction_item" key={item.name}>
                    <p>{item.name}</p>
                    <h6 className={item.name==='sold'?'lighgreen':'commonColor'&&item.name==='unsold'?'wornigcolor':'commonColor'&&item.name==='live'?'rejeactColor':'commonColor'}>{item.number}</h6>
                </div>))
                } */}
               <div className="auction_item" >
                    <p>totla</p>
                    <h6 className='commonColor'>{auctionList?.totalAuctionsCount}</h6>
                </div>
                <div className="auction_item" >
                    <p>sold</p>
                    <h6 className='lighgreen'>{auctionList?.soldAuctionsCount}</h6>
                </div>
                <div className="auction_item" >
                    <p>unsold</p>
                    <h6 className='wornigcolor'>{auctionList?.unsoldAuctionsCount}</h6>
                </div>
                <div className="auction_item" >
                    <p>live</p>
                    <h6 className='rejeactColor'>{auctionList?.liveAuctionsCount}</h6>
                </div>
            </div>
          </Row>
          <Row>
            <div className="request_tab_menu">
                <div className="inquires_nav d-flex justify-content-between">
                    <div className="request_menu pt-5 ">
                        <button 
                        onClick={() => setmenuChange("all")}
                        className={menuChange === "all" ? "inqiresactive && live_btn" : null}
                        >all</button>
                        <button 
                        onClick={() => setmenuChange("live")}
                        className={menuChange === "live" ? "inqiresactive && won_btn" : null}
                        >live</button>
                        <button 
                        onClick={() => setmenuChange("sold")}
                        className={menuChange === "sold" ? "inqiresactive && lost_btn" : null}
                        >sold</button>
                        <button 
                        onClick={() => setmenuChange("unsold")}
                        className={menuChange === "unsold" ? "inqiresactive && lost_btn" : null}
                        >unsold</button>
                    </div>
                </div>
            </div>
          </Row>
        </Row>
        <Row className='pb-5'>
          <div className="table_section">
            {menuChange==='all'&&<AuctionAllData tabeldatas={tabeldatas}/> }
            {menuChange==='live'&&<Auctionlive filterlive={filterlive}/>}
            {menuChange==='sold'&&<AuctionSold filtersold={filtersold}/>}
            {menuChange==='unsold'&&<AuctionUnsold filterunsold={filterunsold}/>}
          </div>
         </Row>
      </Container>
    );
};

export default Auction;