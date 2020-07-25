import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import works from "../data/works";

function Featured() {
  return (
    <>
      <div className="row pb-1 px-3">
        <h2 className="text-light text-monospace">My Projects</h2>
      </div>
      <div className="row pt-3">
        {works.map(
          (work) =>
            work.isFeatured && (
              <div key={work.id} className="col-xl-3">
                <Card
                  featuredImage={work.featuredImage}
                  title={work.title}
                  description={work.description}
                  id={work.id}
                />
              </div>
            )
        )}
        {works.length < 4 && (
          <div className={`col-xl-${12 - works.length * 3}`}>
            <h1>Other projects comming soon!</h1>
          </div>
        )}
        <div className="col-xl-12 pt-3">
          <Link
            className="btn btn-shadow btn-block btn-primary"
            to={process.env.PUBLIC_URL + "/works"}
          >
            See All Works
            <span className="fas fa-code ml-2"></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Featured;
