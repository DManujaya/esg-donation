import React from "react";
import NextIcon from "./NextIcon";
import BusIcon from "./BusIcon";
import ElectricCarIcon from "./ElectricCarIcon";
import MotorVehicleIcon from "./MotorVehicleIcon";
import MotorcycleIcon from "./MotorcycleIcon";
import PedalBikeIcon from "./PedalBikeIcon";
import TrainIcon from "./TrainIcon";

export interface LocationProps {
  setPage: (page: number) => void;
}

export default function Location(props: LocationProps) {
  return (
    <>
      <p>Choose the location where your journey starts from</p>
      <div className="locationDropDown">
        <select name="location" id="location-select">
          <option value="">Search Location</option>
          <option value="London">London</option>
          <option value="Stafford">Stafford</option>
          <option value="Exeter">Exeter</option>
        </select>
      </div>
      <p>
        Choose the transport method{" "}
        <span className="vehicleFuelType">
          Motor Car {"("}Fossil Fuel{")"}
        </span>
      </p>
      <div className="locationVehicleIcons">
        <input
          type="radio"
          id="vehicleChoice1"
          name="vehicle"
          value="motor_car"
          defaultChecked
        />
        <label htmlFor="vehicleChoice1">
          <MotorVehicleIcon />
        </label>
        <br />
        <input
          type="radio"
          id="vehicleChoice2"
          name="vehicle"
          value="electric_car"
        />
        <label htmlFor="vehicleChoice2">
          <ElectricCarIcon />
        </label>
        <br />
        <input type="radio" id="vehicleChoice3" name="vehicle" value="bus" />
        <label htmlFor="vehicleChoice3">
          <BusIcon />
        </label>
        <br />
        <input type="radio" id="vehicleChoice4" name="vehicle" value="train" />
        <label htmlFor="vehicleChoice4">
          <TrainIcon />
        </label>
        <br />
        <input
          type="radio"
          id="vehicleChoice5"
          name="vehicle"
          value="motorcycle"
        />
        <label htmlFor="vehicleChoice5">
          <MotorcycleIcon />
        </label>
        <br />
        <input
          type="radio"
          id="vehicleChoice6"
          name="vehicle"
          value="pedal_bike"
        />
        <label htmlFor="vehicleChoice6">
          <PedalBikeIcon />
        </label>
        <br />
      </div>

      <div className="nextButton">
        <NextIcon setPage={props.setPage} />
      </div>
    </>
  );
}
