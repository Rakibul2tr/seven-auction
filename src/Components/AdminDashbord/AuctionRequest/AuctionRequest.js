import React, { useEffect, useState } from 'react';
import "./AuctionReques.css";
import { Container, Row} from "react-bootstrap";
import RequestClosedData from './RequstClosedData';
import RequestProgress from './RequestProgress';
import RequestReject from './RequestReject';
import RequestAllData from './RequestAllData';
import UseHoocks from '../../../UseHoocks/UseHoocks';

const AuctionRequest = () => {
  const {AdminbearerToken}=UseHoocks()
  useEffect(()=>{
    fetch(`https://seven-auction.herokuapp.com/api/admin/auctions-requests`,{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:AdminbearerToken,
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  },[])
    const tickets=[
        {name:'totla tickets',number:2541},
        {name:'confirms',number:83241},
        {name:'in progress',number:3241},
        {name:'rejeacted',number:241},
    ]

    const tabeldatas=[
        {id:1,date:'10/2/1997',status:'in progress',customer:'rakibul',vehile:'farrari 250 ago',type:'car'},

        {id:2,date:'10/2/1997',status:'closed',customer:'sakibul',vehile:'farrari 250 ago',type:'car'},
        {id:3,date:'10/2/1997',status:'closed',customer:'sakibul',vehile:'farrari 250 ago',type:'car'},

        {id:4,date:'10/2/1997',status:'in progress',customer:'nakibul',vehile:'farrari 250 ago',type:'car'},

        {id:5,date:'10/2/1997',status:'rejected',customer:'bakibul',vehile:'farrari 250 ago',type:'bick'},
        {id:6,date:'10/2/1997',status:'rejected',customer:'bakibul',vehile:'farrari 250 ago',type:'bick'},
    ]


    const filterClosed=tabeldatas.filter(item=>{return item.status==='closed'})
    const filterPrograss=tabeldatas.filter(item=>{return item.status==='in progress'})
    const filterRejact=tabeldatas.filter(item=>{return item.status==='rejected'})



    const [menuChange,setmenuChange]=useState('all')
    return (
        <Container style={{ background: "#F6F8FA" }}>
        <Row className="p-4">
          <div className="auction-request">
            <h4>Auction Request</h4>
          </div>
          <Row className="pt-3">
             <div className="top_auction_request">
                {
                    tickets.map(item=>(<div className="auction_request_item" key={item.name}>
                    <p>{item.name}</p>
                    <h6 className={item.name==='confirms'?'lighgreen':'commonColor'&&item.name==='in progress'?'wornigcolor':'commonColor'&&item.name==='rejeacted'?'rejeactColor':'commonColor'}>{item.number}</h6>
                </div>))
                }
               
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
                        onClick={() => setmenuChange("closed")}
                        className={menuChange === "closed" ? "inqiresactive && won_btn" : null}
                        >Confirm</button>
                        <button 
                        onClick={() => setmenuChange("progress")}
                        className={menuChange === "progress" ? "inqiresactive && lost_btn" : null}
                        >in progress</button>
                        <button 
                        onClick={() => setmenuChange("rejacted")}
                        className={menuChange === "rejacted" ? "inqiresactive && lost_btn" : null}
                        >rejacted</button>
                    </div>
                </div>
            </div>
          </Row>
        </Row>
        <Row className='pb-5'>
          <div className="table_section">
            {menuChange==='all'&&<RequestAllData tabeldatas={tabeldatas}/> }
            {menuChange==='closed'&&<RequestClosedData filterClosed={filterClosed}/>}
            {menuChange==='progress'&&<RequestProgress filterPrograss={filterPrograss}/>}
            {menuChange==='rejacted'&&<RequestReject filterRejact={filterRejact}/>}
          </div>
         </Row>
      </Container>
    );
};

export default AuctionRequest;