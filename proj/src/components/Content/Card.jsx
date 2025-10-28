import React from 'react'

const Card = ({img, title, price}) => {
  return (
    <div>
        <div>
            <div>Sale</div>
            <img src={img} alt="" />
        </div>
        <div>
            <h6>{title}</h6>
            <p>{price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card