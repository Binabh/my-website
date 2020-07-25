import React from "react";
import works from "../data/works";
import Card from "../components/common/Card";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="container pt-5">
      <div className="row p-3">
        <h2 className="text-white">
          <Link to="/">
            <span className="fas fa-home ml-2"></span>
          </Link>{" "}
          / My Projects
        </h2>
      </div>
      <div className="row">
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
