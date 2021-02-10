// mendefinisikan sebuah variable
const todoList = [];

// select sebuah element dari HTML
const todoListWrapper = document.getElementById("todoListWrapper");

function addToList() {
    // mengambil input data
    const iptTaskName = document.getElementById("iptTaskName");
    const iptName = document.getElementById("iptName");

    // melakukan pengecekan apakah data kosong atau tidak
    if (iptTaskName.value == "" || iptName.value == "") {
        return;
    }

    // menambahkan data baru ke dalam sebuah array
    todoList.push({
        name: iptName.value,
        task: iptTaskName.value,
    });

    // memngosongkan input value
    iptTaskName.value = "";
    iptName.value = "";

    // render ulang isi list
    renderList();
}

function removeFromList() {
    // mengambil attribute index pada element remove button
    const index = this.getAttribute("index");

    // menghapus data dari list
    todoList.splice(index, 1);

    // render ulang isi list
    renderList();
}

function renderList() {
    // mengosongkan children terlebih dahulu
    todoListWrapper.innerHTML = "";

    // cek apakah list sudah ada isinya atau belum
    if (!todoList.length) {
        // jika list kosong maka akan merender list is empty!
        todoListWrapper.innerHTML = "<p>List is empty!</p>";
        return;
    }

    // looping ke dalam array untuk mendapatkan setiap data di dalam array tsb
    for (let index = 0; index < todoList.length; index++) {
        const list = todoList[index];

        // membuat element untuk list task
        const newListElement = document.createElement("div");
        newListElement.className = "list-card";
        newListElement.innerText = list.name + " - " + list.task;

        // membuat remove button
        const removeButton = document.createElement("span");
        removeButton.innerHTML = '<i class="btn-delete ti-trash"></i>';
        removeButton.setAttribute("index", index);
        removeButton.addEventListener("click", removeFromList);

        // menambahkan remove button  ke dalam list element
        newListElement.appendChild(removeButton);

        // menambahkan list ke dalam collection
        todoListWrapper.appendChild(newListElement);
    }
}

// render isi list
renderList();
