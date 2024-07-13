function getComputerChoice(){
    return Math.floor(Math.random()*3); 
}


function playGame(){
    function convertCodeToRPS(code){
        return code==0? "Rock" : (code==1?"Paper":"Scissors");
    }

    function playRound(humanChoice, computerChoice){ //function to play a single round and increment scores accordingly
        const resultdiv=document.querySelector('.result');
        const roundresdiv=document.querySelector('.roundres');
        if(roundsLeft>0){
            let compare=humanChoice-computerChoice;
            if(compare===-2){
                roundresdiv.textContent="Rock beats Scissors";
                humanScore++;
            } 
            else if(compare===-1){
                roundresdiv.textContent=`${convertCodeToRPS(prevhuman)} is beaten by ${convertCodeToRPS(prevcomp)}`;
                computerScore++;
            }
            else if(compare===1){
                roundresdiv.textContent=`${convertCodeToRPS(prevhuman)} beats ${convertCodeToRPS(prevcomp)}`;
                humanScore++; 
            } 
            else if(compare===2){
                roundresdiv.textContent=`Scissors is beaten Rock`;
                computerScore++;
            } 
            else roundresdiv.textContent=`Both your choices were ${convertCodeToRPS(prevcomp)}`;
            roundsLeft--;
            
            if(roundsLeft==0 && humanScore==computerScore){
                resultdiv.textContent='Deathmatch. First player to Win a Round, Wins the Game'; //Deathmatch round for which one more round is played as long as scores are equal
                roundsLeft=1;
            }
            else if(roundsLeft==0 && humanScore>computerScore){
                resultdiv.textContent='You Won!';
            }
            else if(roundsLeft==0) resultdiv.textContent='You Lost.';
            return; 
        }
    }

    function displayPrevChoice(prevhuman,prevcomp){   //function to display what was played by both players in the last round
        const disphuman=document.querySelector('.human .choice');
        const dispcomp=document.querySelector('.comp .choice');
        switch (prevhuman) {
            case 0:
                disphuman.innerHTML='&#9994';
                break;
            case 1:
                disphuman.innerHTML='&#9995';
                break;
            case 2:
                disphuman.innerHTML='&#9996';
                break;
            case 3:
                disphuman.innerHTML='&#10068';
                break;
            default:
                break;
        }
        switch (prevcomp) {
            case 0:
                dispcomp.innerHTML='&#9994';
                break;
            case 1:
                dispcomp.innerHTML='&#9995';
                break;
            case 2:
                dispcomp.innerHTML='&#9996';
                break;
            case 3:
                dispcomp.innerHTML='&#10068';
                break;
            default:
                break;
        }
    }

    let humanScore=0, computerScore=0, roundsLeft=5;
    let prevhuman=3, prevcomp=3;
    const startbtn=document.querySelector(".start");
    const roundsdiv=document.querySelector('.rounds');
    const optdiv=document.querySelector('.options');
    const scoresdiv=document.querySelector('.scores');
    const humandiv=document.querySelector('.human .score');
    const compdiv=document.querySelector('.comp .score');
    const rstbtn=document.querySelector('.restart');
    const roundresdiv=document.querySelector('.roundres');
    optdiv.addEventListener('click',(event)=>{ //event listener to play round everytime an option button is clicked
        let target=event.target.id;
        if((target==1||target==2||target==0) && roundsLeft>0){
            prevhuman=parseInt(target);
            prevcomp=getComputerChoice();
            playRound(target,prevcomp);
        }
    })
    startbtn.addEventListener('click',()=>{ //event listener to change to game page from start page
        startbtn.classList.toggle('displayoff');
        optdiv.classList.toggle('displayoff');
        scoresdiv.classList.toggle('displayoff');
        roundsdiv.classList.toggle('displayoff');
        roundresdiv.classList.toggle('displayoff');
    })
    document.addEventListener('click',()=>{ // event listener to update scores and other data everytime mouse is clicked
        roundsdiv.textContent="Rounds Remaining: "+roundsLeft;
        humandiv.textContent="Player: "+humanScore;
        compdiv.textContent="Computer: "+computerScore;
        displayPrevChoice(prevhuman,prevcomp);
        if(roundsLeft==0){
            rstbtn.classList.remove('displayoff');
        }
    });
    rstbtn.addEventListener('click',()=>{
            roundsLeft=5;
            humanScore=0;
            computerScore=0;
            prevhuman=3;
            prevcomp=3;
            const resultdiv=document.querySelector('.result');
            resultdiv.textContent='';
            rstbtn.classList.add('displayoff');
            roundresdiv.textContent='';
        }
    );
}

playGame();