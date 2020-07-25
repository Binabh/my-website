import React from "react";
import TechIUse from "../components/TechIUse";
import SocialMedia from "../components/common/SocialMedia";
import Hello from "../components/Hello";
import Featured from "../components/Featured";
import codingIllustration from "../assets/images/coding_illustration.svg";
import Email from "../components/common/Email";

function Landing() {
  return (
    <>
      <div className="jumbotron bg-transparent mb-0 radius-0 py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 pt-5">
              <Hello />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <img src={codingIllustration} alt="ill" width="100%" />
            </div>
            <div className="col-xl-6 pt-2">
              <TechIUse />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 pt-2">
              <Featured />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Email />
              <SocialMedia />
            </div>
            <div className="col-xl-6 pt-2">
              <img src={codingIllustration} alt="ill" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
