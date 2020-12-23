import React, { useState } from 'react'

function Input(props) {
    const {label,onChange,...prop} = props;
    const [value,setValue] = useState("");
    const valueChange =(event)=>{
        onChange(event);
        setValue(event.target.value.trim());
    }
    
    return (
        <div className="inp">
            <input {...prop } onChange={valueChange} />
            <label className={value.length!==0 ? "fs10" : ""}>{label}</label>

        </div>
    )
}

export default Input
