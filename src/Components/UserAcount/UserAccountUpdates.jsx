import React from "react";
import { Container, Row } from "react-bootstrap";
import AccountUpdate from "./AccountUpdate/AccountUpdate";

const UserAccountUpdates = () => {
  return (
    <Container style={{ background: "#F6F8FA" }}>
      <Row className="py-5">
        <div className="col-md-12" style={{ minHeight: "500px" }}>
          <AccountUpdate/>
        </div>
      </Row>
    </Container>
  );
};

export default UserAccountUpdates;
