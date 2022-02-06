import React from "react";
import RangeInput from "./RangeInput";

export default function ColorPicker(){
    const [value, setValue] = React.useState(
        {
            red: 50,
            green: 50,
            blue: 50
        }
    );
    //const square = document.querySelector(".square");

    function print(event){
        //const p = document.querySelector("p");
        //p.innerHTML = e.target.value;
        //console.log(e.target.value);
        
        setValue(prevValue =>{
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            };
        });
        
    }


    return (
        <>
            <div className="square" 
            style={{background: `rgb(${value.red}, ${value.green}, ${value.blue})`}}></div>
           
            <form className="form">
                <RangeInput name="red" handleOnInput={print} value={value.red}/>
                
                <RangeInput name="green" handleOnInput={print} value={value.green}/>
                <RangeInput name="blue" handleOnInput={print} value={value.blue}/>
                <div className="form--buttons-box">
                    <button className="form--buttons">Cancel</button>
                    <button type="submit" className="form--buttons">Submit</button>
                </div>
                
            </form>
        </>
    );
}