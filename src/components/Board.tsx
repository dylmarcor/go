import React from 'react';
import './Board.css';

interface MyProps{};

const Board = (props: MyProps) => {

    return (
        <div id="game-board">
            <div id="a-row">
                <div id="A0" className="board-tile"></div>
                <div id="A1" className="board-tile"></div>
                <div id="A2" className="board-tile"></div>
                <div id="A3" className="board-tile"></div>
                <div id="A4" className="board-tile"></div>
                <div id="A5" className="board-tile"></div>
                <div id="A6" className="board-tile"></div>
                <div id="A7" className="board-tile"></div>
                <div id="A8" className="board-tile"></div>
            </div>
            <div id="b-row">
                <div id="B0" className="board-tile"></div>
                <div id="B1" className="board-tile"></div>
                <div id="B2" className="board-tile"></div>
                <div id="B3" className="board-tile"></div>
                <div id="B4" className="board-tile"></div>
                <div id="B5" className="board-tile"></div>
                <div id="B6" className="board-tile"></div>
                <div id="B7" className="board-tile"></div>
                <div id="B8" className="board-tile"></div>
            </div>
            <div id="c-row">
                <div id="C0" className="board-tile"></div>
                <div id="C1" className="board-tile"></div>
                <div id="C2" className="board-tile"></div>
                <div id="C3" className="board-tile"></div>
                <div id="C4" className="board-tile"></div>
                <div id="C5" className="board-tile"></div>
                <div id="C6" className="board-tile"></div>
                <div id="C7" className="board-tile"></div>
                <div id="C8" className="board-tile"></div>
            </div>
            <div id="d-row">
                <div id="D0" className="board-tile"></div>
                <div id="D1" className="board-tile"></div>
                <div id="D2" className="board-tile"></div>
                <div id="D3" className="board-tile"></div>
                <div id="D4" className="board-tile"></div>
                <div id="D5" className="board-tile"></div>
                <div id="D6" className="board-tile"></div>
                <div id="D7" className="board-tile"></div>
                <div id="D8" className="board-tile"></div>
            </div>
            <div id="e-row">
                <div id="E0" className="board-tile"></div>
                <div id="E1" className="board-tile"></div>
                <div id="E2" className="board-tile"></div>
                <div id="E3" className="board-tile"></div>
                <div id="E4" className="board-tile"></div>
                <div id="E5" className="board-tile"></div>
                <div id="E6" className="board-tile"></div>
                <div id="E7" className="board-tile"></div>
                <div id="E8" className="board-tile"></div>
            </div>
            <div id="f-row">
                <div id="F0" className="board-tile"></div>
                <div id="F1" className="board-tile"></div>
                <div id="F2" className="board-tile"></div>
                <div id="F3" className="board-tile"></div>
                <div id="F4" className="board-tile"></div>
                <div id="F5" className="board-tile"></div>
                <div id="F6" className="board-tile"></div>
                <div id="F7" className="board-tile"></div>
                <div id="F8" className="board-tile"></div>
            </div>
            <div id="g-row">
                <div id="G0" className="board-tile"></div>
                <div id="G1" className="board-tile"></div>
                <div id="G2" className="board-tile"></div>
                <div id="G3" className="board-tile"></div>
                <div id="G4" className="board-tile"></div>
                <div id="G5" className="board-tile"></div>
                <div id="G6" className="board-tile"></div>
                <div id="G7" className="board-tile"></div>
                <div id="G8" className="board-tile"></div>
            </div>
            <div id="h-row">
                <div id="H0" className="board-tile"></div>
                <div id="H1" className="board-tile"></div>
                <div id="H2" className="board-tile"></div>
                <div id="H3" className="board-tile"></div>
                <div id="H4" className="board-tile"></div>
                <div id="H5" className="board-tile"></div>
                <div id="H6" className="board-tile"></div>
                <div id="H7" className="board-tile"></div>
                <div id="H8" className="board-tile"></div>
            </div>
            <div id="i-row">
                <div id="I0" className="board-tile"></div>
                <div id="I1" className="board-tile"></div>
                <div id="I2" className="board-tile"></div>
                <div id="I3" className="board-tile"></div>
                <div id="I4" className="board-tile"></div>
                <div id="I5" className="board-tile"></div>
                <div id="I6" className="board-tile"></div>
                <div id="I7" className="board-tile"></div>
                <div id="I8" className="board-tile"></div>
            </div>
        </div>
    )
}

export default Board;