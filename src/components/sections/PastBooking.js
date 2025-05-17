import React from "react";
import SemicircleChart from "./SemiCircleChart";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/one.jpg";
const PastBooking = () => {
  return (
    <div className="container mt-4">
      <p style={{ textAlign: "start", fontWeight: "600", fontSize: "18px" }}>
        Overview on past bookings
      </p>

      <div
        style={{
          display: "flex",
          // flexDirection: "row",
          width: "100%",
          gap: "10px",
        }}
        className="d-flex flex-column flex-md-row w-100 gap-3"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            gap: "10px",
          }}
          className="responsive-width"
        >
          <div
            style={{
              display: "flex",
              // flexDirection: "row",
              width: "100%",
              gap: "10px",
            }}
            className="d-flex flex-column flex-md-row w-100 gap-3"
          >
            {/* Left Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                flex: 5,
              }}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#FFFFFF",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12)",
                    borderRadius: "8px",
                    flexDirection: "column",
                    padding: "16px",
                  }}
                >
                  <p style={{ fontSize: "48px", margin: 0 }}>0</p>
                  <p style={{ margin: 0, fontWeight: 500 }}>#book Required</p>
                </div>
              ))}
            </div>

            {/* Middle Chart */}
            <div
              style={{ flex: 3, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12)" }}
            >
              <SemicircleChart />
            </div>
          </div>
          <div
            style={{ flex: 1,flexDirection:'column', fontSize: "14px", paddingTop: "20px" }}
            className="d-flex d-md-none"
          >
            <p style={{ fontWeight: 600 }}>Compared to other buildings</p>
            <p style={{ margin: 0 }}>
              % booking accepted under 75% is considered as bad
            </p>
            <p style={{ margin: 0 }}>
              % booking accepted under 85% is considered as bad
            </p>
          </div>
          <p style={{ textAlign: "start" }}>Inform Eb Tips</p>
          <div className="row g-2">
            {[one, two, three, four, one].map((src, index) => (
              <div key={index} className="col-6 col-md-3 d-flex">
                <div
                  className="w-100 border d-flex flex-column align-items-center"
                  // style={{ padding: "5px" }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={src}
                      alt={`img-${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="text-center mt-2">
                    Hoe Je Wortt betaald voor Verhuren
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Info */}
        <div
          style={{ flex: 1, fontSize: "14px", paddingTop: "20px" }}
          className="d-none d-md-block"
        >
          <p style={{ fontWeight: 600 }}>Compared to other buildings</p>
          <p style={{ margin: 0 }}>
            % booking accepted under 75% is considered as bad
          </p>
          <p style={{ margin: 0 }}>
            % booking accepted under 85% is considered as bad
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastBooking;
