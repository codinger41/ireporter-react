/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/spinner';
import '../styles/new-record.css';
import { getSingleRecord, editRecord } from '../actions/records';
import { failureToast, successToast } from '../actions/toast';

const Edit = (props) => {
  // const { record } = props;
  const [loading, setLoading] = useState(false);
  const [recordData, setRecordData] = useState({
    location: '',
    comment: '',
    type: ''
  });

  const { match: { params: { id, type } } } = props;

  useEffect(() => {
    setLoading(true);
    props.getSingleRecord(id, type).then((res) => {
      if (res.status === 200) {
        const record = res.data[0];
        setRecordData({
          location: record.location,
          comment: record.comment,
          type: record.type
        });
      } else {
        props.history.push('/404');
      }
      setLoading(false);
    });
  }, []);

  const updateInput = (e) => {
    setRecordData({ ...recordData, [e.target.name]: e.target.value });
  };

  const edit = () => {
    props.editRecord(id, type, recordData).then((res) => {
      const { error } = res;
      if (error) {
        setLoading(false);
        if (Array.isArray(error)) {
          return error.forEach(err => props.failureToast(err));
        }
        return props.failureToast(error);
      }
      props.history.push('/profile');
    });
  };

  const validateUserData = (e) => {
    e.preventDefault();
    setLoading(true);
    const fieldsArr = Object.entries(recordData);
    const errors = [];
    fieldsArr.forEach((field) => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
        props.failureToast(`${field[0]} is required.`);
      }
    });
    // return errors.length < 1 ? create() : setLoading(false);
    return errors.length < 1 ? edit() : setLoading(false);
  };

  return (
    <div className="boxes">
      <ToastContainer autoClose={5000} />
      <div className="welcome-box">
        <h1 className="welcome"> Add a new record</h1>
      </div>
      <form className="new-record">
        <span className="custom-dropdown">
          <select value={recordData.type} name="type" onChange={updateInput}>
            <option>Select record type</option>
            <option value="red-flag">Red flag</option>
            <option value="intervention">Intervention</option>
          </select>
        </span>
        <textarea
          type="text"
          name="comment"
          required
          value={recordData.comment}
          onChange={updateInput}
        />
        <p className="upload-txt">upload proof (optional)</p>
        <input
          id="upload"
          type="file"
          name="file-upload"
        />
        <input
          type="text"
          onChange={updateInput}
          value={recordData.location}
          name="location"
        />
        <div className="btns">
          <button
            className="auth-button"
            onClick={validateUserData}
          >
            {
              loading ? <Spinner loading={loading} /> : <h3 className="signin-txt"> Edit record </h3>
            }
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  record: state.recordsReducer.singleRecord
});

const mapDispatchToProps = {
  getSingleRecord,
  failureToast,
  successToast,
  editRecord
};

Edit.propTypes = {
  getSingleRecord: PropTypes.func.isRequired,
  failureToast: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
