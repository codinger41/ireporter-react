/* eslint-disable import/namespace */
/* eslint-disable import/named */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMyRecords } from "../actions/records";
import Stats from "../components/dashboard-stats";
import Filter from "../components/dashboard-filter";
import Card from "../components/card";
import Spinner from "../components/spinner";


const mapRecords = records => records.map(
  record =>
    <Card
      key={record.id}
      record={record}
      user="owner"
    />
);

const Profile = props => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    props
      .getMyRecords()
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="body">
      <Stats />
      <Filter />
      <div className="card-grid">
      {
          loading ? (
            <div className="center-spinner">
              <Spinner loading={true}/>
            </div>
          ) : <div>{mapRecords(props.records)}</div>
      }
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    records: state.recordsReducer.myRecords
  };
};

export default connect(mapStateToProps, { getMyRecords })(Profile);
