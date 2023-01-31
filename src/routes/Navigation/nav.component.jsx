import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
