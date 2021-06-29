var inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", inputBtnClick);
var newToDo;
var count = 1;
const list = document.getElementById("todoList");
var toDos = [];
const killBtn = document.getElementById("killBtn");
killBtn.addEventListener("click", removeCheck)

function removeCheck() {
    if(confirm("To Do List를 초기화 하시겠습니까?") == true) {
        console.log("데이터를 초기화합니다.");
        localStorage.clear();
        window.location.reload();
    } else {
        return false;
    }
}

/*
function enterKey() {
    if(window.event.keyCode === 13) {
        console.log("press enterKey!");
    }
}*/

function createToDo() {
    newToDo = document.createElement("div");
    var text = document.getElementById("text").value; // get text
    document.getElementById("text").value = '';
    newToDo.innerHTML = text;
    newToDo.setAttribute('id', count);
    newToDo.setAttribute('class', 'toDo');
    return newToDo;
}

function createDelBtn() {
    var newToDoDelBtn = document.createElement('input');
    newToDoDelBtn.setAttribute('type', 'button');
    newToDoDelBtn.setAttribute('value', '✔');
    newToDoDelBtn.setAttribute('id', count++);
    newToDoDelBtn.addEventListener("click", function () {
        var num = newToDoDelBtn.id;
        deleteBtnClick(num);
    });
    return newToDoDelBtn;
}

function inputBtnClick() {
    var toDo = createToDo();
    toDo.appendChild(createDelBtn());
    list.appendChild(toDo);
    toDos.push(toDo);
    console.log("새로 할 일 : " + toDo.innerText + "(이)가 추가되었습니다.")
    saveData(toDo);
}

function deleteBtnClick(num) {
    var toDo = document.getElementById(num);
    list.removeChild(toDo);
    console.log("완료한 일 : " + toDo.innerText + "(이)가 삭제되었습니다.")
    localStorage.removeItem(num);
}

function saveData(data) {
    // save in localstorage
    localStorage.setItem(count - 1, data.innerText);
}

function loadData() {
    var i = 1;
    while (localStorage.getItem(i) != null || localStorage.getItem(i) != undefined) {
        var temp = document.createElement("div");
        var text = localStorage.getItem(i);
        temp.innerHTML = text;
        temp.setAttribute('id', i);
        temp.setAttribute('class', 'toDo');
        i++;
        var loadToDo = temp;
        loadToDo.appendChild(createDelBtn());
        list.appendChild(loadToDo);
    }
}

function init() {
    if (localStorage.getItem('1') != null || localStorage.getItem('1') != undefined) {
        console.log("데이터를 불러옵니다.")
        loadData();
    } else {
        console.log("기존 데이터가 존재하지 않습니다.")
    }
}

init();