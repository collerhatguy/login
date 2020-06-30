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
