import { useParams } from "react-router-dom"
import {cards} from "../../data.js"
import styles from './SingleCard.module.scss'

const SingleCard = () => {
  const {id} = useParams();
  const info = cards.find(s => s.index == id)
  return (
    <section className={styles.single_card}>
      <img src={info.img} alt="" />
      <div>
        <h2>{info.title}</h2>
        <p>{info.price}</p>
      </div>
    </section>
  )
}

export default SingleCard