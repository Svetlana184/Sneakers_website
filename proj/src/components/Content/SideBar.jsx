import Little_card from "./Little_card"


const SideBar = () => {
  return (
    <div>
      <form action="">
        <input type="text" />
      </form>
      <div>
        <h4></h4>
        <ul>
          <li>
            <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
            <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
            <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
          </li>
        </ul>
        <ul>
          <li>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
             <Little_card title="Primis in faucibus aenean laoreet rhoncus ipsum eget." 
            price="$15" img="../../src/assets/card_img/card1.png" rating="5"/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar