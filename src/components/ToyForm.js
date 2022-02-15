import React, { useState } from "react";

function ToyForm({ setToys }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleFormEntry(e) {
    setNewToy((toyObj) => ({
      ...toyObj,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    fetch(" http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((resp) => resp.json())
      .then((data) => setToys((currentToys) => [...currentToys, data]));
    setNewToy({ name: "", image: "", likes: 0 });
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormEntry}
          value={newToy.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormEntry}
          value={newToy.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
