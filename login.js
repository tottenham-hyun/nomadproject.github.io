const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");

const new_text1 = document.querySelector("#player");
const new_text2 = document.querySelector("#name");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username"; 


function onLoginSubmit(event){
  event.preventDefault(); 
  loginForm.classList.add(HIDDEN_CLASSNAME) 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username) 

  paintGreetings(username);
}

function paintGreetings(username){ 
  new_text1.innerText = "";  
  new_text2.innerText = "";  
  greeting.innerText=`Man Of The Match 
   ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername= localStorage.getItem(USERNAME_KEY); 
if(savedUsername ===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit",onLoginSubmit)
}else{
  paintGreetings(savedUsername);
}




