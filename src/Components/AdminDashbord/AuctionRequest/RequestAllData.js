import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import "./AuctionReques.css";
import UseHoocks from "../../../UseHoocks/UseHoocks";
import Moment from "react-moment";

const RequestAllData = () => {
  const { AdminbearerToken } = UseHoocks();
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch(`https://seven-auction.herokuapp.com/api/admin/auctions-requests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: AdminbearerToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAuctions(data?.auctionsData);
      });
  }, [AdminbearerToken]);
  return (
    <>
      <Table striped className="table_div">
        <thead className="table_head">
          <tr className="table_head_row">
            <th>iD</th>
            <th>date</th>
            <th>status</th>
            <th>customer</th>
            <th>vehile</th>
            <th>Type</th>
            <th>auction</th>
          </tr>
        </thead>

        <tbody className="table_body">
          {auctions.map((item) => (
            <tr className="table_body_row" key={item.id}>
              <td>{item.uniqueId}</td>
              <td>
                <Moment date={item.createdAt} format="DD/MM/YYYY" />
              </td>
              <td>
                <div
                  className={
                    item.approval === "closed" || item.approval === "approved"
                      ? "bglighgreen"
                      : "bgProgress" && item.approval === "rejected"
                      ? "bgRejeact"
                      : "bgProgress"
                  }
                >
                  {item.approval}
                </div>
              </td>
              <td>{item.createdBy?.firstName}</td>
              <td>{item.name}</td>
              <td>{item.vehicleType}</td>
              <td>
                <button>show</button>
                <button>status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {auctions.length === 0 && (
        <div
          className="mt-3 mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Spinner
            style={{ margin: "0 auto" }}
            animation="border"
            variant="dark"
          />
        </div>
      )}
    </>
  );
};

export default RequestAllData;
