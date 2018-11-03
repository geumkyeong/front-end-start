//start...
var input = document.getElementById('memo');
var form = document.querySelector('.new-task');
var list = document.getElementById('list');

var index = 1;

function addTodo(e) {
    var todo = input.value;
    insertTodo(todo);
    removeList(board);
    input.value = '';
    e.preventDefault();
}

function insertTodo(todo){
    var li = document.createElement('li');
    li.id = `${index}`;
    li.className = "";
    var html = `
        <button class="delete" id="${index}">×</button>
        <input type="checkbox" class="toggle-checked">
        <span class="text">${todo}</span>
    `;
    
    li.innerHTML = html;
    list.appendChild(li);
    index++;
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);

function board(e) {
    var lis = document.querySelectorAll('li');
    // console.log(e.target.id);
    lis.forEach(function(li){
        if(li.id == e.target.id)
            li.parentNode.removeChild(li);
    });
    
    
}

function removeList(callback) {
    var btns = document.querySelectorAll('.delete');

    btns.forEach(function(btn){ 
        btn.addEventListener('click', function(e){
            callback(e)
        })
    });
}


var checks = document.querySelectorAll('.toggle-checked');
checks.forEach(function(check){
    check.addEventListener('check', function(){
        check.checked = true;
        var span = document.querySelector('span');
        if(check.checked == true) span.style.textDecoration = 'line-through';
        else span.style.textDecoration = 'none';
    })
});

