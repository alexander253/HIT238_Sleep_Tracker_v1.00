const outName = document.getElementById("name");
const sleepGoalHours = document.getElementById("goal");
const hours = document.getElementById("hours")


outName.innerHTML= localStorage.getItem("Name");
sleepGoalHours.innerHTML= localStorage.getItem("goalz");
hours.innerHTML= localStorage.getItem("hoursTracked")
