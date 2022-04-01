import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Status.css";
import stats1 from "../../../assets/images/icon/user.png"
import stats2 from "../../../assets/images/icon/action.png"
import stats3 from "../../../assets/images/icon/bid.png"
import stats4 from "../../../assets/images/icon/live.png"
import stats5 from "../../../assets/images/icon/car.png"
import stats6 from "../../../assets/images/icon/bick.png"
import stats7 from "../../../assets/images/icon/comment.png"
import stats8 from "../../../assets/images/icon/headPhon.png"
import UseHoocks from "../../../UseHoocks/UseHoocks";

const Status = () => {
  const {AdminbearerToken}=UseHoocks()

  const [status,setStatus]=useState();
  useEffect(()=>{
    fetch(`https://seven-auction.herokuapp.com/api/admin/stats`,{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:AdminbearerToken,
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      
      setStatus(data);
    })
  },[])

  

  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="p-4">
        <div className="status">
          <h4>stats</h4>
        </div>
        <Row className="pt-5">
         
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats1} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>users</h6>
                      <p>{status?.stats.users}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats2} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>auction</h6>
                      <p>{status?.stats.auctions}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats3} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>bids</h6>
                      <p>{status?.stats.bids}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats4} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>Live auction</h6>
                      <p>{status?.stats.liveAuctions}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats5} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>car sold</h6>
                      <p>{status?.stats.carSolds}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats6} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>Bicke sold</h6>
                      <p>{status?.stats.bikeSolds}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats7} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>Comment</h6>
                      <p>{status?.stats.Comments}</p>
                  </div>
              </div>
          </Col>
          <Col md={4} >
              <div className="stats_item">
                  <div className="icon-div">
                      <div className="stats_icon">
                          <img className="img-fluid text-white" src={stats8} alt="" />
                      </div>
                  </div>
                  <div className="stats_name_number">
                      <h6>ticket</h6>
                      <p>{status?.stats.ticket}</p>
                  </div>
              </div>
          </Col>
            
        </Row>
      </Row>
    </Container>
  );
};

export default Status;
