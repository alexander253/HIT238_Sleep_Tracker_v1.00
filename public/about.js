const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const outName = document.getElementById("name");
const sleepGoalHours = document.getElementById("goal");
const key= "Name";
const sleepGoal = "goalz";



document.getElementById("saveBtn").addEventListener("click", save);

function save(){
const value = inpName.value;

console.log(value);

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};

document.getElementById("hourBtn").addEventListener("click", saveGoal);

function saveGoal(){
const hours = hourInp.value;

console.log(hours);

if (sleepGoal && hours){
  localStorage.setItem(sleepGoal, hours);
  location.reload();
}






};
