import Little_card from "./Little_card"
import styles from './Content.module.scss'

const SideBar = () => {
  return (
    <div className={styles.sidebar_content}>
      <form className={styles.search}>
        <input type="text" placeholder="  Search Models" />
      </form>
      <div>
        <h4>Top Best Models</h4>
        <ul>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/min1.png" rating="5"/>
          </li>
           <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$20" img="../../src/assets/card_img/min2.png" rating="5"/>
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$25" img="../../src/assets/card_img/min3.png" rating="4"/>
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$10" img="../../src/assets/card_img/min4.png" rating="4"/>
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/min5.png" rating="4"/>
          </li>
        </ul>
        <h4>You May Like</h4>
        <ul>
            <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$10" img="../../src/assets/card_img/min6.png" />
          </li>
           <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$20" img="../../src/assets/card_img/min7.png" />
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/min8.png" />
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$35" img="../../src/assets/card_img/min9.png" />
          </li>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$20" img="../../src/assets/card_img/min10.png" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar