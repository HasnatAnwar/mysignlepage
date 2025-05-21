import React from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

// Reusable dropdown button group
const DropdownItemGroup = ({ icon, label }) => (
  <Dropdown as={ButtonGroup} className="me-2 mb-2 flex-shrink-0">
    <Button
      variant="outline-secondary"
      size="sm"
      className="d-flex align-items-center text-secondary"
      style={{ fontSize: "16px" }}
    >
      {icon}
      {label}
    </Button>
    <Dropdown.Toggle
      split
      variant="outline-secondary"
      size="sm"
      id={`dropdown-split-${label}`}
    />
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

// Wrapper component with mobile-only scroll behavior
export const Dropdownbar = () => {
  return (
    <div
      className="d-flex flex-wrap flex-md-nowrap px-3 py-2 position-relative"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <div className="d-flex">
        <DropdownItemGroup
          icon={<Pencil size={18} className="me-2" />}
          label="Workspace"
        />
        <DropdownItemGroup
          icon={<Pencil size={18} className="me-2" />}
          label="Building"
        />
        <DropdownItemGroup
          icon={<Pencil size={18} className="me-2" />}
          label="Date Filter"
        />
        <DropdownItemGroup
          icon={<Pencil size={18} className="me-2" />}
          label="Workspace Type"
        />
      </div>
    </div>
  );
};

// import React from "react";
// import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
// import { Calendar, Calendar2, Pen, Pencil } from "react-bootstrap-icons";
// export const Dropdownbar = () => {
//   return (
//     <div className="d-flex flex-wrap flex-md-nowrap overflow-x-auto position-relative px-2 py-2">
//       <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
//         <Button
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           style={{ color: "#666666", fontSize: "16px" }}
//         >
//           <Pencil size={18} style={{ marginRight: "10px" }} />
//           Workspace
//         </Button>
//         <Dropdown.Toggle
//           split
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           id="larg-btn2"
//         />
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
//         <Button
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           style={{ color: "#666666", fontSize: "16px" }}
//         >
//           <Pencil size={18} style={{ marginRight: "10px" }} />
//           Building
//         </Button>
//         <Dropdown.Toggle
//           split
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           id="larg-btn2"
//         />
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
//         <Button
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           style={{ color: "#666666", fontSize: "16px" }}
//         >
//           <Pencil size={18} style={{ marginRight: "10px" }} />
//           Date Filter
//         </Button>
//         <Dropdown.Toggle
//           split
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           id="larg-btn2"
//         />
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <Dropdown as={ButtonGroup} style={{ marginRight: "10px" }}>
//         <Button
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           style={{ color: "#666666", fontSize: "16px" }}
//         >
//           <Pencil size={18} style={{ marginRight: "10px" }} />
//           Workspace Type
//         </Button>
//         <Dropdown.Toggle
//           split
//           variant="outline"
//           className="btn-outline-secondary"
//           size="sm"
//           id="larg-btn2"
//         />
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   );
// };
