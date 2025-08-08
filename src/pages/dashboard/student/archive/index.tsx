import React from "react";
import { Outlet } from "react-router-dom";

const Archive = () => {
  return (
    <div>
        <h2>Archive</h2>
        <Outlet/>
    </div>
  );
};

export default React.memo(Archive);