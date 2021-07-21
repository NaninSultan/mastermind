import React from 'react';

const Rules = () => {

    const link = 'https://en.wikipedia.org/wiki/Mastermind_(board_game)';

    return (
        <div className="rules">
        <p> Try to guess the pattern, in both order and
        color, within ten turns. After submitting a row,
        a small green squared is show for each circle
        in a correct position and color. A yellow square
        indicates the existence of a correct color in an
        incorrect position. <br />
        More info on <a href={link}>Wikipedia</a>.
        </p>
        </div>
    )
}

export default Rules;