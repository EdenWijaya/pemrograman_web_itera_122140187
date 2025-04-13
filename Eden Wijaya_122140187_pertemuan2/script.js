const form = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const categoryInput = document.getElementById("category");
const notesList = document.getElementById("notesList");

// Navigasi halaman
function switchPage(pageId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "viewNotes") {
    renderNotes(); // render ulang setiap buka halaman ini
  }
}

// Data catatan
let notes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const note = {
    id: Date.now(),
    title: titleInput.value,
    content: contentInput.value,
    category: categoryInput.value,
  };

  notes.push(note);
  saveToLocalStorage();
  form.reset();
  alert("Catatan berhasil ditambahkan!");
});

// Simpan & Ambil dari localStorage
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadFromLocalStorage() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }
}

// Tampilkan daftar catatan
function renderNotes() {
  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML = `<p class="text-gray-500">Belum ada catatan.</p>`;
    return;
  }

  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.className = "bg-white p-4 shadow-md rounded border border-gray-200";
    noteCard.innerHTML = `
      <h3 class="text-xl font-semibold">${note.title}</h3>
      <p class="text-sm text-gray-500 mb-1">Kategori: ${note.category}</p>
      <p class="text-gray-700">${note.content}</p>
    `;
    notesList.appendChild(noteCard);
  });
}

loadFromLocalStorage(); // initial load
