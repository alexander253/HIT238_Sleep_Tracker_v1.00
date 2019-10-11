const trackHours= document.getElementById("trackHours");
const trackBtn = document.getElementById("trackBtn");

const key= "hoursTracked";

document.getElementById("trackBtn").addEventListener("click", save);

function save(){
const value = trackHours.value;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};
