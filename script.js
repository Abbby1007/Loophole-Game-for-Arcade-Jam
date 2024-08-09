
function userName(){
   let input = document.getElementById("username").value;
  const list = [`Bob`,`Jeff`, `Karen`,`Janet`]
  const chosenName = list[Math.floor(Math.random() * list.length)];
  document.getElementById('appear').innerHTML = `Oh ${input}? yeah I'm just gonna call you ${chosenName}` 

  document.getElementById('appear2').innerHTML = `<a href="page2.html"> <button> Next </button> </a>`
  }

function yes(){
  document.getElementById('appear').innerHTML = `Well we want our employees to be able to think outside the box and solve problems. <br> Which is why  interviewees must solve 3 problems before moving on to the next interview phase 
  <br> You understand all that? 
  <br> <button onclick="encourage()"> Yes </button> 
  <button onclick="no()"> NO?! </button>  `
}

function no(){
  document.getElementById('appear').innerHTML = ` Really ... dang, well ... GET OUT!!!! <br><a href="index.html"> <button> GET OUT !!!!</button> </a>`
}

function encourage(){
  `oh and remmebr we encourage employees to dig around the rules <br>
  <a href="page3.html"> <button> Next </button><a> `
}