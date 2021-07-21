import React from 'react';
import Peg from './Peg'

const Circles = ({ rowId, pegAction, activeRow, currentRow, prevRow, activeColor }) => {

    const rowsId = rowId.substr(4);
    let Pegs = [];
    for (let i = 0; i < 4; i++) {
        Pegs.push(
            <Peg
                pegAction={pegAction}
                key={'p' + rowsId + '-' + i}
                pegId={'p' + rowsId + '-' + i}
                activeRow={activeRow}
                currentRow={currentRow}
                prevRow={prevRow}
                activeColor={activeColor} />
        )
    }
    return <div className="circles">{Pegs}</div>

}

export default Circles;