import React, { useEffect, useState } from 'react';
import "./Tickets.css"
import { Container, Row} from "react-bootstrap";
import TableAllData from './TableAllData';
import TabelClosedData from './TabelClosedData';
import TabelProgress from './TabelProgress';
import TableReject from './TableReject';
import UseHoocks from '../../../UseHoocks/UseHoocks';

const Tickets = () => {
  const {AdminbearerToken}=UseHoocks()

  const [ticket,setTicket]=useState();
  useEffect(()=>{
    fetch(`https://seven-auction.herokuapp.com/api/admin/tickets`,{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:AdminbearerToken,
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      setTicket(data);
    })
  },[])
  console.log(ticket);

    const tabeldatas=[
        {id:1,date:'10/2/1997',status:'in progress',customer:'rakibul',email:'rakibul@gmail.com',messege:'fur dhfud dhfd'},

        {id:2,date:'10/2/1997',status:'closed',customer:'sakibul',email:'sakibul@gmail.com',messege:'fur dhfud dhfd'},

        {id:3,date:'10/2/1997',status:'in progress',customer:'nakibul',email:'nakibul@gmail.com',messege:'fur dhfud dhfd'},

        {id:4,date:'10/2/1997',status:'rejected',customer:'bakibul',email:'bakibul@gmail.com',messege:'fur dhfud dhfd'},
    ]


    const filterClosed=tabeldatas.filter(item=>{return item.status==='closed'})
    const filterPrograss=tabeldatas.filter(item=>{return item.status==='in progress'})
    const filterRejact=tabeldatas.filter(item=>{return item.status==='rejected'})



    const [menuChange,setmenuChange]=useState('all')
    return (
        <Container style={{ background: "#F6F8FA" }}>
        <Row className="p-4">
          <div className="tickets">
            <h4>tickets</h4>
          </div>
          <Row className="pt-3">
             <div className="top_ticket">
                <div className="ticket_item" >
                    <p>totla tickets</p>
                    <h6 className='commonColor'>{ticket?.totalTickets}</h6>
                </div>
                <div className="ticket_item" >
                    <p>closed</p>
                    <h6 className='lighgreen'>{ticket?.closedTickets}</h6>
                </div>
                <div className="ticket_item" >
                    <p>in progress</p>
                    <h6 className='wornigcolor'>{ticket?.inprogressTickets}</h6>
                </div>
                <div className="ticket_item" >
                    <p>rejeacted</p>
                    <h6 className='rejeactColor'>{ticket?.rejectedTickets}</h6>
                </div>
            </div>
          </Row>
          <Row>
            <div className="ticket_tab_menu">
                <div className="inquires_nav d-flex justify-content-between">
                    <div className="ticket_menu pt-5 ">
                        <button 
                        onClick={() => setmenuChange("all")}
                        className={menuChange === "all" ? "inqiresactive && live_btn" : null}
                        >all</button>
                        <button 
                        onClick={() => setmenuChange("closed")}
                        className={menuChange === "closed" ? "inqiresactive && won_btn" : null}
                        >closed</button>
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
            {menuChange==='all'&&<TableAllData tabeldatas={tabeldatas}ticket={ticket}/> }
            {menuChange==='closed'&&<TabelClosedData filterClosed={filterClosed}/>}
            {menuChange==='progress'&&<TabelProgress filterPrograss={filterPrograss}/>}
            {menuChange==='rejacted'&&<TableReject filterRejact={filterRejact}/>}
          </div>
         </Row>
      </Container>
    );
};

export default Tickets;