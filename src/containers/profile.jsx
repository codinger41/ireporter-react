/* eslint-disable import/namespace */
/* eslint-disable import/named */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMyRecords } from '../actions/records';
import Stats from '../components/dashboard-stats';
import Card from '../components/card';
import Spinner from '../components/spinner';


const mapRecords = (records, isadmin, history) => records.map(
  record => (
    <Card
      key={record.id}
      history={history}
      record={record}
      user={isadmin ? 'admin' : 'owner'}
    />
  )
);

const Profile = (props) => {
  const { userIsAnAdmin, records, history } = props;
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
      <div className="card-grid">
        {
          loading ? (
            <div className="center-spinner">
              <Spinner loading />
            </div>
          ) : <div>{mapRecords(records, userIsAnAdmin, history)}</div>
      }
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  records: state.recordsReducer.myRecords,
  userIsAnAdmin: state.authReducer.user.isadmin
});

Profile.propTypes = {
  getMyRecords: PropTypes.func.isRequired,
  records: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  userIsAnAdmin: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { getMyRecords })(Profile);
