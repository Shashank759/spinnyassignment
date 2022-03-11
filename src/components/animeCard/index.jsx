import React from "react";
import "./animeCard.style.css";

function AnimeCard({ item }) {
  return (
    <div className="anime-card">
      <img alt="anime" src={item.image_url} />
      {item.title}
    </div>
  );
}

export default AnimeCard;
