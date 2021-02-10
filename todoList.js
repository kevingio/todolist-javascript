var todoList = [];

var paragraphTag = document.getElementsByTagName('p');

function deleteList(index) {
    todoList.splice(index, 1);
    printData();
}

function printData() {
    var todoListWrapper = document.getElementById("todoListWrapper");
    todoListWrapper.innerHTML = "";

    for (let index = 0; index < todoList.length; index++) {
        var listData = todoList[index];

        var container = document.createElement("div");
        container.className = "list-card";

        var inputWrapper = document.createElement('div');
        inputWrapper.className = "input-wrapper";

        var list = document.createElement('p');
        list.innerText = listData.task + " - " + listData.name;

        inputWrapper.appendChild(list);

        var btnDelete = document.createElement('i');
        btnDelete.className = "btn-delete ti-trash";
        btnDelete.setAttribute("data-index", index);
        btnDelete.addEventListener("click", function () {
            deleteList(index);
        });

        container.appendChild(inputWrapper);
        container.appendChild(btnDelete);
        todoListWrapper.appendChild(container);
    }
}

function addToList() {
    var iptTaskName = document.getElementById("iptTaskName");
    var iptName = document.getElementById("iptName");
    todoList.push({
        task: iptTaskName.value,
        name: iptName.value,
    });

    iptTaskName.value = '';
    iptName.value = "";

    printData();
}
