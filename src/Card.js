import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card,feedback,onClick}) => (
    <div className="card" onClick={() => onClick(card)}>
        <span className={`card ${feedback}`}>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
   </div>)



export default Card
