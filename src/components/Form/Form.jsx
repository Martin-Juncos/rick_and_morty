import React, { useState } from "react";
import style from "./Form.module.css";
import validadora from './validation.js'


export default function Form({login}) {
    
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    
    function handleInputChange(event) {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [property]: value,
        });
        setErrors(
            validadora({
                ...userData,
                [property]: value,
            })
        )
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      login(userData)
    }

  return (
    <div className={style.contenedor}>
      <form className={style.form} onClick={handleSubmit} >
        <div className={style.user}>
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="username"
            value={userData.username}
          />
          {
            errors && <span>{errors.username}</span>
          }           
        </div>
        <div className={style.pass}>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="password"
            value={userData.password}
          />
          {
            errors && <span>{errors.password}</span>
          }
        </div>
        <button className={style.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
