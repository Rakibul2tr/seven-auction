import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Notification.css";

const Notification = () => {
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="py-4">
        <div className="my_account">
          <h4>Notification</h4>
        </div>
        <div className="notific_body">
          {/* notification item start */}
          <div className="notific_item">
            <div className="notific_icon_and_text">
              <div className="notific_icon">
                <i className="fas fa-gavel"></i>
              </div>
              <div className="notific_text">
                <p>Ahmed bid your car</p>
              </div>
            </div>
            <div className="notific_time">
              <div className="bullet_icon">
                <i className="fas fa-circle"></i>
              </div>
              <div className="time">
                <span>3 min</span>
              </div>
            </div>
          </div>
          {/* notification item start */}
          <div className="notific_item">
            <div className="notific_icon_and_text">
              <div className="notific_icon">
                <i className="far fa-bookmark"></i>
              </div>
              <div className="notific_text">
                <p>Ahmed bid your car</p>
              </div>
            </div>
            <div className="notific_time">
              <div className="bullet_icon">
                <i className="fas fa-circle"></i>
              </div>
              <div className="time">
                <span>3 min</span>
              </div>
            </div>
          </div>
          {/* notification item start */}
          <div className="notific_item">
            <div className="notific_icon_and_text">
              <div className="notific_icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="notific_text">
                <p>Ahmed bid your car</p>
              </div>
            </div>
            <div className="notific_time">
              <div className="bullet_icon">
                <i className="fas fa-circle"></i>
              </div>
              <div className="time">
                <span>3 min</span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Notification;
