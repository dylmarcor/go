import React, {Component, Props} from 'react';
import ReactDOM from 'react-dom';
import Board from  './components/Board';

interface MyProps{};
interface MyState{};

class App extends Component<MyProps, MyState> {
    public constructor (props: MyProps) {
        super(props as any)
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