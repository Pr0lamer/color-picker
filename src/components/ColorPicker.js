import React from "react";
import RangeInput from "./RangeInput";

export default function ColorPicker(){
    const [value, setValue] = React.useState(
        {
            red: 50,
            green: 50,
            blue: 50,
            isShown: false
        }
    );
 
    function print(event){
        
        setValue(prevValue =>{
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            };
        });
        
    }

    let prevVal = usePrevious(value);
    
    function usePrevious(value) {
        // The ref object is a generic container whose current property is mutable ...
        // ... and can hold any value, similar to an instance property on a class
        const ref = React.useRef();
        // Store current value in ref
        React.useEffect(() => {
          ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
      }

    function handleSubmit(event){
        event.preventDefault();

        //prevCount = usePrevious(value);
        
        setValue(prevValue =>{
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            };
        });
    }

    function onCancel(){
        setValue(prevValue =>{
            
            return {
                ...prevValue,
                
                ...prevVal,

                // couldn't make the cancel button to hide the sliders properly
                // but I had some results with "isShown: false" below
                // didn't like the outcome so I commented it
                

                //isShown: false
                
            };
        });

    }

    function onSlidersBlockToggle(){
        setValue(prevValue=>{
            return {
                ...prevValue,
                isShown: !prevValue.isShown
            };
        });
    }
    
    return (
        <>
            <div className="square" style={{backgroundColor: `rgb(${value.red}, ${value.green}, ${value.blue})`}}></div>
           
            <form className="form" onSubmit={handleSubmit}>
                {
                    value.isShown &&
                    <div className="form--sliders-box">
                        <RangeInput name="red" handleOnChange={print} value={value.red}/>
                        
                        <RangeInput name="green" handleOnChange={print} value={value.green}/>
                        <RangeInput name="blue" handleOnChange={print} value={value.blue}/>
                    </div>
                }
                
                <div className="form--buttons-box">
                    <button type="button" className="form--buttons" onClick={onCancel}>Cancel</button>
                    <button className="form--buttons">Submit</button>
                    <button type="button" className="form--buttons" onClick={onSlidersBlockToggle}>
                        {value.isShown ? "Hide" : "Show"}
                    </button>
                </div>
                
            </form>
        </>
    );
}