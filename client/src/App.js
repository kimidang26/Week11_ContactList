import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from "./components/contacts.js";
import Home from "./components/Home.js";
import Students from "./components/student.js";
import JoinedList from "./components/joinedlist.js";
import bus from "../src/components/bus.png";

function App() {
  return (
    <div className="App">
        <h1>Welcome to the Student Contact Portal</h1>
        <img src={bus} />
          <Contacts />
          <Students />
          <JoinedList />
    </div>
  );
}

export default App;
