import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  return (
    <div className={styles.contenedor}>
      <input className={styles.input} type="search" />
      <button className={styles.boton} onClick={() => props.onSearch(1)}>Agregar</button>
    </div>
  );
}
