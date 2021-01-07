import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GoalView from "./GoalView";
import "./Questions.css";
import Submission from "./Submission";
function Question(props) {
  let { id } = useParams();
  const [tab, setTab] = useState(1);
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
          rel="noreferrer"
          alt={question.gitCloneLink}
        >
          {" "}
          Boilerplate{" "}
          <img className="github-logo"
            alt="GitHub Link to BoilerPlate Code" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzOC41NDlweCIgaGVpZ2h0PSI0MzguNTQ5cHgiIHZpZXdCb3g9IjAgMCA0MzguNTQ5IDQzOC41NDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzOC41NDkgNDM4LjU0OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NQ0KCQljLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42Mw0KCQljMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2DQoJCWMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNg0KCQljLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkNCgkJYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5DQoJCWMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5Nw0KCQljLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTENCgkJYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNg0KCQljNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxDQoJCWMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYNCgkJYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3DQoJCWMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NA0KCQljNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5DQoJCWM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNA0KCQljMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5DQoJCWMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2DQoJCWM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NQ0KCQljNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2DQoJCUM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
          <img
            className="external-link-logo"
            alt="GitHub Link to BoilerPlate Code"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMS42MjZweCIgaGVpZ2h0PSI1MTEuNjI3cHgiIHZpZXdCb3g9IjAgMCA1MTEuNjI2IDUxMS42MjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS42MjYgNTExLjYyNzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zOTIuODU3LDI5Mi4zNTRoLTE4LjI3NGMtMi42NjksMC00Ljg1OSwwLjg1NS02LjU2MywyLjU3M2MtMS43MTgsMS43MDgtMi41NzMsMy44OTctMi41NzMsNi41NjN2OTEuMzYxDQoJCQljMCwxMi41NjMtNC40NywyMy4zMTUtMTMuNDE1LDMyLjI2MmMtOC45NDUsOC45NDUtMTkuNzAxLDEzLjQxNC0zMi4yNjQsMTMuNDE0SDgyLjIyNGMtMTIuNTYyLDAtMjMuMzE3LTQuNDY5LTMyLjI2NC0xMy40MTQNCgkJCWMtOC45NDUtOC45NDYtMTMuNDE3LTE5LjY5OC0xMy40MTctMzIuMjYyVjE1NS4zMWMwLTEyLjU2Miw0LjQ3MS0yMy4zMTMsMTMuNDE3LTMyLjI1OWM4Ljk0Ny04Ljk0NywxOS43MDItMTMuNDE4LDMyLjI2NC0xMy40MTgNCgkJCWgyMDAuOTk0YzIuNjY5LDAsNC44NTktMC44NTksNi41Ny0yLjU3YzEuNzExLTEuNzEzLDIuNTY2LTMuOSwyLjU2Ni02LjU2N1Y4Mi4yMjFjMC0yLjY2Mi0wLjg1NS00Ljg1My0yLjU2Ni02LjU2Mw0KCQkJYy0xLjcxMS0xLjcxMy0zLjkwMS0yLjU2OC02LjU3LTIuNTY4SDgyLjIyNGMtMjIuNjQ4LDAtNDIuMDE2LDguMDQyLTU4LjEwMiwyNC4xMjVDOC4wNDIsMTEzLjI5NywwLDEzMi42NjUsMCwxNTUuMzEzdjIzNy41NDINCgkJCWMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjA5NWMxNi4wODYsMTYuMDg0LDM1LjQ1NCwyNC4xMyw1OC4xMDIsMjQuMTNoMjM3LjU0M2MyMi42NDcsMCw0Mi4wMTctOC4wNDYsNTguMTAxLTI0LjEzDQoJCQljMTYuMDg1LTE2LjA3NywyNC4xMjctMzUuNDQ3LDI0LjEyNy01OC4wOTV2LTkxLjM1OGMwLTIuNjY5LTAuODU2LTQuODU5LTIuNTc0LTYuNTcNCgkJCUMzOTcuNzA5LDI5My4yMDksMzk1LjUxOSwyOTIuMzU0LDM5Mi44NTcsMjkyLjM1NHoiLz4NCgkJPHBhdGggZD0iTTUwNi4xOTksNDEuOTcxYy0zLjYxNy0zLjYxNy03LjkwNS01LjQyNC0xMi44NS01LjQyNEgzNDcuMTcxYy00Ljk0OCwwLTkuMjMzLDEuODA3LTEyLjg0Nyw1LjQyNA0KCQkJYy0zLjYxNywzLjYxNS01LjQyOCw3Ljg5OC01LjQyOCwxMi44NDdzMS44MTEsOS4yMzMsNS40MjgsMTIuODVsNTAuMjQ3LDUwLjI0OEwxOTguNDI0LDMwNC4wNjcNCgkJCWMtMS45MDYsMS45MDMtMi44NTYsNC4wOTMtMi44NTYsNi41NjNjMCwyLjQ3OSwwLjk1Myw0LjY2OCwyLjg1Niw2LjU3MWwzMi41NDgsMzIuNTQ0YzEuOTAzLDEuOTAzLDQuMDkzLDIuODUyLDYuNTY3LDIuODUyDQoJCQlzNC42NjUtMC45NDgsNi41NjctMi44NTJsMTg2LjE0OC0xODYuMTQ4bDUwLjI1MSw1MC4yNDhjMy42MTQsMy42MTcsNy44OTgsNS40MjYsMTIuODQ3LDUuNDI2czkuMjMzLTEuODA5LDEyLjg1MS01LjQyNg0KCQkJYzMuNjE3LTMuNjE2LDUuNDI0LTcuODk4LDUuNDI0LTEyLjg0N1Y1NC44MThDNTExLjYyNiw0OS44NjYsNTA5LjgxMyw0NS41ODYsNTA2LjE5OSw0MS45NzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          />
        </a>
      </div>
      <div className="gs-tab">
        <div
          className={tab === 1 ? "active-gs-tab" : ""}
          onClick={() => setTab(1)}
        >
          Goals
        </div>
        <div
          className={tab === 0 ? "active-gs-tab" : ""}
          onClick={() => setTab(0)}
        >
          Submission
        </div>
      </div>
      <div className="tab-view">
        {tab === 1 ? (
          <div className="animate-left">
            <GoalView goals={question.goals} />
          </div>
        ) : (
          <div className="animate-right">
            <Submission user={props.user}/>
          </div>
        )}
      </div>
    </div>
  ) : (
    <h3>Loading....</h3>
  );
}

export default Question;
