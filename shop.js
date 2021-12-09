const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


// çağır
eventListeners();

function eventListeners() {
    // submit
    form.addEventListener('submit', addNewItem);
    //

    // delete an item
    taskList.addEventListener('click', deleteItem);
    //

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }

    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value = '';

    e.preventDefault();

}

// delete an item
function deleteItem(e) {
    if (confirm('are you sure ?')) {

        if (e.target.className === 'fas fa-times') {                   // class olup olmadıgını soruyoruz
            e.target.parentElement.parentElement.remove();         //elementi silmek için
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('are you sure ?')) {
        
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {                                 // eğer nodetype lar 1e eşitse sil
                item.remove();
                
            }
        });
    }
    e.preventDefault();
}
