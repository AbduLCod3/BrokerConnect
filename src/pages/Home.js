import React from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import { Route, Routes } from "react-router-dom";
import DisplayData from "../pages/DisplayData";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/DisplayData"); // Replace "/component-page" with the path to your component page
  }
  return (
    <div className="home">
      {/* <h4>This is the Home page</h4> */}
      <div className="home__div__row1">
        <div className="home__div__row1__leftDiv">
          <h1>Connect To Your Future Clients</h1>
          <p>Every 5 mins someone finds a new agent</p>
          <div className="home__buttons">
            <button className="home__button">
              <Button text="List" form={<Form />} />{" "}
            </button>
            <button className="home__button">Find Broker</button>
            <button className="home__button">Browse Properties</button>
            <div className="home__button">
              <button onClick={handleClick}>Go to Component Page</button>
              {/* <Button text="List" form={<Form />} /> */}
            </div>
          </div>
        </div>
        <div className="image__div">
          <img
            className="img1"
            src={require("../images/HouseImage.jpg")}
            alt="imgHouse"
          />
        </div>
      </div>
      <div className="home__div__row3">WHY US</div>
      <div className="home__div__row4">FAQ</div>
      <div className="HomePageLeftDiv"></div>
    </div>
  );
}
