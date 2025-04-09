let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg=document.querySelector('#message');


const genCompChoice = () =>{
    const choices=['rock','paper','scissors'];
    let indx = Math.floor(Math.random() * 3);
    return choices[indx];
};

const draw = (userchoice) =>{
    msg.innerText = `its a draw! both choce ${userchoice}`;
    msg.style.backgroundColor='grey';
}

const win = (userchoice,compChoice) =>{
    userScore++;
    document.querySelector("#playerScore").innerText = userScore;
    msg.innerText = `${userchoice} beats ${compChoice}. You won! `;
    msg.style.backgroundColor = 'green';

}

const lose = (userchoice,compChoice) =>{
    compScore++;
    document.querySelector("#compScore").innerText = compScore;
    msg.innerText = `${compChoice} beats ${userchoice}. You lose! `;
    msg.style.backgroundColor = 'red';
}

const playGame = (userchoice) => {
    const compChoice = genCompChoice();
    if(userchoice === compChoice){
        draw(userchoice);
    }
    else if(userchoice =='rock'){
        compChoice == 'scissors' ? win(userchoice,compChoice) : lose(userchoice,compChoice) ;
    }
    else if(userchoice == 'paper'){
        compChoice == 'rock' ? win(userchoice,compChoice) : lose(userchoice,compChoice) ;
    }
    else{
        compChoice == 'paper' ? win(userchoice,compChoice) : lose(userchoice,compChoice) ;
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })

})