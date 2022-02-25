import React from "react";
import { Link, Route } from "react-router-dom";
import Search from "./Search";
import "../../App.css";
function Head() {
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
          <button className="btn" id="login_btn">
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Head;
