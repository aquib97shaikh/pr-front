import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import List from './List';
import QuestionItem from './QuestionItem';
import "./Questions.css"
function Home(props) {
    const [questions,setQuestions] = useState(["hhh","llll","ddd","ddld"]);
    useLayoutEffect(() => {
        fetch("http://localhost:9999/questions")
          .then((r) => r.json())
          .then(setQuestions);
    }, [])


    return (
      <div className="home">
        <div className="right">
            <Link className="sq"  to="/createQuestion">Add Question</Link>
        </div>
        <List items={questions} renderComponent={QuestionItem} />
      </div>
    );
}

export default Home
