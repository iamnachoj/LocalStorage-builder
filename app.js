// html elements asigned to variables
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

//function fired when button clicked. It insert items on the localStorage
function logItems() {
  const key = inpKey.value; // <------------ VERY IMPORTANT!! Don't forget the .value
  const value = inpValue.value;// <--------- VERY IMPORTANT!! Don't forget the .value
  if(key && value){
    localStorage.setItem(key,value)
    location.reload();
  } else {
    alert("Please insert key and value pair")
  }
}

//other methods for the same thing are:
//1
// btnInsert.onclick = function() {
//   const key = inpKey.value;
//   const value = inpValue.value;
//   console.log(key)
//   console.log(value)
// }

//2
// btnInsert.addEventListener("click", function(){
//   const key = inpKey.value;
//   const value = inpValue.value;
//   console.log(key)
//   console.log(value)
// })


//loop that shows all the localstorage curent info
for (let i = 0; i < localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  lsOutput.innerHTML += `${key}: ${value} <br/>`
}

function clearStorage(){
  localStorage.clear();
  location.reload();
}