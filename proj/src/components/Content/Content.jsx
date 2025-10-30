import Card from './Card'
import styles from './Content.module.scss'
import SideBar from './SideBar'
import {cards} from "../../data.js"
import arrow from '../../assets/footer_icons/arrow.png'


const Content = () => {
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
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card1.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card2.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card3.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card4.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card5.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card6.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card7.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card8.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card9.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card10.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card11.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card12.png" price="$25"/></li>
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