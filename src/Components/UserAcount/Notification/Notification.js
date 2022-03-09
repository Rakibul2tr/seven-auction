import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Notification.css";

const Notification = () => {
  const notification=[
    {
      title:'Ahmed bid your car',
      icon:'fas fa-gavel',
      time:3
    },
    {
      title:'Rakib bid your car',
      icon:'far fa-bookmark',
      time:5
    },
    {
      title:'Abir bid your car',
      icon:'fas fa-comment-dots',
      time:7
    },
  ]
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="pb-4">
        <div className="my_account">
          <h4>Notification</h4>
        </div>
        <div className="notific_body">
          {
            notification.map(item=>(<div className="notific_item" key={item.time}>
            <div className="notific_icon_and_text">
              <div className="notific_icon">
                <i className={item.icon}></i>
              </div>
              <div className="notific_text">
                <p>{item.title}</p>
              </div>
            </div>
            <div className="notific_time">
              <div className="bullet_icon">
                <i className="fas fa-circle"></i>
              </div>
              <div className="time">
                <span>{item.time} min</span>
              </div>
            </div>
          </div> ))
          }
          



         

        </div>
      </Row>
    </Container>
  );
};

export default Notification;
