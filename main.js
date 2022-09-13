/*   How to select things from the DOM */
  
  
  //single element

 /*  console.log(document.getElementById("my-form")); */


  //query selector -- to grab classes , tags 
/*   console.log(document.querySelector(".container")); */




  //multiple element
/* console.log(document.querySelectorAll("items")); */





//loop thru and catch each one of item from items list
/* const items = document.querySelectorAll((".item"));

items.forEach((item)=> console.log(item)); */



//changing this in Dom --User interface -- remove all page users 
/*  const ul = document.querySelector(".items"); */
/* ul.remove();  */
/* ul.lastElementChild.remove(); */
/* ul.firstElementChild.textContent = "Hello"; 
 ul.children[1].innerText = "Brad"; 
 ul.lastElementChild.innerHTML =" <h1>Hello</h1>"; */ 




/* const btn = document.querySelector(".btn"); */
/* btn.style.background = "red" */
// "click"--event we want ....and...function that we wanna run 
//arrow function
//(e) => we need an event 

/* btn.addEventListener("click", (e)=>{ */
    //when we click disapear
    // we need to stop the default behavior , so we need :
   /*  e.preventDefault();
    console.log(e.target);//target the buttom, in console show input of button
}); */


/* console.log(e.target.id); */




//grab from the DOM
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg= document.querySelector(".msg");
const userList= document.querySelector("#users");


myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
if(nameInput.value === "" || emailInput.value === ""){
    msg.classList.add("error");
msg.innerHTML = "Please enter all fields";
setTimeout(()=> msg.remove(),3000);
}else {
   const li = document.createElement("li");
   //add text note with input values
   //add something inside ul that is textNode
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
   
userList.appendChild(li);

//clear THE fields  
nameInput.value = "";
emailInput.value = "";
}
// if reload the page will disapear
//if you wanna save you need nojeJS , phyton, php to connect to database
}
//send request from front end using fetch api or Ajax



