import React from "react";
import works from "../data/works";
import { Link } from "react-router-dom";

function Work({ match }) {
  const [work] = works.filter((item) => item.id === +match.params.id);
  return (
    <div className="container pt-5">
      <div className="row">
        <h2 className="text-white-50">
          <Link to="/">
            <span className="fas fa-home"></span>
          </Link>{" "}
          &gt;
          <Link to="/works"> My Projects</Link> &gt; {work.title}
        </h2>
      </div>
      <div className="row pt-4">{work.body}</div>
    </div>
  );
}

export default Work;
