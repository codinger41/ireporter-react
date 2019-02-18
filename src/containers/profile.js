import React from "react";
// import { Link } from "react-router-dom";
import Stats from "../components/dashboard-stats";
import Filter from "../components/dashboard-filter";
import Card from "../components/card";

const Profile = () => {
  return (
    <div className="body">
      <Stats />
      <Filter />
      <div className="card-grid">
        <Card user="owner"/>
        <Card user="owner"/>
        <Card user="owner"/>
        <Card user="owner"/>
      </div>
    </div>
  );
};

export default Profile;
