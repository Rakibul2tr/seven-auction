import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import AuctionRequest from "./AuctionRequest/AuctionRequest";
import Auction from "./Auctions/Auction";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import Status from "./Status/Status";
import Tickets from "./Tickets/Tickets";
import Upload from "./Upload/Upload";
import Withdrow from "./Withdrow/Withdrow";

const DashboardMain = () => {
  const [currentMenu, setcurrentMenu] = useState("stats");
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="pt-4">
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
          {currentMenu === "request" ? <AuctionRequest /> : null}
          {currentMenu === "auction" ? <Auction/> : null}
          {currentMenu === "withdraws" ? <Withdrow /> : null}
        </div>
      </Row>
    </Container>
  );
};

export default DashboardMain;
