import React from 'react'

function List(props) {
    return (
      <div className="list-container" style={props.style}>
        {props.items.map((i,idx) => props.renderComponent({ item: i ,key:idx }))}
      </div>
    );
}

export default List
