import React, {Component} from 'react'
import ReactDOM from 'react-dom'

console.log("HELLO");

class App extends Component {
    render(){
        return(
            <div>
                HELLO2
            </div>    
            )
    }
};


const root = document.getElementById("app");

ReactDOM.render( <App/>, root)