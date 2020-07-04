import React from "react";

function SvgContainer({ image, altText }) {
  return (
    <div class="svg-container m-2">
      <img src={image} alt={altText} class="svg-content" />
    </div>
  );
}

export default SvgContainer;
