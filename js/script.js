replaceName();
function replaceName() {
  let name = prompt("Masukan nama anda!");
  console.log(name);
  document.getElementById("user-name").innerHTML = name;
}

// function validateForm(){
// let inputName = document.getElementById("input-name").value
// }
