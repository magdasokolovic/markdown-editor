import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap'
import Markdown from './Markdown';
import Previewer from './Previewer';

function App() {
  // Markdown and previewer are sublings, so in order to pass data from one to another we use hook in the main App component
  const [text, setText] = useState('')

  return (

     // HEADER:
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center"><Badge variant="secondary">Markdown editor</Badge></h1>
      </div>
    {/* END OF HEADER */}


      <div className="row justify-content-center mt-5" style={{position: 'relative'}}>
        <div className="col md-5 text-center">
          <h2> <Badge variant="success">Markdown </Badge></h2>
          <Markdown text={text} setText={setText}/>
        </div>

        <div className="col md-5 text-center">
          <h2 className="text-center"> <Badge variant="warning">Previewer </Badge></h2>
          <Previewer text={text} />
        </div>

      </div>
    </div>
  );
}


export default App;