import React from "react";

export default function RangeInput(props){



    return(
        <div className="form--input-box">
            <input min={0} max={255} type="range" className="form--input" onChange={props.handleOnInput}
             name={props.name}/>
            <p>{props.value}</p>
        </div>
        
    );
}