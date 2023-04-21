import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DisplayAllBrokers from "./pages/DisplayAllBrokers";
import DisplayAllProperties from "./pages/DisplayAllProperties";

import ListBroker from "./pages/ListBroker";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayAllBrokers" element={<DisplayAllBrokers />} />
        <Route
          path="/displayAllProperties"
          element={<DisplayAllProperties />}
        />
        <Route path="/listBroker" element={<ListBroker />} />
      </Routes>
      <Footer />
    </div>
  );
}
