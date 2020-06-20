import React from "react";

function Card({
  item = {
    title: "good title is very very long",
    content: "Some quick example make up the bulk of the cards content.",
  },
}) {
  return (
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{item.title}</h4>
        <p class="card-text">{item.content}</p>
      </div>
    </div>
  );
}

export default Card;
