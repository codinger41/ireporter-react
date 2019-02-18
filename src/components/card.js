import React from 'react';

export default () => {
  return (
    <div className="card-wrap">
      <div className="card">
        <a href="#modal"><img src="https://images.pexels.com/photos/1464220/pexels-photo-1464220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img"/></a>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at efficitur nisl. </p>
        </div>
          <p className="type">Red flag</p>
      </div>
      <div id="modal" className="modaloverlay">
      <div className="modal">
        <a href="#close" className="close">&times;</a>
        <div className="modal-content">
          <img
            src="https://images.pexels.com/photos/1464220/pexels-photo-1464220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="modal-img"/>
          <div className="modal-record-details">
            <h2 className="modal-record-type">Red flag</h2>
            <p>by olamilekan</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h2 className="modal-record-type">Comment</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <p>Lagos, Nigeria</p>
              </div>
              <div>
                <h2 className="modal-record-type">Status</h2>
                <p>Under Investigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
