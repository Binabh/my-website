import React from "react";
import ReactLogo from "../assets/images/react.svg";
import FlutterLogo from "../assets/images/flutter.svg";
import PythonLogo from "../assets/images/python-5.svg";
import InkscapeLogo from "../assets/images/inkscape-logo.svg";
import AdobeXDLogo from "../assets/images/adobe-xd-1.svg";
import OpenlayersLogo from "../assets/images/openlayers.svg";
import LeafletLogo from "../assets/images/leafletjs-icon.svg";
import QGisLogo from "../assets/images/qgis-icon128.svg";
import SvgContainer from "./common/SvgContainer";

function TechIUse() {
  return (
    <>
      <div class="row">
        <div class="col-xl-2">
          <span class="text-dark super-big-text">I</span>
        </div>
        <div class="col-xl-10">
          <p class="text-grey text-spacey">
            am <span class="text-success">frontend/mobile developer</span> and{" "}
            <span class="text-success">Geomatics Engineer</span>.
          </p>
          <div class="row mx-0">
            <p class="text-grey text-spacey">
              <span class="text-secondary">develop</span> with:
            </p>
            <SvgContainer image={ReactLogo} altText="React JS" />
            <SvgContainer image={FlutterLogo} altText="Flutter" />
            <SvgContainer image={PythonLogo} altText="Python" />
          </div>
          <div class="row mx-0">
            <p class="text-grey text-spacey">
              <span class="text-secondary">design</span> with:
            </p>
            <SvgContainer image={InkscapeLogo} altText="InkScape" />
            <SvgContainer image={AdobeXDLogo} altText="Adobe XD" />
          </div>
          <div class="row mx-0">
            <p class="text-grey text-spacey">
              <span class="text-secondary">make maps</span> with:
            </p>
            <SvgContainer image={QGisLogo} altText="Q GIS" />
            <SvgContainer image={OpenlayersLogo} altText="Openlyers" />
            <SvgContainer image={LeafletLogo} altText="LeafLet" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechIUse;
