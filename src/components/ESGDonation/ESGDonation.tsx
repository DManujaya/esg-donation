import React, { useState } from "react";
import OptIn from "./OptIn";
import Project from "./Project";
import Location from "./Location";
import "./ESGDonation.css";
import "./public/fonts/index.css";

export default function ESGDonation() {
  const [page, setPage] = useState(1);
  const [optIn, setOptIn] = useState("no");
  const [location, setLocation] = useState("Stafford");
  const [vehicle, setVehicle] = useState("Motor Car");
  const [project, setProject] = useState("Mozambique");

  const renderedPage = () => {
    if (page == 1) {
      return <OptIn setPage={setPage} />;
    }
    if (page == 2) {
      return <Location setPage={setPage} />;
    }
    if (page == 3) {
      return <Project setPage={setPage} />;
    }
  };

  return (
    <div className="main">
      <div
        style={{
          height: "100%",
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mainimg" />
      </div>
      <div className="content">
        <h1>Plant A Tree</h1>
        {renderedPage()}
      </div>
    </div>
  );
}
