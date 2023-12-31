import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");

  // we need slides
  const slides = selectionFilter({ series, films });
  // console.log(slides);

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
}
