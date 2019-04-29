/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { loading } = props;
  return loading ? (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  ) : null;
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Spinner;
