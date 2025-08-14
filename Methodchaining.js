//Method Chaining

let username = window.prompt("Enter Your name ");

username =username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
