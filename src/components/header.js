import React from "react";

export default function Header({handleTarget}){
    const options = [
        {
            label:10,
            value:10
        },{
            label:5,
            value:5
        }
    ]
    
    return(
        <div className="header">
            <h1 className="text-uppercase">Memory Game</h1>
            <p>Can you select    
                <select  onChange={handleTarget} >
                    {options.map(op => (
                         <option value={op.value}>{op.label}</option>
                    ))}
                </select> 
                     fruits without repeating any of them ? </p>
        </div>
    )
}