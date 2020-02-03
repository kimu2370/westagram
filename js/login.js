const username = document.querySelector('.username');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

let id="",pw=""; 
username.addEventListener('input',(event) => {
   id = event.target.value;
   if(id.length>0 && pw.length>0){
      loginButton.className = "login-button-active";
   }else{
      loginButton.className = "login-button";
   }
});
password.addEventListener('input',(event) => {
   pw = event.target.value;
   if(id.length>0 && pw.length>0){
      loginButton.className = "login-button-active";
   }else{
      loginButton.className = "login-button";
   }
});