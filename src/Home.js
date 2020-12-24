import React, { useState } from 'react'
import QuestionList from './QuestionList';

function Home(props) {
    const [questions,setQuestions] = useState(["Hello","now",3,6]);


    return (
        <div>
            filter
            <QuestionList questions={questions} />
           
        </div>
    )
}

export default Home
