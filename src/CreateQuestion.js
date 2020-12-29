import React, { useState } from "react";
import DropDown from "./DropDown";
import Input from "./Input";
import MDEditor, { commands }  from '@uiw/react-md-editor';
import "./Questions.css"
import { Link } from "react-router-dom";

function CreateQuestion() {
  const [question, setQuestion] = useState({ title: "",difficulty:"",gitCloneLink:"" });
  const [error, setError] = useState(null);
  const [value, setValue] = useState("**H e l l o wor ld!!!**");
  const postQuestion = ()=>{
    const body = JSON.stringify({ ...question, description: value });
    console.log({body});
    fetch("http://localhost:9999/question", {
  
      method: "POST",
      headers: {
        "x-jtoken": localStorage.getItem("letsLearnJWT"),
        "Content-Type": "application/json",
      },
      body: body,
    }).then((r) => {
      if(r.ok){
        return {...r.json(),success:true};
      }
      return r.json();
    }).then(r=>{
      if(!r.ok){
        setError(r.er);
      }else{
        setQuestion(r.question);
        console.log(r.question);
      }
    })
  }
  
  return (
    <div className="qts-container">
      <div className="qts-header">
        <h1>Create a Question</h1>
        <Link to="/"><button  className="post" onClick={postQuestion} >Submit Question</button></Link>
        {error && <span>{error}</span>}
      </div>

      
      <div className="qts-title" >
      <Input
        type="text"
        style={{ "width": "30em",border:"0px","box-shadow": "0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2)" }}
        value={question.title}
        required
        label="Title"
        onChange={(event) => {
          setQuestion({ ...question, title: event.target.value });
        }}
      />
      
     
      <div style={{position:"relative"}}>
      <DropDown
        title="Difficulty"
        selectHandler={(select) =>
          setQuestion({ ...question, difficulty: select })
        }
        options={["Easy", "Medium", "Hard"]}
      />
        </div>
      </div>
     <div className="editor">
      <MDEditor
        value={value}
        onChange={setValue}
        preview="edit"
        
      />
    </div>
    <Input
        type="text"
        value={question.gitCloneLink}
        style={{ "width": "30em",border:"0px","box-shadow": "0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2)" }}
        
        required
        label="GitHub repo link"
        onChange={(event) => {
          setQuestion({ ...question, gitCloneLink: event.target.value.trim() });
        }}
      />
      
    </div>
  );
}

export default CreateQuestion;
