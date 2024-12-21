import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Body from "./components/Body";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="w-full h-screen flex">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
