import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [selectedCard, setSelectedCard] = useState();
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
      </div>{" "}
      <div style={{ textAlign: "center", opacity: "0.5  " }}>
        <p>Developed by Gaurav Sinha</p>
      </div>
    </>
  );
}

export default App;
