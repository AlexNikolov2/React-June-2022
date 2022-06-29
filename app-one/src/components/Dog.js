import React from 'react';
import doggo from '../img/dog.jpg'
import './Dog.css'

function Dog(){
    return (
        <div className="dog">
        <h3>Hello from Dog!</h3>
        <p>Hello my name is Ivan from Draganovo</p>
        <p className="styled-text">I am a styled component thanks to normal, imported CSS.</p>
        <span>Here is a wonderful picture of me:</span>
        <br/>
        <img src={doggo} alt="unable to load img"/>
        </div>
    )
}

export default Dog;