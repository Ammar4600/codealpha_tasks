let todo = JSON.parse(localStorage.getItem("todo")) || [];

let getinput = document.querySelector(".input-feild");
let addbtn   = document.querySelector(".btn");
let list     = document.querySelector(".list");
let delbtn   = document.querySelector(".delete");
let count    = document.querySelector(".count");
let scroll    = document.querySelector(".scroll");
let temp = 0;
displaytask();
document.addEventListener("DOMContentLoaded",()=>{

    addbtn.addEventListener("click" , addtask);
    getinput.addEventListener("keydown",(e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            addtask();
        }
    })
 
    delbtn.addEventListener("click" , deletetask);
    
  
})



function addtask(params) {
    let newtask = getinput.value.trim();
    if(newtask !== ""){
       counter();
        todo.push({
            value: newtask,
        });
    }
    savetolocalstorage();
    getinput.value = ""; 
    displaytask();
}

function displaytask(params) {
    scroll.innerHTML = "";
    todo.forEach((elem ,index) => {
        const p = document.createElement("p");
        p.classList.add("list-item");
        p.innerHTML = `  <li class="list" >
        <input type="checkbox" name="" id="items">
        <p>${elem.value}</p>
        <p class="cross">⨉</p>
    </li>
        `
        p.addEventListener("click", () => {
            todo.splice(index,1 );
            displaytask();
            savetolocalstorage();
            counterminus1();
        });
    
       scroll.appendChild(p);
    });
    savetolocalstorage();
    
}

function savetolocalstorage(params) {
    localStorage.setItem("todo", JSON.stringify(todo))
}

function deletetask() {
    todo = [];
    displaytask();
    let zero =0;
    counterminus(zero)
}
function counter(params) {
    
    temp = temp + 1;
    count.innerHTML = temp;
}
function counterminus( zero) {
    temp = zero;
    count.innerHTML = temp;
    if(temp < 0){
        temp = 0;
    }
    
}
function counterminus1() {
    temp =temp - 1;
    count.innerHTML = temp;
    if(temp < 0){
        temp = 0;
    }
    
}

displaytask();


