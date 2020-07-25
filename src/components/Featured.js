import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";

function Featured() {
  return (
    <>
      <div class="row pb-1 px-3">
        <h2 class="text-light text-monospace">My Projects</h2>
      </div>
      <div class="row pt-3">
        <div class="col-xl-3">
          <Card />
        </div>
        <div class="col-xl-3">
          <Card />
        </div>
        <div class="col-xl-3">
          <Card />
        </div>
        <div class="col-xl-3">
          <Card />
        </div>
        <div class="col-xl-12 pt-3">
          <Link to={process.env.PUBLIC_URL + "/blogs"}>
            <span class="btn btn-shadow btn-block btn-primary">
              See All Works
              <span class="fas fa-code ml-2"></span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Featured;
