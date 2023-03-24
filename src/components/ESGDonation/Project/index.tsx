import React from "react";
import ParkIcon from "./ParkIcon";
import NatureIcon from "./NatureIcon";
import ForestIcon from "./ForestIcon";
import NextIcon from "./NextIcon";

export interface ProjectProps {
  setPage: (page: number) => void;
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <p>
        Choose the project ypu would like to contribute. All these contributions
        will help in neutralising the gaseous emmissions from your journey.
      </p>
      <div className="projectSelect">
        <input
          type="radio"
          id="projectChoice1"
          name="project"
          value="mozambique"
          defaultChecked
        />
        <label htmlFor="projectChoice1">
          <ParkIcon />
          Terrestrial, Mozambique
        </label>
        <br />
        <input
          type="radio"
          id="projectChoice2"
          name="project"
          value="england"
        />
        <label htmlFor="projectChoice2">
          <NatureIcon />
          Forestry Tree, England
        </label>
        <br />

        <input type="radio" id="projectChoice3" name="project" value="kenya" />
        <label htmlFor="projectChoice3">
          <ForestIcon />
          Mangrove, Kenya
        </label>
        <br />
      </div>
      <div className="nextButton">
        <NextIcon setPage={props.setPage} />
      </div>
    </>
  );
}
