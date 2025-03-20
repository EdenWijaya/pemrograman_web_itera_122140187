document.addEventListener("DOMContentLoaded", function () {
    const inputTodo = document.getElementById("input-todo");
    const btnTambahTodo = document.getElementById("btn-tambah-todo");
    const listTodo = document.getElementById("list-todo");

    // Load data dari localStorage saat halaman dimuat
    loadTodos();

    btnTambahTodo.addEventListener("click", function () {
        const todoText = inputTodo.value.trim();
        if (todoText !== "") {
            tambahTodo(todoText);
            inputTodo.value = "";
            simpanTodos();
        }
    });

    function tambahTodo(text) {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 p-2 my-2 rounded";

        const span = document.createElement("span");
        span.textContent = text;
        span.className = "flex-1 cursor-pointer";
        span.addEventListener("click", function () {
            li.classList.toggle("line-through");
            simpanTodos();
        });

        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.className = "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600";
        btnHapus.addEventListener("click", function () {
            li.remove();
            simpanTodos();
        });

        const btnSelesai = document.createElement("button");
        btnSelesai.textContent = "Selesai";
        btnSelesai.className = "bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ml-2";
        btnSelesai.addEventListener("click", function () {
            li.classList.toggle("line-through");
            simpanTodos();
        });

        li.appendChild(span);
        li.appendChild(btnHapus);
        li.appendChild(btnSelesai);
        listTodo.appendChild(li);
    }

    function simpanTodos() {
        const todos = [];
        listTodo.querySelectorAll("li").forEach(li => {
            todos.push({
                text: li.querySelector("span").textContent,
                completed: li.classList.contains("line-through")
            });
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.forEach(todo => {
            tambahTodo(todo.text);
            if (todo.completed) {
                listTodo.lastChild.classList.add("line-through");
            }
        });
    }
});
