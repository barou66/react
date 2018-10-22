import React from 'react'

import './Card.css'
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = '❓'

const Card = ({card,feedback,index,onClick}) => (
    <div className="card" onClick={() => onClick(index)}>
        <span className={`card ${feedback}`}>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
   </div>)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMisMatched'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

}

export default Card
