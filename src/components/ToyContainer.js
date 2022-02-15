import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onHandleDelete, onHandleLike }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return (
          <ToyCard
            key={toy.id}
            toy={toy}
            onHandleDelete={onHandleDelete}
            onHandleLike={onHandleLike}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
