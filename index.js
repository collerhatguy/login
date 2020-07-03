const newUsername = document.getElementById("createUsername");
const newPassword = document.getElementById("createPassword");
const createForm = document.getElementById("accountCreator");
let LOCAL_STORAGE_ACCOUNTS = "accounts";
// list af all created accounts
var accounts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACCOUNTS)) || [];
// retireve info to create an account
function create() {
  // retrieve user input
  const newUsernameInput = document.getElementById("createUsername").value;
  newUsername.value = "";
  const newPasswordInput = document.getElementById("createPassword").value;
  newPassword.value = "";
  alert("Congrats: you've made an account.");
  const newAccount = createAcount(newUsernameInput, newPasswordInput);
  // saves account to list
  accounts.push(newAccount);
  console.log(accounts);
  save();
}
// creates new account
function createAcount(u, p) {
  var NEW = {
    username: u.toString(),
    password: p.toString(),
  };
  return NEW;
}
// this will save newly created accounts to local storage.
function save() {
  localStorage.setItem(LOCAL_STORAGE_ACCOUNTS, JSON.stringify(accounts));
}
// box for username and password
const username = document.getElementById("username");
const password = document.getElementById("password");
// the form itself
const login = document.getElementById("login");
function check() {
  const usernameInput = username.value;
  const passwordInput = password.value;
  accounts.forEach((account) => {
    console.log(account);
    if (account.username === usernameInput) {
      if (account.password === passwordInput) {
        window.location.href = "reward.html";
        return;
      } else {
        alert("No such account exists");
      }
    }
  });
}
