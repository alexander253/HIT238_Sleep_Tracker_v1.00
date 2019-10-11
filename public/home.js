const outName = document.getElementById("name");
const sleepGoalHours = document.getElementById("goal");



outName.innerHTML= localStorage.getItem("Name");
sleepGoalHours.innerHTML= localStorage.getItem("goalz");
