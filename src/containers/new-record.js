/* eslint-disable import/named */
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Spinner from "../components/spinner";
import "../../src/styles/new-record.css";
import { createRecord } from "../actions/records";
import { failureToast, successToast } from "../actions/toast";
// import { Link } from "react-router-dom";

const newRecord = props => {
  const [recordData, setRecordData] = useState({
    location: null,
    comment: null,
    type: null
  });
  const [loading, setLoading] = useState(false);

  const updateInput = e => {
    setRecordData({ ...recordData, [e.target.name]: e.target.value });
  };

  const validateUserData = (e) => {
    e.preventDefault();
    setLoading(true);
    const fieldsArr = Object.entries(recordData);
    const errors = [];
    fieldsArr.forEach(field => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
        props.failureToast(`${field[0]} is required.`);
      }
    });
    return errors.length < 1 ? create() : setLoading(false);
  };

  const create = () => {
    props.createRecord(recordData, recordData.type).then(res => {
      const { error } = res;
      if (error) {
        setLoading(false);
        if(Array.isArray(error)) {
          return error.forEach(err => props.failureToast(err));
        } else {
          return props.failureToast(error);
        }
      } else {
        props.history.push('/profile');
      }
    });
  };

  return (
    <div className="boxes">
      <ToastContainer autoClose={5000} />
      <div className="welcome-box">
        <h1 className="welcome"> Add a new record</h1>
      </div>
      <form className="new-record">
        <span className="custom-dropdown">
          <select name="type" onChange={updateInput}>
            <option>Select record type</option>
            <option value="red-flag">Red flag</option>
            <option value="intervention">Intervention</option>
          </select>
        </span>
        <textarea
          type="text"
          placeholder="Comment"
          name="comment"
          required
          onChange={updateInput}
        ></textarea>
        <p className="upload-txt">upload proof (optional)</p>
        <input 
          id="upload" 
          type="file" 
          name="file-upload"
        />
        <input
          type="text"
          placeholder="Location; where did this happen?"
          onChange={updateInput}
          name="location"
        />
        <div className="btns">
          <button
            className="auth-button"
            onClick={validateUserData}
          >
            {
              loading ? <Spinner loading={loading} /> : <h3 className="signin-txt"> Create record </h3>
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(() => ({}), { createRecord, successToast, failureToast })(newRecord);
