import React from 'react'
import styles from './Content.module.scss'

const Card = ({img, title, price}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
            <div>Sale</div>
            <img src={img} alt="" />
        </div>
        <div className={styles.card_text}>
            <h6>{title}</h6>
            <p>{price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card