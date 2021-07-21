import React from 'react';
import Row from './Row';

const Board = ({ canCheck, totalRows, pegAction, checkAction, activeRow, activeColor, prevRow, prevHints, currentRow, hints }) => {

        let rows = [];
        for (let i = 0; i < totalRows; i++) {
            rows.push(
                <Row
                    key={'row_' + i}
                    id={'row_' + i}
                    pegAction={pegAction}
                    checkAction={checkAction}
                    activeRow={activeRow}
                    prevRow={prevRow}
                    activeColor={activeColor}
                    canCheck={canCheck}
                    hints={hints}
                    prevHints={prevHints}
                    currentRow={currentRow}
                />
            )
        }

    return (
        <div className="board">
            {rows}
        </div>
    )
}









export default Board;