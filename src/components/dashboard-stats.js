import React from "react";

const Stats = () => {
  return(
    <div className="row-plain user-record-stats">
      <div className="stat-box">
        <h1 className="stat-number">9</h1>
        <p className="stat-text">Total</p>
      </div>
      <div className="stat-box">
        <h1 className="stat-number">9</h1>
        <p className="stat-text">Resolved</p>
      </div>
      <div className="stat-box">
        <h1 className="stat-number">9</h1>
        <p className="stat-text">Rejected</p>
      </div>
    </div>
  );
};

export default Stats;
