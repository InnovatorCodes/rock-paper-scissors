function getComputerChoice(){
    //return Math.floor(Math.random()*3); 
    return 0;
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        const roundsdiv=document.querySelector('#rounds');
        if(roundsLeft>0){
            let compare=humanChoice-computerChoice;
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
            roundsLeft--;
            roundsdiv.textContent="Rounds Remaining: "+roundsLeft;
            if(roundsLeft==0 && humanScore==computerScore){
                const resultdiv=document.querySelector('#result');
                resultdiv.textContent='Deathmatch. First player to Win a Round, Wins the Game'
            }
            console.log(roundsLeft);
            return;
        }
    }

    let humanScore=0, computerScore=0, roundsLeft=5;
    const startbtn=document.querySelector("#start");
    const optbtns=document.querySelectorAll(".option");
    //startbtn.addEventListener('click',playGame);
    const optdiv=document.querySelector('#options');
    optdiv.addEventListener('click',(event)=>{
        let target=event.target.id;
        if(target==1||target==2||target==0){
            playRound(target,getComputerChoice());
        }
    })
    startbtn.addEventListener('click',()=>{
        startbtn.classList.toggle('startpage');
        optbtns.forEach((btn)=>{
            btn.classList.toggle('gamepage')
        })
    })
    
    if(humanScore>computerScore) console.log(`You Won!`);
    else if(computerScore>humanScore) console.log(`You Lost!`)
    else console.log(`Its a Draw!`);
}

playGame();