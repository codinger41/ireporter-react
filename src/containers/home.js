import React, { useEffect } from "react";
import { connect } from "react-redux";
import { callApi } from "../actions/callApi";


const Home = props => {
  const callData = () => props.callApi().then(res => console.log(res))

  useEffect(() => {
    callData();
  }, []);

  return(
    <div className="boxes">
      <div className="welcome-box">
        <h1 className="welcome"> Welcome to iReporter!</h1>
      </div>
      <div className="row">
        <img src={require("../images/background.jpg")} className="bg-img"/>
        <div className="left-box">
          <div>
            <i className="fa fa-bullhorn icon"></i>
            <h1 className="description">iReporter</h1>
            <h2 className="description-long">Let"s end corruption.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}), { callApi })(Home);