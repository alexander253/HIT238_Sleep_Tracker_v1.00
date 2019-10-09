
document.getElementById('btn').addEventListener('click', NightTimeTable);
document.getElementById('btn2').addEventListener('click', DayTimeTable);


function NightTimeTable() {
  var list, i;
	list= document.querySelectorAll(".time");
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML = "5am - 1pm";
  }
}

function DayTimeTable() {
  var list, i;
	list= document.querySelectorAll(".time");
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML = "11pm - 7am";
  }
}
