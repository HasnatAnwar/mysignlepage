import React from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { Calendar, Calendar2, Pen, Pencil } from "react-bootstrap-icons";
export const Dropdownbar = () => {
  return (
    <div
      style={{
        // display: "flex",
        flexDirection: "row",
        padding: "10px 0px",
        overflowX: "auto", // enables horizontal scroll
        whiteSpace: "nowrap", // keeps items in one row
        padding: "10px 0px",
      }}
      className="d-flex overflow-auto"
    >
      <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
        <Button variant="outline" className="btn-outline-secondary" size="sm">
          <Pencil size={18} style={{ marginRight: "10px" }} />
          Workspace
        </Button>
        <Dropdown.Toggle
          split
          variant="outline"
          className="btn-outline-secondary"
          size="sm"
          id="larg-btn2"
        />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
        <Button variant="outline" className="btn-outline-secondary" size="sm">
          <Pencil size={18} style={{ marginRight: "10px" }} />
          Building
        </Button>
        <Dropdown.Toggle
          split
          variant="outline"
          className="btn-outline-secondary"
          size="sm"
          id="larg-btn2"
        />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
        <Button variant="outline" className="btn-outline-secondary" size="sm">
          <Pencil size={18} style={{ marginRight: "10px" }} />
          Date Filter
        </Button>
        <Dropdown.Toggle
          split
          variant="outline"
          className="btn-outline-secondary"
          size="sm"
          id="larg-btn2"
        />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
        <Button variant="outline" className="btn-outline-secondary" size="sm">
          <Pencil size={18} style={{ marginRight: "10px" }} />
          Workspace Type
        </Button>
        <Dropdown.Toggle
          split
          variant="outline"
          className="btn-outline-secondary"
          size="sm"
          id="larg-btn2"
        />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
