# mastermind

Mastermind game is a game where a player has to guess the color pattern consisting of four out of six different colors within twelve turns.

# Application description

Each turn player tries to guess the pattern by choosing color pegs and putting them in some order.
At the end of the turn, the player receives some hints in the form of a key or hint pegs.
For each correctly guessed color and its position, the plyer gets a hint peg in a green color, and for each guessed color but in a wrong position, the player hets a hint peg in yellow color.
On the next turn, the player should take previous guesses and hints into consideration.
The game ends when the player guesses the color pattern correctly, which counts as a win, or when the last turn is reached without correctly guessing the color pattern, which counts as a defeat.

# Application main features:

Mastermind Game App
Rules (hidden until clicked on)
Board containing:
    - Six initial color pegs
    - Twelve rows containing:
        - Four pegs
        - Check button
        - Four hint pegs
    - Message win/lose
    - Play again button
Easy to integrate
Responsive

# Technologies

Buillt with:
HTML
CSS
React JS

# List of libraries

Frontend:
-react-router-dom - Enables routing in our web applications

# How to clone, install and start application:
​
-To get a local copy up and running follow these simple example steps:
​
1. First step is to clone the repository:
​
https://github.com/NaninSultan/mastermind
​
2. Second step is to install NPM packages:
​
npm install
​
3. Third step is to start the project:
​
npm start