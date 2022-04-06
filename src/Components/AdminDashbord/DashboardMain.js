import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu/DashboardMenu";

const DashboardMain = () => {
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="pt-4">
        <div className="col-md-3">
          <DashboardMenu />
        </div>
        <div className="col-md-9" style={{ minHeight: "500px" }}>
          <Outlet />
        </div>
      </Row>
    </Container>
  );
};

export default DashboardMain;
