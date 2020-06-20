import React from "react";

function SvgContainer({ image, altText }) {
  return (
    <div class="svg m-2">
      <img src={image} alt={altText} />
    </div>
  );
}

export default SvgContainer;
