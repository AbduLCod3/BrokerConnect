export default function Home() {
  return (
    <div className="home">
      {/* <h4>This is the Home page</h4> */}
      <div className="home__div__row1">
        <div className="home__div__row1__leftDiv">
          <h1>Connect To Your Future Clients</h1>
          <p>Every 5 mins someone finds a new agent</p>
          <div className="home__buttons">
            <button className="home__button">List Property </button>
            <button className="home__button">Find Broker</button>
            <button className="home__button">Browse Properties</button>
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
