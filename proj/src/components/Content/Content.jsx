
import styles from './Content.module.scss'
import SideBar from './SideBar'
import {cards} from "../../data.js"
import arrow from '../../assets/footer_icons/arrow.png'


const Card = ({img, title, price, index}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
            <div>Sale</div>
            <img src={img} alt="" />
        </div>
        <div className={styles.card_text}>
            <h6>{title}</h6>
            <p>{price}</p>
            <button

            >Add to cart</button>
        </div>
    </div>
  )
}

const Content = () => {
  
  const sneakers_cards = cards.map((item)=>
  <li>
    <Card title={item.title} img={item.img} price={item.price} index={item.index}/>
  </li>)

  return (
    <section className={styles.content_section}>
        <div className={styles.left_side}>
             <div className={styles.searching}>
                <p>Showing 1-12 Of 15 Results</p>
                <form>
                <select >
                  <option value=""><p>Default Sorting</p></option>
                  <option value=""><p>Custom Sorting</p></option>
                </select>
              </form>
            </div>
            <ul>
               {sneakers_cards}
            </ul>
            <div className={styles.pages}>
              <div className={styles.pages_btns}>
                  <button className={styles.btn_red}>1</button>
                  <button className={styles.btn_white}>2</button>
              </div>
              <button>
                <p>next</p>
                <img src={arrow} alt="" />
              </button>
            </div>
        </div>
       
        <SideBar/>
    </section>
  )
}



export default Content