import React from "react";
import { Link, Route } from "react-router-dom";
import Search from "./Search";
import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
// import { userAlert } from "react-alert";

function Header() {
  // const alert = userAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  return (
    <div>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link className="navbar-brand text-white" to={"/"}>
              <span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#febd69",
                  }}
                >
                  E
                </span>
                -commerce{" "}
                <span
                  style={{
                    color: "#febd69",
                  }}
                >
                  S
                </span>
                tore
              </span>
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Route render={({ history }) => <Search history={history} />} />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <span id="cart" className="ml-3">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              2
            </span>

            {user ? (
              <div className="ml-4 dropdown d-inline">
                <Link
                  to="!#"
                  className="btn dropdown-toggle text-white"
                  type="button"
                  id="dropDownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <figure className="avatar avatar-new">
                    <img
                      src={user.avatar && user.avatar.url}
                      alt={user && user.name}
                      className="rounded-circle"
                    />
                  </figure>
                  <span>{user && user.name}</span>
                </Link>
              </div>
            ) : (
              !loading && (
                <Link to={"/login"} className="btn ml-4" id="login_btn">
                  Login
                </Link>
              )
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
