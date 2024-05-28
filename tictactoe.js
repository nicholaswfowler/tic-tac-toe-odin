const playerOne = {name: 'Player 1', marker: 'X'};

const playerTwo = {name: 'Player 2', marker: 'O'};

var currentPlayer = playerOne;

const turnButtons = document.querySelectorAll('.take-turn');

const gameBoard = (function() {
    const currentBoard = [null, null, null, null, null, null, null, null, null]
    return {currentBoard};
})();

function takeTurn(player, board, square){
    let gameBoard = board.currentBoard;
    console.log('Before Turn:', gameBoard);

    gameBoard[square] = player.marker;
    console.log('After Turn:', gameBoard);

    return ({gameBoard});
}

const newGameButton = document.querySelector('.new-game');
if(playerOne.name == 'Player 1' && playerTwo.name == 'Player 2'){
    newGameButton.addEventListener('click', ()=>{
        playerOne.name = prompt('Enter name for Player One', playerOne.name);
        playerTwo.name = prompt('Enter name for Player Two', playerTwo.name);
        gameBoardOn();
        newGameButton.textContent = 'New Game';
        const title = document.querySelector('.title');
        title.textContent = `${playerOne.name} (X) VS ${playerTwo.name} (O)`;
    })
    
}

function gameBoardOn(){
    turnButtons.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if (gameBoard.currentBoard[btn.id] == null){
                takeTurn(currentPlayer, gameBoard, btn.id);
                btn.textContent = currentPlayer.marker;
                if(isGameWon(gameBoard.currentBoard, currentPlayer.marker)){
                    alert(`${currentPlayer.name} Won!!`)
                }
                currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
            }
        })
    });
}

function isGameWon(gameBoard, marker){
    if(gameBoard[0] == marker && gameBoard[1] == marker && gameBoard[2] == marker){
        return true;
    }
    else if(gameBoard[0] == marker && gameBoard[3] == marker && gameBoard[6] == marker){
        return true;        
    }
    else if(gameBoard[0] == marker && gameBoard[4] == marker && gameBoard[8] == marker){
        return true;        
    }
    else if(gameBoard[1] == marker && gameBoard[4] == marker && gameBoard[7] == marker){
        return true;        
    }
    else if(gameBoard[2] == marker && gameBoard[5] == marker && gameBoard[8] == marker){
        return true;        
    }
    else if(gameBoard[2] == marker && gameBoard[4] == marker && gameBoard[6] == marker){
        return true;        
    }
    else if(gameBoard[3] == marker && gameBoard[4] == marker && gameBoard[5] == marker){
        return true;        
    }
    else if(gameBoard[6] == marker && gameBoard[7] == marker && gameBoard[8] == marker){
        return true;        
    }
}

function newGame(){
        turnButtons.forEach((btn)=>{
                    btn.textContent = '';
                    currentPlayer = playerOne;
                    gameBoard.currentBoard[btn.id] = null;
        })
}