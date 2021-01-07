import React from 'react'
import List from "./List";

function GoalItem(props) {
    return (
      <div className="gv-item" key={props.key}>
        <div className="gv-item-no">{props.key+1}</div>
        {props.item}
      </div>
    );
}

function GoalView(props) {
    return (
        <List items={props.goals} style={{flexDirection:"column",justifyContent:"flex-start"}} renderComponent={GoalItem}>
        </List>
    )
}

export default GoalView
