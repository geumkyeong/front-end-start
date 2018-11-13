//start...
var input = document.getElementById('memo');
var form = document.querySelector('.new-task');
var list = document.getElementById('list');

var index = 1;

function addTodo(e) {
    var todo = input.value;
    insertTodo(todo);
    removeList(removeMetch);
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
        <label class="text">${todo}</label>
    `;
    
    li.innerHTML = html;
    list.appendChild(li);
    index++;
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);

function removeMetch(e) {
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