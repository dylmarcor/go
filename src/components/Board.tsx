import React from 'react';
import './Board.css';

interface MyProps{};

const Board = (props: MyProps) => {

    return (
        <div>
            <div id="A0"></div>
            <div id="A1"></div>
            <div id="A2"></div>
            <div id="B0"></div>
            <div id="B1"></div>
            <div id="B2"></div>
            <div id="C0"></div>
            <div id="C1"></div>
            <div id="C2"></div>
        </div>
    )
}

export default Board;