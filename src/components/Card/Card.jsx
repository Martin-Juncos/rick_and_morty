import styles from './Card.module.css'

export default function Card(props) {
   const {onClose, name, species, gender, image} = props
   return (
      <div className={styles.contenedor}>
         <button className={styles.boton} onClick={onClose}>X</button>
         <h1>{name}</h1>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
