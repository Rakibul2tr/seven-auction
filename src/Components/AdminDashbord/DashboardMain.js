import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import AuctionRequest from "./AuctionRequest/AuctionRequest";
import Auctions from "./Auctions/Auctions";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import Status from "./Status/Status";
import Tickets from "./Tickets/Tickets";
import Upload from "./Upload/Upload";
import Withraws from "./Withraws/Withraws";

const DashboardMain = () => {
  const [currentMenu, setcurrentMenu] = useState("stats");
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="">
        <div className="col-md-3">
          <DashboardMenu
            setcurrentMenu={setcurrentMenu}
            currentMenu={currentMenu}
          />
        </div>
        <div className="col-md-9" style={{ minHeight: "500px" }}>
          {currentMenu === "stats" ? <Status/> : null}
          {currentMenu === "upload" ? <Upload/> : null}
          {currentMenu === "tickets" ? <Tickets/> : null}
          {currentMenu === "request" ? <AuctionRequest/> : null}
          {currentMenu === "auction" ? <Auctions/> : null}
          {currentMenu === "withdraws" ? <Withraws /> : null}
        </div>
      </Row>
    </Container>
  );
};

export default DashboardMain;
