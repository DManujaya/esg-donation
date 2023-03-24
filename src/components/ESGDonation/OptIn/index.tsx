import React from "react";
import CheckedIcon from "./CheckedIcon";
import UncheckedIcon from "./UncheckedIcon";

export interface OptInProps {
  setPage: (page: number) => void;
}

export default function OptIn(props: OptInProps) {
  return (
    <>
      <p>
        Make the best out of your journey from{" "}
        <span className="locationlink" onClick={() => props.setPage(2)}>
          Stafford
        </span>{" "}
        to Silverstone by saving the environment. 89 miles of travel can
        neutralise 112 kilograms of CO
        <sub>2</sub> emmissions
      </p>
      <div className="optInSelect">
        <input
          type="radio"
          id="optinNo"
          name="optin"
          value="no"
          defaultChecked
        />
        <label htmlFor="optinNo">
          <UncheckedIcon />
          <CheckedIcon />
          I'd like to skip this for now
        </label>
        <br />
        <input type="radio" id="optinYes" name="optin" value="yes" />
        <label htmlFor="optinYes">
          <UncheckedIcon />
          <CheckedIcon />
          Donate £ 1.00 to plant a tree to Straffordshire UK <br />
        </label>
        <span className="projectslink" onClick={() => props.setPage(3)}>
          Choose which project you like to contribute
        </span>
        <br />
      </div>
    </>
  );
}
