import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Inquires.css';
import ticketImg from '../../../assets/images/icon/headPhon.png';
import AllInquires from './AllInquires';
import ClosedInquires from './ClosedInquires';
import ProgressInquires from './ProgressInquires';
import RejactedInquires from './RejactedInquires';

const InquiresMain = () => {

    const Tickets = [
        {
            ticket: "12459",
            desc: "Lorem Ipsum is simply dummy text of the",
            status:"closed",
            img:ticketImg,
        },
        {
            ticket: "09859",
            desc: "Lorem Ipsum is simply dummy text of the",
            status:"closed",
            img:ticketImg,
        },
        {
            ticket: "85735",
            desc: "Lorem Ipsum is simply dummy text of dht sdfj the",
            status:"In Progress",
            img:ticketImg,
        },
        {
            ticket: "78459",
            desc: "Lorem Ipsum is simply dummy text of sdfaf sdfds the",
            status:"rejected",
            img:ticketImg,
        },
        {
            ticket: "523598",
            desc: "Lorem Ipsum is simply dummy text of sdfaf sdfds the",
            status:"rejected",
            img:ticketImg,
        },
        {
            ticket: "01982",
            desc: "Lorem Ipsum is simply dummy text of sdfaf sdfds the",
            status:"closed",
            img:ticketImg,
        },
        
    ];

    const filterClosed=Tickets.filter(item=>{return item.status==='closed'})
    const filterPrograss=Tickets.filter(item=>{return item.status==='In Progress'})
    const filterRejact=Tickets.filter(item=>{return item.status==='rejact'})
    

    const [menuChange,setmenuChange]=useState('all')
    return (
        <Container style={{ background: "#F6F8FA" }}>
       <Row className="pb-4">
        <div className="my_inquires">
          <h4>teckets</h4>
        </div>
        <div className="auction_body">
            <div className="inquires_nav d-flex justify-content-between align-items-center">
                <div className="inquires_menu py-3 ">
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
                <div className="new_tecket">
                    <button>submit new tickets</button>
                </div>
            </div>
            {
                menuChange==='all'&&<AllInquires Tickets={Tickets} />
            }
            {
               menuChange==='closed'&&<ClosedInquires Tickets={filterClosed} /> 
            }
            {
               menuChange==='progress'&&<ProgressInquires Tickets={filterPrograss}/> 
            }
            {
               menuChange==='rejacted'&&<RejactedInquires Tickets={filterRejact}/> 
            }
        </div>
      </Row>
    </Container>
    );
};

export default InquiresMain;