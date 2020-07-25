import React from "react";
function Card({ featuredImage, title, description, id }) {
  return (
    <div className="card">
      <img className="card-img-top" src={featuredImage} alt="Card" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {description}
          {"    "}
          <a href={`/works/${id}`} className="badge badge-info">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
