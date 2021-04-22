import React from 'react'

function clickMe(){
    alert('You clicked me!');
}
const Button = () => {
    return (
        <div>
            <button onClick ={clickMe} >
                Button
            </button>
        </div>
    )
}

export default Button
