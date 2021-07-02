var inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", inputBtnClick);
var newToDo;
var count = 1;
const list = document.getElementById("todoList");
var toDos = [];
var savedDataCount = 1;
const killBtn = document.getElementById("killBtn");
killBtn.addEventListener("click", removeCheck)

function removeCheck() {
    if (confirm("Do you wanna RESET TO DO LIST?") == true) {
        console.log("데이터를 초기화합니다.");
        localStorage.clear();
        localStorage.setItem('sdCount', 0);
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
    console.log("createToDo 실행!")
    newToDo = document.createElement("div");
    var text = document.getElementById("text").value; // get text
    document.getElementById("text").value = '';
    newToDo.innerHTML = text + ' ';
    newToDo.setAttribute('id', savedDataCount++);
    newToDo.setAttribute('class', 'toDo');
    return newToDo;
}

function createDelBtn(todo_id) {
    console.log("createDelBtn 실행!")
    var newToDoDelBtn = document.createElement('input');
    newToDoDelBtn.setAttribute('type', 'button');
    newToDoDelBtn.setAttribute('value', '✔');
    newToDoDelBtn.setAttribute('id', todo_id);
    newToDoDelBtn.setAttribute('class', 'delBtn');
    newToDoDelBtn.addEventListener("click", function () {
        var num = newToDoDelBtn.id;
        deleteBtnClick(num);
    });
    return newToDoDelBtn;
}

function inputBtnClick() {
    console.log("inputBtnClick 실행!")
    var toDo = createToDo();
    //console.log(toDo.id);
    toDo.appendChild(createDelBtn(toDo.id));
    list.appendChild(toDo);
    toDos.push(toDo);
    localStorage.setItem('sdCount', savedDataCount);
    console.log('sdCount : ' ,savedDataCount);
    console.log("새로 할 일 : " + toDo.innerText + "(이)가 추가되었습니다.")
    saveData(toDo);
}

function deleteBtnClick(num) {
    var toDo = document.getElementById(num);
    console.log(toDo);
    list.removeChild(toDo);
    console.log("완료한 일 : " + toDo.innerText + "(이)가 삭제되었습니다.")
    localStorage.removeItem(num);

}

function saveData(data) {
    console.log("saveData 실행!")
    // save in localstorage
    localStorage.setItem(data.id, data.innerText);
    localStorage.setItem('sdCount', savedDataCount-1);
}

function loadData() {
    var i = 1;
    for (i = 1; i <=localStorage.getItem('sdCount'); i++) {
        if (localStorage.getItem(i) != null) {
            var temp = document.createElement("div");
            var text = localStorage.getItem(i);
            temp.innerHTML = text;
            temp.setAttribute('id', i);
            temp.setAttribute('class', 'toDo');
            var loadToDo = temp;
            loadToDo.appendChild(createDelBtn(loadToDo.id));
            list.appendChild(loadToDo);
            console.log(loadToDo.id + " 로딩!");
            toDos.push(loadToDo);

        } else {
            console.log(i + '번째 item이 존재하지 않습니다!');
        }
    }
    savedDataCount = localStorage.getItem('sdCount')
    savedDataCount++;
    //localStorage.setItem('sdCount', savedDataCount);
}


function init() {
    if (localStorage.length > 1) {
        console.log("데이터를 불러옵니다.")
        loadData();
    } else {
        console.log("기존 데이터가 존재하지 않습니다.")
    }
}

init();

// # 1
// 새로고침 후, 기존 to do list를 load하면 할 일의 완료버튼을 눌러도 작동이 되지 않는 현상 발생.
// 이유 : createToDo()로 만든 todo.id와 createDelBtn()으로 만든 delBtn.id가 일치하지 않았음.
// todo.id와 delBtn.id가 다르니 delBtn.id로 todo를 삭제하는 event를 delBtn에 할당해주어도 작동하지 않았음.
// 해결 방법 : createDelBtn()에 parameter로 todo.id를 넘겨주고 delBtn을 생성할때 setAttribute로 id값을 넘겨받은 todo.id로 설정해줌.
// 결국 todo.id와 delBtn.id가 일치

// # 2
// 입력 버튼으로 to do를 등록할 땐 정상 작동,
// enter key를 눌러서 to do를 등록할 때 오류 발생.
// 똑같은 함순데 왜? 로직 문제일수도?

// # 3 새로고침 후 todo 등록하면 sdCount 값 올라가지 않는 현상
// 기존에는 localStorage에 key : count-1, value : data.innerText로 등록했음
// 그래서 todo의 id값과 count-1의 값이 일치하지 않는 경우가 있었음.
// 또한 key와 value가 일치하지 않는 경우도 있었음.
// localStorage에 key : data.id, value : data.innerText를 등록함으로써
// key, value를 같이 묶어줌.
// 또한 새로고침 후 기존 data를 load할 때, sdCount가 localStorage에 저장된 값을 그대로 불러와서
// todo를 등록해도 sdCount가 1중첩되는 현상이 있었음. 그래서 localStorage에서 값을 불러와도
// 값 하나가 빠지게 되는 현상이 발생.
// load함수를 호출할때 sdCount를 1증가 시켜주는 방법으로 처리.
 