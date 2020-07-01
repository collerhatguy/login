const newUsername = document.getElementById("createUsername");
const newPassword = document.getElementById("createPassword");
const createForm = document.getElementById("accountCreator");
function create() {
  const newUsernameInput = document.getElementById("createUsername").value;
  newUsername.value = "";
  const newPasswordInput = document.getElementById("createPassword").value;
  newPassword.value = "";
  console.log(newPasswordInput + newUsernameInput);
  alert("Congrats: you've made an account.");
}
// box for username and password
const username = document.getElementById("userename");
const password = document.getElementById("password");
// the form itself
const login = document.getElementById("login");
//  retrieving the users predecided password and username
const LOCAL_STORAGE_USER = "????";
const correctUsername =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER)) || "";
const LOCAL_STORAGE_PASS = "????";
const correctPassword =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PASS)) || "";
