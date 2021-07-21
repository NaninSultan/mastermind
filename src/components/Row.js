import React from 'react';
import Circles from './Circles';
import CheckButton from './CheckButton';
import Hints from './Hints';

// contains check button and four hint pegs

const Row = ({ prevHints, hints, activeColor, id, pegAction, checkAction, activeRow, currentRow, prevRow, canCheck }) => {

    let active = '';
    if(+id.substr(4) === activeRow) {
        active = 'active'
    }

    return (
        <div className={'row ' + active} id={id}>
            <Circles
                rowId={id}
                pegAction={pegAction}
                activeRow={activeRow}
                currentRow={currentRow}
                prevRow={prevRow}
                activeColor={activeColor} 
            />
            <CheckButton 
                rowId={id}
                checkAction={checkAction}
                activeRow={activeRow}
                canCheck={canCheck}
            />
            <Hints 
                rowId={id}
                hints={hints}
                prevHints={prevHints}
                activeRow={activeRow}
            />
        </div>
    )
}


export default Row;