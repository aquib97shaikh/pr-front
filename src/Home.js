import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import List from './List';
import QuestionItem from './QuestionItem';
import "./Questions.css"
function Home(props) {
    const [questions,setQuestions] = useState(["hhh","llll","ddd","ddld"]);
    useLayoutEffect(() => {
        fetch("http://localhost:9999/questions",{
          headers:{
            "x-jtoken": localStorage.getItem("letsLearnJWT"),
          }
        })
          .then((r) => {
            if (r.status !== 200) {
      
              return { ...r.json(), success: false };
            }
            return r.json();
          })
          .then((r) => {
            if (!r.success) {
              console.log("sssss",r.questions);
              r.questions && setQuestions(r.questions);
            }
          });
    }, [])


    return (
      <div className="home">
        <div className="right">
            <Link className="sq"  to="/createQuestion">Add Question</Link>
        </div>
        <List items={questions} renderComponent={QuestionItem}>Hello</List>
      </div>
    );
}

export default Home
