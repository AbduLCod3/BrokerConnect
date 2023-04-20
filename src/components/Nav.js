import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo__nav">
        <img
          className="logoImg"
          src={require("../images/brokerConnectLogo.png")}
          alt="logo_pic-1"
        />
      </div>
      <div className="header__nav">
        <div className="nav__link">
          <Link to="/">
            <div className="navList">Home</div>
          </Link>
        </div>
        <div className="nav__link">
          <Link to="/propertiesList">
            <div className="navList">Search for Properties</div>
          </Link>
        </div>
        <div className="nav__link">
          <Link to="/displayAllBrokers">
            <div className="navList">Find a Broker</div>
          </Link>
        </div>
        {/* <div className="nav__link">
          <Link to="/about">
            <div className="navList">About Us</div>
          </Link>
        </div> */}
        <div className="nav__link">
          <Link to="/listBroker">
            <div className="navList">List Your Business</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
