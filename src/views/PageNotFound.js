import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="container text-center p-5">
      <h1>
        <span class="fa fa-meh px-4"> </span>
        404 - Oops! page not found <br />
        <span class="text-danger">or</span>
        <br /> never existed from the begining of this universe.
      </h1>
      <Link to="/">
        <span class="btn btn-shadow btn-outline-secondary my-4">
          I am lost <span class="fa fa-frown px-2"> </span> Take me Home{" "}
          <span class="fa fa-home px-2"> </span>
        </span>
      </Link>
    </div>
  );
}

export default NotFound;
