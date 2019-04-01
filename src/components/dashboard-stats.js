import React from "react";
import { connect } from 'react-redux';

const Stats = props => {
  const { records } = props;
  const draft = records.filter(record => record.status === 'draft');
  const accepted = records.filter(record => record.status === 'accepted');
  const rejected = records.filter(record => record.status === 'rejected');
  return(
    <div className="row-plain user-record-stats">
      <div className="stat-box">
        <h1 className="stat-number">{records.length}</h1>
        <p className="stat-text">Total</p>
      </div>
      <div className="stat-box">
        <h1 className="stat-number">{draft.length}</h1>
        <p className="stat-text">Draft</p>
      </div>
      <div className="stat-box">
        <h1 className="stat-number">{rejected.length}</h1>
        <p className="stat-text">Rejected</p>
      </div>
      <div className="stat-box">
        <h1 className="stat-number">{accepted.length}</h1>
        <p className="stat-text">Accepted</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    records: state.recordsReducer.myRecords
  };
};

export default connect(() => mapStateToProps, {})(Stats);
