import React from "react";

function Card({
  item = {
    title: "A lazy person using placeholders",
    content: "This is the story of a lazy person who uses placeholders...",
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
