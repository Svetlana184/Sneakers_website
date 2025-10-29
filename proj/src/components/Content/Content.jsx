import Card from './Card'
import styles from './Content.module.scss'
import SideBar from './SideBar'
import {cards} from "../../data.js"


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
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card1.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card2.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card3.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card1.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card2.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card3.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card1.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card2.png" price="$25"/></li>
                <li><Card title="Vel vestibulum elit tuvel euqen." img="../../src/assets/card_img/card3.png" price="$25"/></li>
            </ul>
        </div>
       
        <SideBar/>
    </section>
  )
}

export default Content