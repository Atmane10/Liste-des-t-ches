import React, { useState} from "react";
import './App.css';
// importer componenets
import Form from "./components/Form";
import Liste from "./components/Liste";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Liste des tâches</h1>
      </header>
      <Form />
      <Liste />
    </div>
  );
}

export default App;
