import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <h2>EDU Dashboard</h2>
        <ul className="dashboard__collection">
            <li>
                <NavLink end={true} className={"dashboard__link"} to={""}>Statistics</NavLink>
            </li>
            <li>
                <NavLink className={"dashboard__link"} to={"teacher"}>Teacher</NavLink>
            </li>
            <li>
                <NavLink className={"dashboard__link"} to={"student"}>Student</NavLink>
            </li>
        </ul>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-header"></div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
