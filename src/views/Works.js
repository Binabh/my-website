import React from "react";
import works from "../data/works";
import Card from "../components/common/Card";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="container pt-5">
      <div className="row">
        <h2 className="text-white-50">
          <Link to="/">
            <span className="fas fa-home"></span>
          </Link>{" "}
          &gt; My Projects
        </h2>
      </div>
      <div className="row pt-4">
        {works.map((work) => (
          <div className="col-xl-3">
            <Card
              featuredImage={work.featuredImage}
              title={work.title}
              description={work.description}
              id={work.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
