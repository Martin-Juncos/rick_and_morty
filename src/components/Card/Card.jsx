import styles from "./Card.module.css";
import {Link} from "react-router-dom"

export default function Card(props) {
  const { onClose, name, species, gender, image, id, detailId } = props;


  return (
    <div className={styles.contenedor}>
      <button className={styles.boton} onClick={onClose} value={id}>
        X
      </button>
      <Link to={`/detail/${detailId}`}>
      <h1>{name}</h1>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="" />
    </div>
  );
}
