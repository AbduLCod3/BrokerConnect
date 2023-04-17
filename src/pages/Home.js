export default function Home() {
  return (
    <div className="HomePage">
      <h4>This is the Home page</h4>
      <div className="HomePageLeftDiv">
        <h1>Let Us Help You Connect To Your Future Clients</h1>
      </div>
      <div className="HomePageRightDiv">
        {" "}
        <img
          className="img1"
          src={require("../images/HouseImage.jpg")}
          alt="imgHouse"
        />
      </div>
    </div>
  );
}
