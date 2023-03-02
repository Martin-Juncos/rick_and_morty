import styles from "./Nav.module.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(props) {
  return (
    <div className={styles.contenedor}>
      <div>
        <Link to= '/about'>
          <h1>About</h1>
        </Link>
      </div>
      <div>
        <Link to= '/home' >
            <h1>Home</h1>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
      
    </div>
  );
}
