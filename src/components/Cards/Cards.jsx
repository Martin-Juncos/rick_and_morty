import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.contenedor}>
      {
         characters.map((char, index)=>
         <Card
         id= {char.id}
         key = {index}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose= {()=> onClose(char.id)}
        /> )
      }
    </div>
  );
}
//window.alert("Emulamos que se cierra la card")