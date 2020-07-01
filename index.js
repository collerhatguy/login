const newUsername = document.getElementById("createUsername");
const newPassword = document.getElementById("createPassword");
const createForm = document.getElementById("accountCreator");
// list af all created accounts
var accounts = [];
// retireve info to create an account
function create() {
  // retrieve user input
  const newUsernameInput = document.getElementById("createUsername").value;
  newUsername.value = "";
  const newPasswordInput = document.getElementById("createPassword").value;
  newPassword.value = "";
  console.log(newPasswordInput + newUsernameInput);
  alert("Congrats: you've made an account.");
  const newAccount = createAcount(newUsernameInput, newPasswordInput);
  // saves account to list
  accounts.push(newAccount);
  console.log(accounts);
}
// creates new account
function createAcount(u, p) {
  var NEW = {
    username: u.toString(),
    password: p.toString(),
  };
  return NEW;
}
// box for username and password
const username = document.getElementById("userename");
const password = document.getElementById("password");
// the form itself
const login = document.getElementById("login");
function check() {
  const usernameInput = username.value;
  const passwordInput = password.value;
  accounts.forEach((account) => {
    if (account.username === usernameInput) {
      if (account.password === passwordInput) {
        alert("You did it!!!!");
      }
    } else {
      alert("There is no such account.");
    }
  });
}
