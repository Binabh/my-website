import React from "react";
import works from "../data/works";
import { Link } from "react-router-dom";

function Work({ match }) {
  const [work] = works.filter((item) => item.id === +match.params.id);
  return (
    <div className="container pt-5">
      <div className="row p-3">
        <h2 className="text-white">
          <Link to="/">
            <span className="fas fa-home ml-2"></span>
          </Link>{" "}
          <Link to="/works">/ My Projects</Link> /{work.title}
        </h2>
      </div>
      <div className="row">{work.body}</div>
    </div>
  );
}

export default Work;
