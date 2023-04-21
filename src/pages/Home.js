import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* <h4>This is the Home page</h4> */}
      <div className="home__div__row1">
        <div className="home__div__row1__leftDiv">
          <h1>Connect To Your Future Clients</h1>
          <p>Every 5 mins someone finds a new agent</p>
          <div className="home__buttons">
            <button className="home__button">
              <Link to="/listBroker">List Property </Link>
            </button>
            <button className="home__button">
              <Link to="/displayAllBrokers">Find Broker</Link>
            </button>
            <button className="home__button">
              {" "}
              <Link to="/displayAllProperties">Browse Properties</Link>
            </button>
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
    </div>
  );
}
