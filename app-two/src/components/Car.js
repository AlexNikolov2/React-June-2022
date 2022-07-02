import React from "react";

function Car(props) {
  return (
    <section className="car">
      <h1>{props.name}</h1>
      <h1>{props.year}</h1>
    </section>
  );
}

export default Car;
