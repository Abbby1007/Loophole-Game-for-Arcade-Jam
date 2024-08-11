
function userName(){
   let input = document.getElementById("username").value;
  const list = [`Bob`,`Jeff`, `Karen`,`Janet`]
  const chosenName = list[Math.floor(Math.random() * list.length)];
  document.getElementById('appear').innerHTML = `Oh ${input}? yeah I'm just gonna call you ${chosenName}` 

  document.getElementById('appear2').innerHTML = `<a href="page2.html"> <button> Next </button> </a>`
  }

function yes(){
  document.getElementById('appear').innerHTML = `<b> Employer: </b> Well we want our employees to be able to work iwht out robot companions. <br> <b> Employer: </b> Which is why interviewees must complete 1 challenge with a robot companion before moving on to the next interview phase 
  <br> <b> Employer: </b> You understand all that? 
  <br> <button onclick="yesMoveOn()"> <b> You: </b> Yes!!! </button> 
  <button onclick="no()"> <b> You: </b> NO?! </button>  `
}

function no(){
  document.getElementById('appear').innerHTML = ` <b> Employer: </b> Really ... dang, well ... GET OUT!!!! <br><a href="gameOver.html"> <button> GET OUT !!!!</button> </a>`
}


function yesMoveOn(){
  document.getElementById('appear').innerHTML = `<b> Employer: </b> Great and I love the enthusiasm !!!! <br> <a href="page3.html"> <button> Next </button><a> `
}
  
// Start of Rock Paper Scissors Code

const rockButton = document.getElementById('ROCK');
const paperButton = document.getElementById('PAPER');
const scissorsButton = document.getElementById('SCISSORS');


// rockButton.addEventListener('click', () => playRound('ROCK'));
// paperButton.addEventListener('click', () => playRound('PAPER'));
// scissorsButton.addEventListener('click', () => playRound('SCISSORS'));

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

       if (currentRound == 5){
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
  document.getElementById("rpsappear").innerHTML = `-----------------------------------------------------<br><b> Giz: </b> BINGO!!, it seems there is an error in rules of the challenge. <br>
  <b> Giz: </b> Try inspecting the instructions <br> <button onclick="inspect()"> <b> You: </b> I inspected the Instructions</button> <button onclick="whatDoYouMean()"> <b> You: </b> What do you mean?</button> `
}
// End of Rock Paper Scissors Code

function whatDoYouMean(){
  document.getElementById("rpsappear").innerHTML = `-----------------------------------------------------<br> <b> Giz: </b> Try clicking the Instructions sentence <br> <button onclick="inspect()"> <b> You: </b> I did that</button> <button onclick = "getOut2()"> <b> You: </b>I still don't understand </button>`
}

function getOut2(){
  document.getElementById("rpsappear").innerHTML = `-----------------------------------------------------<br>  <b> Giz: </b> Im sorry partner but I don't think your cut out for this job :(  <a href="gameOver.html"><button> <b> You: </b> I understand :(</button> </a>` 
}

function inspect(){
   document.getElementById("rpsappear").innerHTML = `-----------------------------------------------------<br> <b> Giz: </b> Good Job Partner, you probably notice that you can change the instructions <br> <b> Giz: </b> If you word it correctly, you might be able to change the rules of the game. <br> <b> Giz: </b> I have an idea for 3 new rules, and one of them must work, can you give me a hand?
<br> <button onclick="firstChallengeHint()"> <b> You: </b> I'll give it a try </button> <button onclick="getOut2()"> <b> You: </b> No </button> `
}

function firstChallengeHint(){
  document.getElementById("rpsappear").innerHTML = `-----------------------------------------------------<br> <b> Giz: </b> Okay Partner make sure to type exactly what I suggest or the new rule won't work. <br> Change Instructions to: <br> <li> Instructions: Win 1 match of Rock, Paper, Scissors </li>  <li> Instructions: lose 5 matches of Rock, Paper, Scissors </li> <li> Instructions: Lose 1 match of Rock, Paper, Scissors </li> <br> <b> Giz: </b> When your done click the test button <br> <button onclick="firstChallengeSubmit()" > Test </button>`
}

var firstChallenge = document.getElementById("1stChallenge");
function firstChallengeSubmit(){
  if(firstChallenge.textContent == "Instructions: lose 5 matches of Rock, Paper, Scissors"){
    Congratulations();
    // document.getElementById("rpsappear2").innerHTML =`Congratulations`
  }
  else{
    document.getElementById("rpsappear2").innerHTML =`Try  a different rule`
  }
}

function Congratulations(){
  document.getElementById("rpsappear2").innerHTML =`<b> Giz: </b> Yes, congratulations on passing the challenge <br>  <a href= "pagevvvvv.html"><button> <b> You: </b> Thank you!!! :D</button> </a>` 
}

function notToBad(){
   document.getElementById("appear").innerHTML =`<b> Employer:</b> You work well with Giz <br> <b> Employer:</b> And that is just the skill we are looking for at our company <br> <b> Employer</b> You can come back tommorow for the last part of your interview <br> <button onclick="youCanGo()"> <b>You:</b> Thank you .... </button>`
}

function youCanGo(){
  document.getElementById("appear").innerHTML =`<b> Employer:</b> Okay you can leave now your starting to freak me out <br> <a href="pagessssss.html"><button> <b> You:</b> Okay ... bye ... *leaves room*</button> </a>`
}