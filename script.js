function getComputerChoice(){
    let rand=Math.floor(Math.random()*3)
    if(rand===0){
        return "rock";
    }
    else if(rand===1){
        return "paper";
    }
    else{
        return "scissors";  
    }
}

function getHumanChoice(){
    let opt=prompt("It's your turn\nEnter one of the following options: 'rock', 'paper', 'scissors'").toLowerCase();
    while(!(opt=="rock"|| opt=="paper"|| opt=="scissors")){
        opt=prompt("Invalid Option\nEnter one of the following options: 'rock', 'paper', 'scissors'");
    }
    return opt;
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        let humanCode=(humanChoice==="rock")? 0 :(humanChoice==="paper"? 1 : 2);
        let compCode=(computerChoice==="rock")? 0 :(computerChoice==="paper"? 1 : 2);
        let compare=humanCode-compCode;
        if(compare===-2){
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        } 
        else if(compare===-1){
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if(compare===1){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++; 
        } 
        else if(compare===2){
            console.log(`You Lose! Rock beats Scissors`);
            computerScore++;
        } 
        else console.log(`Draw! Both your choices were ${computerChoice}`);
        return;
    }
    let humanScore=0, computerScore=0;
    for(i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore) console.log(`You Won!`);
    else if(computerScore>humanScore) console.log(`You Lost!`)
    else console.log(`Its a Draw!`);
}
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button with id "start"
    document.getElementById("start").addEventListener('click', playGame);
});