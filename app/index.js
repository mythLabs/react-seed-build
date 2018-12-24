import React from 'react';
import reactDOM from 'react-dom';
require('./index.css');

class App extends React.Component{
    render(){
        return <div> Your own create-react-app (Sort off..)</div>
    }
}

reactDOM.render(<App/>,document.querySelector('#root'));

