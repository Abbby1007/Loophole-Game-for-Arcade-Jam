
function userName(){
   let input = document.getElementById("username").value;
  const list = [`Bob`,`Jeff`, `Karen`,`Janet`]
  const chosenName = list[Math.floor(Math.random() * list.length)];
  document.getElementById('appear').innerHTML = `Oh ${input}? yeah I'm just gonna call you ${chosenName}` 

  document.getElementById('appear2').innerHTML = `<a href="page2.html"> <button> Next </button> </a>`
  }

function yes(){
  document.getElementById('appear').innerHTML = `<b> Employer: </b> Well we want our employees to be able to think outside the box. <br> <b> Employer: </b> Which is why interviewees must complete 3 challenges before moving on to the next interview phase 
  <br> <b> Employer: </b> You understand all that? 
  <br> <button onclick="yesMoveOn()"> <b> You: </b> Yes!!! </button> 
  <button onclick="no()"> <b> You: </b> NO?! </button>  `
}

function no(){
  document.getElementById('appear').innerHTML = ` <b> Employer: </b> Really ... dang, well ... GET OUT!!!! <br><a href="index.html"> <button> GET OUT !!!!</button> </a>`
}


function yesMoveOn(){
  document.getElementById('appear').innerHTML = `<b> Employer: </b> Great and I love the enthusiasm !!!! <br> <a href="page3.html"> <button> Next </button><a> `
}
  
// Start of Rock Paper Scissors Code

const rockButton = document.getElementById('ROCK');
const paperButton = document.getElementById('PAPER');
const scissorsButton = document.getElementById('SCISSORS');


rockButton.addEventListener('click', () => playRound('ROCK'));
paperButton.addEventListener('click', () => playRound('PAPER'));
scissorsButton.addEventListener('click', () => playRound('SCISSORS'));

let PlayerRoundWon = 0;
let ComputerRoundWon = 0;
// let roundDraws = 0;
// let finalMessage = '';

let currentRound = 1;
const totalRound = 5;
const roundDisplay = document.getElementById('round');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerRoundsWonDisplay = document.getElementById('player-rounds-won');
const computerRoundsWonDisplay = document.getElementById('computer-rounds-won');
const roundsDrawDisplay = document.getElementById(`round-draw`);
// const finalMessageDisplay = document.getElementById('final-message');

function playRound(playerChoice){
     if (currentRound <= totalRound) {

       if (currentRound == 3){
         document.getElementById("rpsappear").innerHTML = `----------------------------------------------------- <br> <b> Giz: </b> Hmmm, it seems impossible to win, it's almost like the computer knows your everymove <br> <b> Giz: ... </b> <br> <button onclick ="weird()"> <b> You: </b>... Weird!? </button>
`
       }
       roundDisplay.textContent = `Round: ${currentRound} of ${totalRound}`;
       currentRound++;
       if(playerChoice == 'ROCK'){
         console.log(`player choose rock`);

         playerChoiceDisplay.textContent = `Your choice: Rock`;
         computerChoiceDisplay.textContent = `Computers choice: Paper`
         ComputerRoundWon++;

         playerRoundsWonDisplay.textContent = `Rounds Won: ${PlayerRoundWon}`;
         computerRoundsWonDisplay.textContent = `Rounds Computer Won: ${ComputerRoundWon}`;
       }
         else if(playerChoice == 'PAPER'){
           console.log(`player choose paper`)
           playerChoiceDisplay.textContent = `Your choice: Paper`;
           computerChoiceDisplay.textContent = `Computers choice: Scissors`
           ComputerRoundWon++;

           playerRoundsWonDisplay.textContent = `Rounds Won: ${PlayerRoundWon}`;
           computerRoundsWonDisplay.textContent = `Rounds Computer Won: ${ComputerRoundWon}`;
         }
       else if(playerChoice == 'SCISSORS'){
         console.log(`player choose Scissors`)

         playerChoiceDisplay.textContent = `Your choice: Scissors`;
         computerChoiceDisplay.textContent = `Computers choice: Rock`
         ComputerRoundWon++;

         playerRoundsWonDisplay.textContent = `Rounds Won: ${PlayerRoundWon}`;
         computerRoundsWonDisplay.textContent = `Rounds Computer Won: ${ComputerRoundWon}`;
       }
     } 
}

function weird(){
  document.getElementById("rpsappear2").innerHTML = `<b> Giz: </b> aha, it seems there is an error in rules of the challenge. <br>
  <b> Giz: </b> Try inspecting the instructions <br> <button> <b> You: </b> I inspected the Instructiosn (clicked the Instructions) </button> `
}
// End of Rock Paper Scissors Code