import React from "react";
import TechIUse from "../components/TechIUse";

function Landing() {
  return (
    <>
      <div class="jumbotron bg-transparent mb-0 radius-0">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1 class="display-2 text-success">
                <span class="text-white-50">&gt;&gt;</span> Hello Worl
                <span class="vim-caret">d</span>
              </h1>
            </div>
            <TechIUse />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
