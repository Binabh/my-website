import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="navbar-dark text-white">
      <div class="container">
        <nav class="navbar px-0 pt-5 navbar-expand-lg navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/">
                <span class="px-3 text-decoration-none text-light">Home</span>
              </Link>
              <Link to="/works">
                <span class="px-3 text-decoration-none text-light">
                  My Works
                </span>
              </Link>
              <Link to="/blogs">
                <span class="px-3 text-decoration-none text-light">Blogs</span>
              </Link>
              <Link to="/contact">
                <span class="px-3 text-decoration-none text-light">
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
