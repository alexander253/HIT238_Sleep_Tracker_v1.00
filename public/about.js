const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const outName = document.getElementById("name");
const key= "Name";



document.getElementById("saveBtn").addEventListener("click", save);

function save(){
const value = inpName.value;

console.log(value);

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};

for (let i= 0; i<localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  outName.innerHTML+= `${value}`;
}
