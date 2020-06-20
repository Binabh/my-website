import React from "react";
import NavBar from "../components/common/Navbar";
import ReactLogo from "../assets/images/react.svg";
import FlutterLogo from "../assets/images/flutter.svg";
import PythonLogo from "../assets/images/python-5.svg";
import InkscapeLogo from "../assets/images/inkscape-logo.svg";
import AdobeXDLogo from "../assets/images/adobe-xd-1.svg";
import OpenlayersLogo from "../assets/images/openlayers.svg";
import LeafletLogo from "../assets/images/leafletjs-icon.svg";
import QGisLogo from "../assets/images/qgis-icon128.svg";

function Landing() {
  return (
    <>
      <NavBar />
      <div class="jumbotron bg-transparent mb-0 radius-0">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1 class="display-2 text-success">
                <span class="text-white-50">&gt;</span> Hello Worl
                <span class="vim-caret">d</span>
              </h1>
            </div>
            <div class="col-xl-6">
              <p class="text-grey text-spacey">
                I am a{" "}
                <span class="text-success">frontend/mobile developer</span> and
                a <span class="text-success">Geomatics Engineer</span>.
              </p>
              <div class="row mx-0">
                <p class="text-grey text-spacey">
                  I <span class="text-secondary">develop</span> with:
                </p>

                <div class="svg m-2">
                  <img src={ReactLogo} alt="React JS" />
                </div>
                <div class="svg m-2">
                  <img src={FlutterLogo} alt="Flutter" />
                </div>
                <div class="svg m-2">
                  <img src={PythonLogo} alt="Python" />
                </div>
              </div>
              <div class="row mx-0">
                <p class="text-grey text-spacey">
                  I <span class="text-secondary">design</span> with:
                </p>

                <div class="svg m-2">
                  <img src={InkscapeLogo} alt="InkScape" />
                </div>
                <div class="svg m-2">
                  <img src={AdobeXDLogo} alt="Adobe XD" />
                </div>
              </div>
              <div class="row mx-0">
                <p class="text-grey text-spacey">
                  I <span class="text-secondary">make maps</span> with:
                </p>
                <div class="svg m-2">
                  <img src={QGisLogo} alt="Q GIS" />
                </div>
                <div class="svg m-2">
                  <img src={OpenlayersLogo} alt="Openlyers" />
                </div>
                <div class="svg m-2">
                  <img src={LeafletLogo} alt="LeafLet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
