import "./App.css";
import Navigation from "./components/Navigation";
import Body from "./components/Body";

function App() {
  return (
    <div className="w-full h-screen flex">
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
