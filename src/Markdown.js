import React from 'react'

export default function Markdown({text, setText}) {
    //  we use methods which is coming from a parent App component so we destructure props
    return (
        <>
            <textarea onChange={(e) => {setText(e.target.value)}} 
            style={{width: '100%', height: '400px'}}
            value={text}></textarea>
            <img
                onClick={() => {setText('')}}
                
                src="https://image.shutterstock.com/image-vector/refresh-icon-600w-718748338.jpg" 
                alt="refresh"
                width="30" 
                style={{position: 'absolute', bottom: "20px", right: '20px', cursor: 'pointer'}}
                />
        </>
    )
}
