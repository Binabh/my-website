import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center p-5">
      <h1>
        <span className="fa fa-meh px-4"> </span>
        404 - Oops! page not found <br />
        <span className="text-danger">or</span>
        <br /> never existed from the begining of this universe.
      </h1>
      <Link to="/">
        <span className="btn btn-shadow btn-outline-secondary my-4">
          I am lost <span className="fa fa-frown px-2"> </span> Take me Home{" "}
          <span className="fa fa-home px-2"> </span>
        </span>
      </Link>
    </div>
  );
}

export default NotFound;
