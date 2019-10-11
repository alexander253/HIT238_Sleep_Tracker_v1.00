const outName = document.getElementById("name");
const sleepGoalHours = document.getElementById("goal");
const hours = document.getElementById("hours")


outName.innerHTML= localStorage.getItem("Name");
sleepGoalHours.innerHTML= localStorage.getItem("goalz");
hours.innerHTML= localStorage.getItem("hoursTracked")


const moreSleep=parseInt(localStorage.getItem("hoursTracked"));

console.log(moreSleep);

if (moreSleep<8 ){
  document.getElementById('moreSleep').innerHTML=("Looks like you need more sleep");
  document.getElementById('moreSleepTip').innerHTML=("Have you tried counting sheep?");
}else {
  document.getElementById('moreSleep').innerHTML=("Looks like you are getting enough sleep");
  document.getElementById('moreSleepTip').innerHTML=("Make sure you keep it up on a regular basis");

};
