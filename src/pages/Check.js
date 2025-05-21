import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Sidebar from "../components/sections/Sidebar";
import TabNavigation from "../components/sections/Topbar";
import { Save, Save2, ThreeDotsVertical } from "react-bootstrap-icons";
import { Dropdownbar } from "../components/sections/Dropdownbar";
import PastBooking from "../components/sections/PastBooking";
function CheckPage() {
  return (
    <Container className="mt-2">
      <div
        className="d-flex d-md-none"
        style={{ justifyContent: "space-between ", padding: "5px 0px" }}
      >
        <h5 style={{}}>Dashboard</h5>
        <ThreeDotsVertical size={24} />
      </div>
      <TabNavigation />

      {/* embedded-text*/}
      <div
        style={{
          display: "flex",
          flex: "flex-row",
          justifyContent: "space-between",
          padding: "15px 0px",
          borderBottom: "1px solid lightgray",
        }}
        className="d-none d-md-flex"
      >
        <h5
          className="d-none d-md-block"
          style={{ fontSize: "20px", color: "#666666" }}
        >
          Embedded Host Dashboard _ OverView
        </h5>
        <div
          className="d-none d-md-block"
          style={{
            justifyContent: "space-between",
            color: "blue",
          }}
        >
          <Save2 size={24} style={{ marginRight: "10px" }} />
          Save to pdf
        </div>
      </div>
      {/* drop-down*/}
      <Dropdownbar />
      {/* welcom text*/}
      <h4 style={{ textAlign: "start" }}>Welcome jan</h4>
      {/* tags-bar */}

      <div
        style={{
          width: "full",
          padding: "10px 0px",
          alignItems: "start",
          display: "flex",
          flexDirection: "row",
          overflowX: "auto", // enables horizontal scroll
          whiteSpace: "nowrap", // keeps items in one row
          padding: "10px 0px",
        }}
      >
        <p
          style={{
            padding: "1px 5px",
            border: "1px solid lightgray",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        >
          Gaan uitchcken (0)
        </p>
        <p
          style={{
            padding: "1px 5px",
            border: "1px solid lightgray",
            borderRadius: "4px",

            marginRight: "10px",
          }}
        >
          Op dit moment te gast (0)
        </p>
        <p
          style={{
            padding: "1px 5px",
            border: "1px solid lightgray",
            borderRadius: "4px",

            marginRight: "10px",
          }}
        >
          Binnenkort verwacht (0)
        </p>{" "}
        <p
          style={{
            padding: "1px 5px",
            border: "1px solid lightgray",
            borderRadius: "4px",

            marginRight: "10px",
          }}
        >
          Binnenkort verwacht (0)
        </p>
      </div>

      {/* past bookings */}
      <PastBooking />
    </Container>
  );
}

export default CheckPage;
