import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GoalView from "./GoalView";
import "./Questions.css";
import Submission from "./Submission";
function Question() {
  let { id } = useParams();
  const [tab, setTab] = useState(0);
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:9999/question/${id}`, {
      method: "GET",
      headers: {
        "x-jtoken": localStorage.getItem("letsLearnJWT"),
      },
    })
      .then(async (r) => {
        let jsn = await r.json();
        if (r.ok) {
          return { resp: jsn, success: true };
        }
        return jsn;
      })
      .then((r) => {
        if (r.success) {
          setQuestion(r.resp);
        }
      });
  }, [id]);
  const t = `Anirudh is given a square with height and width = 100px. Anirudh finds it really boring and decides to play with it. He wants the square to rotate when he brings his mouse cursor over it. Please help him out.`
 const j =`Make sure that the square has id="box". You need to rotate the square by using the transform property of CSS on the square Every single time Anirudh brings the mouse over to the square, it should rotate 180 degrees The first rotation should be in the clockwise direction, the next should be in the anti-clockwise direction(back to original state). The next again in the clockwise direction. This order should continue on each mouseover. Do not change the initial styling of the square.`;

  return question ? (
    <div className="qts-view">
      <Link className="back" to="/">
        <div className="image" />
        Back
      </Link>
      <div className="title">{question.title}</div>
      <div className="mkd">
        <MDEditor.Markdown source={question.description} />
      </div>
      <div className="gitLink">
        <a
          href={question.gitCloneLink}
          target="_blank"
          alt={question.gitCloneLink}
        >
          {" "}
          BoilerPlate{" "}
        </a>
      </div>
      <div className="gs-tab">
        <div className= {tab===1? "active-gs-tab" :""} onClick={() => setTab(1)}>
          Goals
        </div>
        <div className= {tab===0? "active-gs-tab" :""} onClick={() => setTab(0)}>
          Submission
        </div>
      </div>
      <div className="tab-view">
        {tab === 1 ? (
          <div className="animate-left"><GoalView goals={question.goals} /></div>
        ) : (
          <div className="animate-right"><Submission /></div>
        )}
      </div>
    </div>
  ) : (
    <h3>Loading....</h3>
  );
}

export default Question;
