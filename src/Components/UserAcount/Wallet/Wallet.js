import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Wallet.css";
const Wallet = () => {

  
  const transaction=[
    {
      add:'+24567546 S.R',
      number:'+24567546 S.R',
      balanc:'222,5467',
      time:3,
      
    },
    {
      withdrow:'-14567546 S.R',
      number:'-14567546 S.R',
      balanc:'822,5467',
      time:4
    },
    {
      withdrow:'-54567546 S.R',
      number:'-54567546 S.R',
      balanc:'522,5467',
      time:5
    },
    {
      add:'+54567546 S.R',
      number:'+54567546 S.R',
      balanc:'522,5467',
      time:5
    },
  ]

  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="pb-4">
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
          <h4>transactions</h4>
        </div>

        <div className="transaction_body pb-4">
          {/* transaction item start */}
          {
            transaction.map(item=>(<div className="transaction_item" key={item.time}>
            <div className="transaction_item_number">
              <span className={item.add && 'ColorGreen'}>{item.number}</span>
            </div>
            <div className="transaction_text_and_time">
              <div className="transaction_text">
                <p>{item.balanc} added your balance</p>
              </div>
              <div className="transaction_time">
                <span>{item.time} min augo</span>
              </div>
            </div>
          </div>))
          }

        </div>
      </Row>
    </Container>
  );
};

export default Wallet;
