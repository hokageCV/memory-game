import React from 'react';

export default function Popup ({reset}) {

    return(
        <div className='popupParent'>
            <div className='popup'>
                <h1> You Won</h1>
                {/* <button type='button' onClick={()=>{reset()}}>Restart game</button> */}
                <button type='button' onClick={reset}>Restart game</button>
            </div>
        </div>
        
    )
}