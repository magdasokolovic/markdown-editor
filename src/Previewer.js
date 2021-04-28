import React from 'react'
import marked from 'marked'

export default function Previewer({text}) {

    //converting martkdown into html in string: 
    const html = marked(text)
    // dangerouslySetInnerHTML attribute - convert string data to html
    return (
            <div
            className="dg-dark border text-white" 
            style={{height: '400px', padding: '10px'}}
            dangerouslySetInnerHTML={{__html:html}}>    
            </div>
    )
}