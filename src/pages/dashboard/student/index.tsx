import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Student = () => {
  return (
    <div>
        <h2>Student</h2>
        <div className="tab">
          <NavLink end={true} to={""}>Active</NavLink>
          <NavLink to={"archive"}>Archive</NavLink>
          <NavLink to={"deleted"}>Deleted</NavLink>
        </div>
        <Outlet/>
    </div>
  );
};

export default React.memo(Student);