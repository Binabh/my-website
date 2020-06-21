import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div class="container p-5">
      <div class="row pb-1">
        <h4 class="text-light text-monospace">Follow Me on Social Media</h4>
      </div>
      <div class="row py-1">
        <div class="col-xl-6">
          <a
            href="https://github.com/Binabh"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-block btn-shadow btn-outline-info"
          >
            <span class="fab fa-github mr-2"></span>
            GitHub
          </a>
        </div>
        <div class="col-xl-6">
          <a
            href="https://facebook.com/beenabh"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-block btn-shadow btn-outline-info"
          >
            <span class="fab fa-facebook mr-2"></span>
            facebook
          </a>
        </div>
      </div>
      <div class="row py-1">
        <div class="col-xl-4">
          <a
            href="https://www.instagram.com/binabhdevkota/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-block btn-shadow btn-outline-info"
          >
            <span class="fab fa-instagram mr-2"></span>
            Instagram
          </a>
        </div>
        <div class="col-xl-4">
          <a
            href="https://www.youtube.com/channel/UC4EB3p7mLXxP_SN6Me6waag"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-block btn-shadow btn-outline-info"
          >
            <span class="fab fa-youtube mr-2"></span>
            YouTube
          </a>
        </div>
        <div class="col-xl-4">
          <a
            href="https://www.linkedin.com/in/binabh-devkota-68206311b/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-block btn-shadow btn-outline-info"
          >
            <span class="fab fa-linkedin mr-2"></span>
            Linkedin
          </a>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-xl-12">
          <Link to="/contact">
            <span class="btn btn-block btn-shadow btn-outline-warning">
              <span class="fa fa-envelope mr-2"></span>
              Send message from here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
