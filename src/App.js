import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from './components/Detail/Detail'
import React, { useState } from "react";
//import { Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  console.log(characters)

  return (
    <div className="App" style={{ padding: "25px" }}>

        <div>
          <Route path = '/'>
            <Nav onSearch={onSearch} />
          </Route>
        </div>
        <div>
          <Route path= '/home' >
            <Cards characters={characters} onClose={onClose} />
          </Route>
        </div>

        <div>
          <Route path= '/about' >
            <About />
          </Route>
        </div>

        <div>
          <Route path= '/detail/:detailId' >
            <Detail/>
          </Route>
        </div>

    </div>
  );
}

export default App;
