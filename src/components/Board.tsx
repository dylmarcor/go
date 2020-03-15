import React from 'react';
import './Board.css';

interface MyProps{};

const Board = (props: MyProps) => {

    return (
        <div>
            <div id="a-row">
                <div id="A0"></div>
                <div id="A1"></div>
                <div id="A2"></div>
                <div id="A3"></div>
                <div id="A4"></div>
                <div id="A5"></div>
                <div id="A6"></div>
                <div id="A7"></div>
                <div id="A8"></div>
            </div>
            <div id="b-row">
                <div id="B0"></div>
                <div id="B1"></div>
                <div id="B2"></div>
                <div id="B3"></div>
                <div id="B4"></div>
                <div id="B5"></div>
                <div id="B6"></div>
                <div id="B7"></div>
                <div id="B8"></div>
            </div>
            <div id="c-row">
                <div id="C0"></div>
                <div id="C1"></div>
                <div id="C2"></div>
                <div id="C3"></div>
                <div id="C4"></div>
                <div id="C5"></div>
                <div id="C6"></div>
                <div id="C7"></div>
                <div id="C8"></div>
            </div>
        </div>
    )
}

export default Board;