import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from  './components/Board';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: {},
        }
    }

    render() {
        return (
            <Board />
        )
    }
}

export default App;