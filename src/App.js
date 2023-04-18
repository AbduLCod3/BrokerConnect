import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import PropertiesList from "./pages/PropertiesList";
import DisplayData from "./pages/DisplayData";
import BrokersList from "./pages/BrokersList";
import Property from "./pages/Property";
import Broker from "./pages/Broker";
import ListPropertyBroker from "./pages/ListPropertyBroker";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/propertiesList" element={<PropertiesList />} /> */}
        <Route path="/displayData" element={<DisplayData />} />

        <Route path="/brokersList" element={<BrokersList />} />
        <Route path="/listPropertyBroker" element={<ListPropertyBroker />} />
        <Route path="/property/:symbol" element={<Property />} />
        <Route path="/broker/:symbol" element={<Broker />} />
      </Routes>
      <Footer />
    </div>
  );
}
