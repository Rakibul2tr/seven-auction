import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import AccountUpdate from "./AccountUpdate/AccountUpdate";
import AcountMenu from "./AcountMenu/AcountMenu";
import InquiresMain from "./Inquiris/InquiresMain";
import Marksed from "./Marksed/Marksed";
import MyAuction from "./MyAuction/MyAuction";
import MyBid from "./MyBid/MyBid";
import Notification from "./Notification/Notification";
import Wallet from "./Wallet/Wallet";

const UserAcount = () => {
  const [currentMenu, setcurrentMenu] = useState("acount");
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="py-5">
        <div className="col-md-3">
          <AcountMenu
            setcurrentMenu={setcurrentMenu}
            currentMenu={currentMenu}
          />
        </div>
        <div className="col-md-9" style={{ minHeight: "500px" }}>
          {currentMenu === "acount" ? <AccountUpdate /> : null}
          {currentMenu === "notification" ? <Notification /> : null}
          {currentMenu === "wallet" ? <Wallet /> : null}
          {currentMenu === "bid" ? <MyBid /> : null}
          {currentMenu === "auction" ? <MyAuction /> : null}
          {currentMenu === "mark" ? <Marksed /> : null}
          {currentMenu === "inquireas" ? <InquiresMain /> : null}
        </div>
      </Row>
    </Container>
  );
};

export default UserAcount;