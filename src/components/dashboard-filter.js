/* eslint-disable react/display-name */
import React from 'react';

export default () => (
  <div className="filter-row">
    <div className="selects">
      <select>
        <option>Type</option>
        <option value="1">Intervention</option>
        <option value="2">Red flag</option>
      </select>
    </div>
    <div className="selects">
      <select>
        <option>Status</option>
        <option value="1">Draft</option>
        <option value="2">Resolved</option>
        <option value="3">Rejected</option>
      </select>
    </div>
    <button className="filter-button">Filter</button>
  </div>
);
