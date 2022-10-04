import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from "./components/contacts.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
        <h1>Welcome to the Contact Portal</h1>
          <Contacts />
    </div>
  );
}

export default App;
