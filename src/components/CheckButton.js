import React from 'react';

const CheckButton = ({ rowId, checkAction, activeRow, canCheck }) => {
    const row = +rowId.substr(4);
    let disabled = 'disabled';
    const doNothing = () => (false)

    if (activeRow === row) {
        disabled = canCheck ? '' : 'disabled';
    }
    const checking = disabled === 'disabled' ? doNothing : checkAction;

    return (
        <div
            className={'ok-button ' + disabled}
            onClick={checking}>
                Check
        </div>
    )
}

export default CheckButton;