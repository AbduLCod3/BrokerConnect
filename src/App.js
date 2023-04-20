import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DisplayAllBrokers from "./pages/DisplayAllBrokers";

import ListBroker from "./pages/ListBroker";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayAllBrokers" element={<DisplayAllBrokers />} />
        <Route path="/listBroker" element={<ListBroker />} />
      </Routes>
      <Footer />
    </div>
  );
}
