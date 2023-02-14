import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
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
          <Link className="nav-link" to="/auth">
            {currentUser ? "SIGN OUT" : "SIGN IN"}
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
