import styles from './SearchBar.module.css'
import React, { useState } from 'react'

export default function SearchBar({onSearch}) {

  const [character, setCharacter] = useState('')

  const handleInputChange = (event)=> {
    const value = event.target.value
    setCharacter(value)
  }
  
  return (
    <div className={styles.contenedor}>
      <input className={styles.input} type="search" onChange={handleInputChange}/>
      <button className={styles.boton} onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}
