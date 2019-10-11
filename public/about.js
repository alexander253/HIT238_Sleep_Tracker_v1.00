const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const key= "Name";
const sleepGoal = "goalz";



document.getElementById("saveBtn").addEventListener("click", save);

function save(){
const value = inpName.value;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};

document.getElementById("hourBtn").addEventListener("click", saveGoal);

function saveGoal(){
const hours = hourInp.value;

if (sleepGoal && hours){
  localStorage.setItem(sleepGoal, hours);
  location.reload();
}






};
