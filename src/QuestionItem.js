import React from 'react'
import { Link } from 'react-router-dom'
function QuestionItem(props) {
    

    return (
        <div className="qts-item-container">
        <Link to={`/question/${props.item._id}`}>
        <div >
            <h1>{props.item.title}</h1>
        </div>
        </Link>
        </div>
        
    )
}

export default QuestionItem
