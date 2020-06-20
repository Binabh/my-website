import React from "react";

function NavBar() {
  return (
    <div class="navbar-dark text-white">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-dark">
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
              <a href="index.html" class="pl-md-0 p-3 text-light">
                Home
              </a>
              <a href="app.html" class="p-3 text-decoration-none text-light">
                My Works
              </a>
              <a href="form.html" class="p-3 text-decoration-none text-light">
                Blogs
              </a>
              <a href="form.html" class="p-3 text-decoration-none text-light">
                Be in Touch
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
