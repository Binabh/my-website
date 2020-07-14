import React from "react";
import TechIUse from "../components/TechIUse";
import Card from "../components/common/Card";
import SocialMedia from "../components/SocialMedia";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div class="jumbotron bg-transparent mb-0 radius-0 py-3">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1 class="display-2 text-success">
                <span class="text-white-50">&gt;&gt;</span> Hello Visito
                <span class="vim-caret">r</span>
              </h1>
              <div class="row pt-3">
                <div class="col-xl-6">
                  <Card />
                </div>
                <div class="col-xl-6">
                  <Card />
                </div>
                <div class="col-xl-12 pt-3">
                  <Link to={process.env.PUBLIC_URL + "/blogs"}>
                    <span class="btn btn-shadow btn-block btn-primary">
                      Read More Blogs
                      <span class="fas fa-file ml-2"></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-xl-12">
                  <Card />
                </div>
                <div class="col-xl-12 pt-3">
                  <Link to={process.env.PUBLIC_URL + "/works"}>
                    <span class="btn btn-shadow btn-block btn-success">
                      See More Works
                      <span class="fas fa-code ml-2"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <TechIUse />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
