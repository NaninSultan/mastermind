import React, { useState } from 'react';
import Colors from './Colors';
import Board from './Board';
import Rules from './Rules';
import Solution from './Solution';

const colors = ['red', 'orange', 'green', 'blue', 'purple', 'pink'];
const trueRow = [];
for (let i = 0; i < 4; i++) {
    trueRow.push(colors[Math.floor(Math.random() * 6)])
}

const Game = () => {

    const [showRules, setShowRules] = useState(true);
    const [rulesButton, setRulesButton] = useState("Show rules");


    const rulesHandler = () => {
        if(showRules) {
            setShowRules(false);
            setRulesButton('Hide rules')
        } else if(!showRules) {
            setShowRules(true);
            setRulesButton('Show rules')
        }
    }

    const [activeColor, setActiveColor] = useState('');
    const [prevRow, setPrevRow] = useState([]);
    const [prevHints, setPrevHints] = useState([]);
    const [currentRow, setCurrentRow] = useState(['', '', '', '']);
    const [hints, setHints] = useState([0, 0, 0, 0]);
    const [activeRow, setActiveRow] = useState(0);
    const totalRows = 12;
    const [canCheck, setCanCheck] = useState(false);
    const [victory, setVictory] = useState(false);
    const [defeat, setDefeat] = useState(false);

    const activateColor = (prop) => {
        setActiveColor(prop);
    }

    const setColor = (color, id) => {
        if(victory) {
            return false
        }
        const rowId = +id.substr(1, id.indexOf('-') - 1);
        const pegId = +id.substr(id.indexOf('-') + 1);
        let isArrayFull = 0;
    
        if(activeRow === rowId && color) {  
            currentRow[pegId] = color;
            setCurrentRow([...currentRow])
        }
    
        for(let i in currentRow) {
            if(currentRow[i].length > 0) {
                isArrayFull++;
            }
        }
    
        if(isArrayFull >= currentRow.length) {
            setCanCheck(true);
        } else {
            setCanCheck(false);
        }
    }
    
    const checkRow = () => {
        const presentRow = JSON.parse(JSON.stringify(currentRow));
        const correctRow = JSON.parse(JSON.stringify(trueRow));
    
        for(let i = 0; i < 4; i++) {
            if(presentRow[i] === correctRow[i]) {
                hints[i] = 2;
                delete (presentRow[i]);
                delete (correctRow[i])
            }
        }
    
        for(let i in presentRow) {
            for(let j in correctRow) {
                if(presentRow[i] === correctRow[j]) {
                    hints[i] = 1;
                    delete (presentRow[i]);
                    delete (correctRow[j])
                }
            }
        }
    
        hints.sort((a, b) => (b - a));


        if (hints[0] === 2 && hints[1] === 2 && hints[2] === 2 && hints[3] === 2) {
            return setVictory(true);
        }
        
        if(activeRow >= totalRows-1 && !victory) {
            return setDefeat(true);
        }
    
        prevHints.push(hints);
        prevRow.push(currentRow);
    
        setHints([0, 0, 0, 0]);
        setActiveRow(activeRow + 1);
        setPrevHints(prevHints);
        setCurrentRow(['', '', '', '']);
        setPrevRow(prevRow);
        setCanCheck(false);
        setVictory(victory);
        setDefeat(defeat);
    }
    
    const newGame = () => {
        window.location.reload();
    }
    



    let msg = victory ? 'You Win!!' : (  defeat ? 'You Lost!!' : '');

    return (
        <div className="game-container">
        {!showRules && <Rules />}
        <button className="rules-button" onClick={rulesHandler}>{rulesButton}</button>
        <Colors list={colors}
             activeColor={activeColor}
             action={activateColor} 
        />
        <Board 
            canCheck={canCheck} 
            totalRows={totalRows} 
            pegAction={setColor} 
            checkAction={checkRow} 
            activeRow={activeRow} 
            activeColor={activeColor} 
            prevRow={prevRow} 
            prevHints={prevHints} 
            currentRow={currentRow} 
            hints={hints}
        />
        <p className="msg">{msg}</p>
        <Solution 
            newGame={newGame}
            defeat={defeat}
            victory={victory}
            trueRow={trueRow}
        />
        </div>
    );

}

export default Game;