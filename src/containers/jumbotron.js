import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";
import "normalize.css";

export function JumbotronContainer() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              {item.video ? (
                <Jumbotron.Video
                  src={item.video}
                  alt={item.alt}
                  type="video/mp4"
                  loop
                  autoPlay
                  muted
                />
              ) : (
                <Jumbotron.Image src={item.image} alt={item.alt} />
              )}
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}
