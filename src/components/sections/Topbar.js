import React, { useState } from "react";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "OverView" },
    { key: "top", label: "Top Building" },
    { key: "response", label: "Response Time" },
    { key: "conversion", label: "View and conversion rate" },
  ];

  return (
    <div
      className="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap border-bottom"
      style={{ borderBottom: "1px solid lightgray" }}
    >
      {/* Tabs Section */}
      <div
        className="d-flex overflow-auto"
        style={{
          whiteSpace: "nowrap",
          maxWidth: "100%",
          paddingBottom: "0",
        }}
      >
        {tabs.map((tab) => (
          <a
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              color: activeTab === tab.key ? "blue" : "black",
              paddingBottom: "4px",
              borderBottom:
                activeTab === tab.key
                  ? "2px solid blue"
                  : "2px solid transparent",
              marginRight: "16px",
              cursor: "pointer",
              fontWeight: activeTab === tab.key ? "500" : "400",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="d-none d-md-block"
        style={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          textAlign: "center",
          padding: "5px 15px",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Je advertentie afmaken
      </div>
    </div>
  );
}

// top bar
// <div
//   className="d-flex"
//   style={{
//     borderBottom: "1px solid lightgray",
//     justifyContent: "space-between",
//   }}
// >
//   <div className="d-flex" style={{}}>
//     <a
//       style={{
//         color: "blue",
//         paddingBottom: "4px",
//         borderBottom: "1px solid blue",
//         marginRight: "12px",
//       }}
//     >
//       OverView
//     </a>
//     <a
//       style={{
//         color: "blue",
//         paddingBottom: "4px",
//         borderBottom: "1px solid blue",
//         marginRight: "12px",
//       }}
//     >
//       Top Building
//     </a>
//     <a
//       style={{
//         color: "blue",
//         paddingBottom: "4px",
//         borderBottom: "1px solid blue",
//         marginRight: "12px",
//       }}
//     >
//       Response Time
//     </a>
//     <a
//       style={{
//         color: "blue",
//         paddingBottom: "4px",
//         borderBottom: "1px solid blue",
//         marginRight: "12px",
//       }}
//     >
//       View and converstion rate
//     </a>
//   </div>
//   <div
//     style={{
//       border: "1px solid lightgray",
//       borderRadius: "10px",
//       textAlign: "center",
//     }}
//   >
//     <p
//       style={{
//         padding: "5px 15px",
//       }}
//     >
//       Je advertentie afmaken
//     </p>
//   </div>
// </div>
