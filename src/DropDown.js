import React, { useEffect, useState } from "react";
import "./Dropdown.css";
// function renderD(){
//   (
//     <div>
//       <div>{selected} ☰
// </div>
//       <select id="cars" name="cars" value={props.title}>
//         {props.options.map((i) => {
//           return (<option value={i} onClick={() => {setSelected(i);console.log(i);}}>
//             {i}
//           </option>)
//         })}
//       </select>
//     </div>
//   );
// }
function DropDown(props) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(props.title);
  let dropdownMenu = React.createRef();
  const clickedHandler = (event) => {
    setSelected(event.target.innerText);
    setClicked(false);
    props.selectHandler(event.target.innerText);
  };
  const closeMenu = (event)=>{
    if(dropdownMenu !== null && !dropdownMenu.contains(event.target)){
      setClicked(false);
    }
    
  }
  useEffect(()=>{
    if(clicked){
      document.addEventListener('click', closeMenu);

    }else{
    document.removeEventListener('click', closeMenu);
    }

  },[clicked])
  return (
    <div className="dropdown">
      <button
        className="dd-title"
        onClick={(event) => {
          
          event.preventDefault();
          setClicked(!clicked);
        }}
      >
        {selected}
      </button>
      {clicked ? (
        <div className="dropdown-menu" ref={(element) => {
          dropdownMenu = element;
        }}>
          {props.options.map((i,idx) => {
            return <span onClick={clickedHandler} key={idx}>{i}</span>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;
