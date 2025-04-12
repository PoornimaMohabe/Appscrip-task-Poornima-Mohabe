import { useState } from "react";
import "./App.css";
import "./styles/layout.css";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import SearchFilter from "./components/SearchFilter";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Card from "./components/ProductCard";

function App() {
  const [showFilter, setShowFilter] = useState(true);

  const toggleFilter = () => {
    console.log("Enter into toggleFilter");

    setShowFilter((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Navbar />
      <Discover />
      <SearchFilter toggleFilter={toggleFilter} showFilter={showFilter} />
      <div className="filter_and_Card">
        {showFilter && <Filter />}
        <Card fullWidth={!showFilter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;