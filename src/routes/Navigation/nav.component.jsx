import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
