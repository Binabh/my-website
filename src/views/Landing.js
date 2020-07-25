import React from "react";
import TechIUse from "../components/TechIUse";
import Card from "../components/common/Card";
import SocialMedia from "../components/SocialMedia";
import { Link } from "react-router-dom";
import Hello from "../components/Hello";
import Featured from "../components/Featured";
import codingIllustration from "../assets/images/coding_illustration.svg";

function Landing() {
  return (
    <>
      <div class="jumbotron bg-transparent mb-0 radius-0 py-3">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 pt-5">
              <Hello />
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6">
              <img src={codingIllustration} alt="ill" width="100%" />
            </div>
            <div class="col-xl-6 pt-2">
              <TechIUse />
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 pt-2">
              <Featured />
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6">
              <SocialMedia />
            </div>
            <div class="col-xl-6 pt-2">
              <img src={codingIllustration} alt="ill" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
