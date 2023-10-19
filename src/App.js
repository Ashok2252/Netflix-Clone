import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
            <p>{item.id}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}
