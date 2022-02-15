import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function deleteToy(id) {
    const updatedList = toys.filter((toy) => toy.id !== id);
    setToys(updatedList);
  }

  function likeToy(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    }).then(() =>
      setToys(
        toys.map((currentToy) =>
          currentToy.id !== toy.id
            ? currentToy
            : { ...currentToy, likes: currentToy.likes + 1 }
        )
      )
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onHandleDelete={deleteToy}
        onHandleLike={likeToy}
      />
    </>
  );
}

export default App;
