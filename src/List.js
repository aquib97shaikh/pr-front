import React from 'react'

function List(props) {
    return (
      <div>
        {props.items.map((i) => props.renderComponent({ item: i  }))}
      </div>
    );
}

export default List
