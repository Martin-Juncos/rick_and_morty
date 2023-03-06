import React, { useState, useEffect } from 'react'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom';


export default function Detail() {

const [character, setCharacter] = useState({});
console.log(character.origin && character.origin.name)
const {detailId} = useParams()

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);
// ((character || {}).origin || {}).name;
    return(
        <div className= {styles.contenedor} >
            <div>
            <h1>{character.name}</h1>
            <h4>{character.species}</h4>
            <h4>{character.status}</h4>
            <h4>{character.gender}</h4>
            <h4>{character.origin && character.origin.name}</h4>
            </div>
            <div>
            <img src={character.image} alt='img not found'></img>
            </div>
        </div>
    )
}