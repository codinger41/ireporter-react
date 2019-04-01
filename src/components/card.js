import React from 'react';

export default (props) => {
  const { record } = props;
  return (
    <div className="card-wrap">
      <div className="card">
        <a href="#modal"><img src="https://images.pexels.com/photos/1464220/pexels-photo-1464220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img"/></a>
        <div>
          <p>{record.comment.substring(0, 40)}</p>
        </div>
        <div className="row-icons"> 
          <p className="type">{record.type}</p>
          {
            props.user === 'owner' ? (
              <div className="buttons">
                <i className="fa fa-edit sm-icon sm-icon-edit" aria-hidden="true" />
                <i className="fa fa-trash sm-icon sm-icon-delete" aria-hidden="true" />
              </div>
            ) : null
          }
        </div>
      </div>
      <div id="modal" className="modaloverlay">
        <div className="modal">
          <a href="#close" className="close">&times;</a>
          <div className="modal-content">
            <img
              src="https://images.pexels.com/photos/1464220/pexels-photo-1464220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
              className="modal-img"/>
            <div className="modal-record-details">
              <h2 className="modal-record-type">{record.type}</h2>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h2 className="modal-record-type">Comment</h2>
              <p>{record.comment}</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="select-status">
                <div className="selects">
                  <select>
                    <option>Change status</option>
                    <option value="1">Under Investigation</option>
                    <option value="2">Resolved</option>
                    <option value="2">Rejected</option>
                  </select>
                </div>
                <button className="status-update-button" >Update status</button>
              </div>
              <div className="row-plain">
                <div>
                  <h2 className="modal-record-type">Location</h2>
                  <p>{record.location}</p>
                </div>
                <div>
                  <h2 className="modal-record-type">Status</h2>
                  <p>{record.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
