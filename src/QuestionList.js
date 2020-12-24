import React from 'react'

function QuestionList(props) {
    return (
        <div>
            {props.questions.map(i=><div>{i}</div>)}
        </div>
    )
}

export default QuestionList
