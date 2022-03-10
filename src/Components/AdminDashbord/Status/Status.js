import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Status.css";
import stats1 from "../../../assets/images/icon/user.png"
import stats2 from "../../../assets/images/icon/action.png"
import stats3 from "../../../assets/images/icon/bid.png"
import stats4 from "../../../assets/images/icon/live.png"
import stats5 from "../../../assets/images/icon/car.png"

const Status = () => {

  const transaction=[
    {
      number:'245675',
      user:'users',
      icon:stats1
    },
    {
        number:'245675',
        user:'auction',
        icon:stats2
    },
    {
        number:'245675',
        user:'bids',
        icon:stats3
    },
    {
        number:'245675',
        user:'live auction',
        icon:stats4
    },
    {
        number:'245675',
        user:'car sold',
        icon:stats5
    },
  ]

  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="p-4">
        <div className="status">
          <h4>stats</h4>
        </div>
        <Row className="pt-5">
            {
                transaction.map(item=>(<Col md={4} key={item.user}>
                    <div className="stats_item">
                        <div className="icon-div">
                            <div className="stats_icon">
                               <img className="img-fluid text-white" src={item.icon} alt="" />
                            </div>
                        </div>
                        <div className="stats_name_number">
                            <h6>{item.user}</h6>
                            <p>{item.number}</p>
                        </div>
                    </div>
                </Col>))
            }
        </Row>
      </Row>
    </Container>
  );
};

export default Status;
