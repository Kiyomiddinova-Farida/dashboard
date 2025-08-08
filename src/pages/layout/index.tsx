import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>Layout</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/login"}>Login</Link>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default React.memo(Layout);
