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
    let opt=prompt("It's your turn\nEnter one of the following options: 'rock', 'paper', 'scissors'");
    while(!(opt==="rock"|| opt==="paper"|| opt==="scissors")){
        opt=prompt("Invalid Option\nEnter one of the following options: 'rock', 'paper', 'scissors'");
    }
    return opt;
}

console.log(getHumanChoice());