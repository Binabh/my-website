import React from "react";
import TechIUse from "../components/TechIUse";
import Card from "../components/common/Card";

function Landing() {
  return (
    <>
      <div class="jumbotron bg-transparent mb-0 radius-0 py-3">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1 class="display-2 text-success">
                <span class="text-white-50">&gt;&gt;</span> Hello Worl
                <span class="vim-caret">d</span>
              </h1>
              <div class="row pt-3">
                <div class="col-xl-6">
                  <Card />
                </div>
                <div class="col-xl-6">
                  <Card />
                </div>
                <div class="col-xl-12 pt-3">
                  <span class="btn btn-shadow btn-block btn-primary">
                    Read More Blogs
                    <span class="fas fa-file ml-2"></span>
                  </span>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-xl-12">
                  <Card />
                </div>
                <div class="col-xl-12 pt-3">
                  <span class="btn btn-shadow btn-block btn-success">
                    See More Works
                    <span class="fas fa-code ml-2"></span>
                  </span>
                </div>
              </div>
            </div>
            <TechIUse />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
