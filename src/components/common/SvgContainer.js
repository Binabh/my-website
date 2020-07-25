import React from "react";

function SvgContainer({ image, altText }) {
  return (
    <div className="svg-container m-2">
      <img src={image} alt={altText} className="svg-content" />
    </div>
  );
}

export default SvgContainer;
