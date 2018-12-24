var React = require ('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component{
    render(){
        return <div> Your own create-react-app </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));

