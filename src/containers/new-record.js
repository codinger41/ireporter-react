import React from "react";
// import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="boxes">
      <div className="welcome-box">
        <h1 className="welcome"> Add a new record</h1>
      </div>
      <form className="new-record">
        <span className="custom-dropdown">
          <select>
            <option>Select record type</option>
            <option>Red flag</option>  
            <option>Intervention</option>
          </select>
        </span>
        <textarea
          type="text"
          placeholder="Comment"
          required
        ></textarea>
        <p className="upload-txt" >upload proof (optional)</p>
        <input 
          id="upload" 
          type="file" 
          name="file-upload"
        />
        <input
          type="text"
          placeholder="Location; where did this happen?"
        />
        <div className="btns">
          <button
            className="auth-button"
          >
            <h3 className="signin-txt"> Post record </h3>
          </button>
        </div>
      </form>
    </div>
  );
};
