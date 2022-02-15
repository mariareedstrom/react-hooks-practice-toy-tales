import React, { useState } from "react";

function ToyCard({ toy, onHandleDelete, onHandleLike }) {
  const { id, name, image, likes } = toy;

  function handleDelete(e) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });
    onHandleDelete(id);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={() => onHandleLike(toy)} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDelete} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
