import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import AccountUpdate from "./AccountUpdate/AccountUpdate";
import AcountMenu from "./AcountMenu/AcountMenu";
import Notification from "./Notification/Notification";
import Wallet from "./Wallet/Wallet";

const UserAcount = () => {
  const [currentMenu, setcurrentMenu] = useState("acount");
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="py-4">
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
        </div>
      </Row>
    </Container>
  );
};

export default UserAcount;
