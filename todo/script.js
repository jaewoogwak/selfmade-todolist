var inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", inputBtnClick);

// get text

todoText = text.value;

var count = 1;
var list = document.getElementById("todoList");

/*
function enterKey() {
    if(window.event.keyCode === 13) {
        console.log("press enterKey!");
    }
}*/


function inputBtnClick() {
    var newToDo = document.createElement("li"); 
    var text = document.getElementById("text").value; // get text
    document.getElementById("text").value='';
    newToDo.innerHTML = text;
    newToDo.setAttribute('id', count++);
    newToDo.setAttribute('class', 'toDo');
    list.appendChild(newToDo);
}


var deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", deleteBtnClick);
function deleteBtnClick() {
    var toDo = document.getElementById(count-1);
    console.log(count);
    list.removeChild(toDo);
    count--;
}