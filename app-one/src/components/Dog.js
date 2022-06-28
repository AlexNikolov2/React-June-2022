import React from 'react';
import doggo from '../img/dog.jpg'

function Dog(){
    return (
        <div>
        <h3>Hello from Dog!</h3>
        <p>Hello my name is Ivan from Draganovo</p>
        <span>Here is a wonderful picture of me:</span>
        <br/>
        <img src={doggo} alt="unable to load img"/>
        </div>
    )
}

export default Dog;