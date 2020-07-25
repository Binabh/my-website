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
      <div className="row">
        <div className="col-xl-2 col-2">
          <span className="text-dark super-big-text">I</span>
        </div>
        <div className="col-xl-10 col-10">
          <p className="text-grey text-spacey">
            am <span className="text-success">frontend/mobile developer</span> &{" "}
            <span className="text-success">Geomatics Engineer</span>.
          </p>
          <div className="row mx-0">
            <p className="text-grey text-spacey">
              <span className="text-secondary">develop</span> with:
            </p>
            <SvgContainer image={ReactLogo} altText="React JS" />
            <SvgContainer image={FlutterLogo} altText="Flutter" />
            <SvgContainer image={PythonLogo} altText="Python" />
          </div>
          <div className="row mx-0">
            <p className="text-grey text-spacey">
              <span className="text-secondary">design</span> with:
            </p>
            <SvgContainer image={InkscapeLogo} altText="InkScape" />
            <SvgContainer image={AdobeXDLogo} altText="Adobe XD" />
          </div>
          <div className="row mx-0">
            <p className="text-grey text-spacey">
              <span className="text-secondary">make maps</span> with:
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
