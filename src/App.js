import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes,  Route, useLocation, useNavigate} from "react-router-dom";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const username = 'martin@juncos.com'
  const password = 12345678

  function login(userData) {
    
    if (userData.password == password && userData.username == username) {
       setAccess(true);
       navigate('/home');
    }
 }

  useEffect(() => {
    !access && navigate('/')
  }, [access])
  

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

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route  path="/home" element={<Cards characters={characters} onClose={onClose} />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
