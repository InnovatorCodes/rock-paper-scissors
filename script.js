function getComputerChoice(){
    //return Math.floor(Math.random()*3); 
    return 0;
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        const resultdiv=document.querySelector('.result');
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
            
            if(roundsLeft==0 && humanScore==computerScore){
                resultdiv.textContent='Deathmatch. First player to Win a Round, Wins the Game';
                roundsLeft=1;
            }
            else if(roundsLeft==0 && humanScore>computerScore){
                resultdiv.textContent='You Won!';
            }
            else if(roundsLeft==0) resultdiv.textContent='You Lost.';
            console.log(roundsLeft);
            return;
        }
    }

    let humanScore=0, computerScore=0, roundsLeft=5;
    const startbtn=document.querySelector(".start");
    const roundsdiv=document.querySelector('.rounds');
    const optdiv=document.querySelector('.options');
    const scoresdiv=document.querySelector('.scores');
    const humandiv=document.querySelector('.human.score');
    const compdiv=document.querySelector('.comp.score');
    const prevChoices=document.querySelector('.prevchoices');
    optdiv.addEventListener('click',(event)=>{
        let target=event.target.id;
        if(target==1||target==2||target==0){
            playRound(target,getComputerChoice());
        }
    })
    startbtn.addEventListener('click',()=>{
        console.log(startbtn.classList);
        startbtn.classList.toggle('displayoff');
        optdiv.classList.toggle('displayoff');
        scoresdiv.classList.toggle('displayoff');
        roundsdiv.classList.toggle('displayoff');
        prevChoices.classList.toggle('displayoff');
    })
    document.addEventListener('click',()=>{
        roundsdiv.textContent="Rounds Remaining: "+roundsLeft;
        humandiv.textContent="Player: "+humanScore;
        compdiv.textContent="Computer: "+computerScore;
    });
    if(humanScore>computerScore) console.log(`You Won!`);
    else if(computerScore>humanScore) console.log(`You Lost!`)
    else console.log(`Its a Draw!`);
}

playGame();