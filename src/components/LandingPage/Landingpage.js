import React from "react";
import "./Landingpage.css";
function LandingPage({ setSelectedCard, info }) {
  return (
    <>
      <div className="card" onClick={() => setSelectedCard(info)}>
        {" "}
        <div className="body">
          <div className="top">
            {info.gender} <span>{info.nat}</span>
          </div>
          <div className="middle">
            {info.name.title} {info.name.first} {info.name.last}
          </div>
          <div className="bottom">{info.email}</div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
