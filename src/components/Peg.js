import React from 'react';

const Peg = ({ pegAction, pegId, activeRow, currentRow, prevRow, activeColor }) => {
    const pegsId = +pegId.substr(pegId.indexOf('-') + 1);
    const rowId = +pegId.substr(1, pegId.indexOf('-') - 1);
    let clase = '';
    if (activeRow === rowId) {
        clase = currentRow[pegsId]
    } else {
        for (let i in prevRow) {
            if(+i === +rowId)
                clase = prevRow[rowId][pegsId]
        }
    }

    return (
        <span 
            id={pegId}
            className={'peg ' + clase}
            onClick={() =>
                pegAction(activeColor, pegId)
            } >      
        </span>
    );
}

export default Peg;