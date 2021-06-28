var inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", inputBtnClick);
var newToDo;
var count = 1;
const list = document.getElementById("todoList");

/*
function enterKey() {
    if(window.event.keyCode === 13) {
        console.log("press enterKey!");
    }
}*/

function createToDo() {
    newToDo = document.createElement("div");
    var text = document.getElementById("text").value; // get text
    document.getElementById("text").value='';
    newToDo.innerHTML = text;
    newToDo.setAttribute('id', count);
    newToDo.setAttribute('class', 'toDo');
    return newToDo;
}

function createDelBtn() {
    var newToDoDelBtn = document.createElement('input');
    newToDoDelBtn.setAttribute('type', 'button');
    newToDoDelBtn.setAttribute('value', '완료');
    newToDoDelBtn.setAttribute('id', count++);
    newToDoDelBtn.addEventListener("click", function() {
        var num = newToDoDelBtn.id;
        deleteBtnClick(num);
    });
    return newToDoDelBtn;
}

function inputBtnClick() {
    var toDo = createToDo();
    toDo.appendChild(createDelBtn());
    list.appendChild(toDo);
}

function deleteBtnClick(num) {
    var toDo = document.getElementById(num);
    console.log(num);
    list.removeChild(toDo);
}
