let gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
let currentPlayer = "X";
let gameEnded=false;

function pushData(row,col) {
    if(gameEnded){
        return
    }
    gameBoard[row][col] = currentPlayer;

    document.getElementById('tableBoard').rows[row].cells[col].innerText =currentPlayer;
    if(checkWin(currentPlayer)){
        alert(`${currentPlayer} won the game`);
        gameEnded=true;
    }
    if(!checkForDraw()){
        alert('game drawn');
        gameEnded=true;
    }
    // console.log(gameBoard); 
    currentPlayer=currentPlayer === 'X'?'0':'X'; 

}
function checkWin(player){
    for(i=0;i<3;i++){
        //to check horizontally
        if(gameBoard[i][0]===player && gameBoard[i][1]===player && gameBoard[i][2]===player){
            return true
        }
        // to check vertically
        if(gameBoard[0][i]===player && gameBoard[1][i]===player && gameBoard[2][i]===player){
            return true
        }
    }

    if(gameBoard[0][0]===player && gameBoard[1][1]==player && gameBoard[2][2]===player){
        return true
    }
    if(gameBoard[0][2]===player && gameBoard[1][1]===player && gameBoard[2][0]===player){
        return true
    }
    return false;

}

function checkForDraw(){
    for(let i of gameBoard){
        if(i.includes(null)){
            return true;
        }
    }
    return false;
}
 
