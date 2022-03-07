import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Wallet.css";
const Wallet = () => {
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="py-4">
        <div className="my_wallet">
          <h4>Wallet</h4>
        </div>
        {/* wallet balanc section */}
        <div className="wallet-balenc">
          <div className="balenc_title">
            <h4>balance</h4>
          </div>
          <div className="balanc_amount">
            <span>12,546,4234 S.R</span>
          </div>
          <div className="widrow_and_add_btn">
            <button>withdraw</button>
            <button>add</button>
          </div>
        </div>

        <div className="my_transaction pt-5">
          <h4>transaction</h4>
        </div>

        <div className="transaction_body pb-4">
          {/* transaction item start */}
          <div className="transaction_item">
            <div className="transaction_item_number">
              <span>+24567546 S.R</span>
            </div>
            <div className="transaction_text_and_time">
              <div className="transaction_text">
                <p>222,5467 added your balance</p>
              </div>
              <div className="transaction_time">
                <span>3 min augo</span>
              </div>
            </div>
          </div>
          {/* transaction item start */}
          <div className="transaction_item">
            <div className="transaction_item_number">
              <span>-24567546 S.R</span>
            </div>
            <div className="transaction_text_and_time">
              <div className="transaction_text">
                <p>222,5467 added your balance</p>
              </div>
              <div className="transaction_time">
                <span>3 min augo</span>
              </div>
            </div>
          </div>
          {/* transaction item start */}
          <div className="transaction_item">
            <div className="transaction_item_number">
              <span>+24567546 S.R</span>
            </div>
            <div className="transaction_text_and_time">
              <div className="transaction_text">
                <p>222,5467 added your balance</p>
              </div>
              <div className="transaction_time">
                <span>3 min augo</span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Wallet;
