import React, { useState } from "react";
import {
  House,
  Gear,
  InfoCircle,
  List,
  Search,
  Bell,
  Chat,
  Person,
  Envelope,
  Calendar,
  Mailbox,
  scrum,
} from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
// import "./Sidebar.css"; // custom styles

const Sidebar = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => setShowMobileSidebar(!showMobileSidebar);

  const menuItems = [
    { icon: <House size={20} />, label: "Chat", href: "#home" },
    { icon: <Gear size={20} />, label: "Settings", href: "#settings" },
    { icon: <InfoCircle size={20} />, label: "About", href: "#about" },
    { icon: <House size={20} />, label: "Chat", href: "#home" },
    { icon: <Gear size={20} />, label: "Settings", href: "#settings" },
    { icon: <InfoCircle size={20} />, label: "About", href: "#about" },
    { icon: <House size={20} />, label: "Chat", href: "#home" },
    { icon: <Gear size={20} />, label: "Settings", href: "#settings" },
    { icon: <InfoCircle size={20} />, label: "About", href: "#about" },
    { icon: <House size={20} />, label: "Chat", href: "#home" },
    { icon: <Gear size={20} />, label: "Settings", href: "#settings" },
    { icon: <InfoCircle size={20} />, label: "About", href: "#about" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="d-md-none d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-white">
        <div className="d-flex align-items-center gap-3">
          <List size={24} onClick={toggleSidebar} role="button" />
          <Search size={22} />
        </div>
        <div className="d-flex gap-3">
          <Bell size={20} />
          <Chat size={20} />
          <Person size={20} />
          <Envelope size={20} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className="d-none d-md-flex flex-column bg-white text-black p-3"
        style={{
          width: "60px",
          height: "100vh",
          borderRight: "1px solid lightgray",
        }}
      >
        <Nav className="flex-column align-items-center">
          {menuItems.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.href}
              className="text-black my-2 p-0"
            >
              {item.icon}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`mobile-sidebar d-md-none ${
          showMobileSidebar ? "open" : ""
        }`}
      >
        <div className="bg-white p-3 h-100 shadow" style={{ width: "220px" }}>
          <p className="fw-bold mb-4">Menu</p>
          <p style={{ textAlign: "center" }}>App</p>
          <Nav className="flex-column">
            {menuItems.map((item, index) => (
              <Nav.Link
                key={index}
                href={item.href}
                className="d-flex align-items-center gap-2 text-black py-2"
              >
                {item.icon}
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </div>
        <div
          className="sidebar-backdrop"
          onClick={toggleSidebar}
          role="button"
        ></div>
      </div>
    </>
  );
};

export default Sidebar;

// import React from "react";
// import { Nav } from "react-bootstrap";
// import { House, Gear, InfoCircle } from "react-bootstrap-icons";

// const Sidebar = () => {
//   return (
//     <div
//       className="d-flex flex-column bg-white text-black p-3"
//       style={{
//         width: "60px",
//         height: "100vh",
//         borderRight: "1px solid lightgray",
//       }}
//     >
//       <Nav className="flex-column align-items-center">
//         <Nav.Link href="#home" className="text-black my-3 p-0">
//           <House size={28} />
//         </Nav.Link>
//         <Nav.Link href="#settings" className="text-black my-2 p-0">
//           <Gear size={24} />
//         </Nav.Link>
//         <Nav.Link href="#about" className="text-black my-2 p-0">
//           <InfoCircle size={24} />
//         </Nav.Link>
//         <Nav.Link href="#settings" className="text-black my-2 p-0">
//           <Gear size={24} />
//         </Nav.Link>
//         <Nav.Link href="#about" className="text-black my-2 p-0">
//           <InfoCircle size={24} />
//         </Nav.Link>
//         <Nav.Link href="#settings" className="text-black my-2 p-0">
//           <Gear size={24} />
//         </Nav.Link>
//         <Nav.Link href="#about" className="text-black my-2 p-0">
//           <InfoCircle size={24} />
//         </Nav.Link>
//         <Nav.Link href="#settings" className="text-black my-2 p-0">
//           <Gear size={24} />
//         </Nav.Link>
//         <Nav.Link href="#about" className="text-black my-2 p-0">
//           <InfoCircle size={24} />
//         </Nav.Link>
//         <Nav.Link href="#settings" className="text-black my-2 p-0">
//           <Gear size={24} />
//         </Nav.Link>
//         <Nav.Link href="#about" className="text-black my-2 p-0">
//           <InfoCircle size={24} />
//         </Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;
