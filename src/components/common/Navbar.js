import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-dark text-white">
      <div className="container">
        <nav className="navbar px-0 pt-5 navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={process.env.PUBLIC_URL + "/"}>
                <span className="px-3 text-decoration-none text-light">
                  Home
                </span>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/works"}>
                <span className="px-3 text-decoration-none text-light">
                  My Works
                </span>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/blogs"}>
                <span className="px-3 text-decoration-none text-light">
                  Blogs
                </span>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                <span className="px-3 text-decoration-none text-light">
                  Be in Touch
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
