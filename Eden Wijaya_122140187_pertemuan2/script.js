const form = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const categoryInput = document.getElementById("category");
const notesList = document.getElementById("notesList");

let notes = [];

// Simulasi ambil kategori (misal dari API nanti)
async function fetchCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Kuliah", "Kerja", "Pribadi"]);
    }, 1000);
  });
}

// Isi dropdown filter kategori + event listener filter
async function initCategoryFilterDropdown() {
  const categories = await fetchCategories();
  const select = document.getElementById("filter-category");

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  // Listener dipasang sekali saja
  select.addEventListener("change", function () {
    const selectedCategory = this.value;
    renderFilteredNotes(selectedCategory);
  });
}

// Navigasi antar halaman
function switchPage(pageId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "viewNotes") {
    renderFilteredNotes(); // Tampilkan semua saat awal buka
  }
}

// Tambah catatan
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

// Simpan ke localStorage
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Ambil semua catatan dari localStorage
function getNotesFromLocalStorage() {
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
}

// Load catatan waktu awal buka
function loadFromLocalStorage() {
  notes = getNotesFromLocalStorage();
}

// Render catatan berdasarkan filter kategori
function renderFilteredNotes(category = "all") {
  const allNotes = getNotesFromLocalStorage();
  const filteredNotes = category === "all" ? allNotes : allNotes.filter((note) => note.category === category);

  const notesContainer = document.getElementById("notesList");
  notesContainer.innerHTML = "";

  filteredNotes.forEach((note, index) => {
    const noteElement = createNoteCard(note, index);
    notesContainer.appendChild(noteElement);
  });
}

// Buat elemen card catatan
function createNoteCard(note, index) {
  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded shadow";

  div.innerHTML = `
    <h3 class="text-lg font-bold">${note.title}</h3>
    <p class="text-gray-700 mt-1">${note.content}</p>
    <span class="text-sm text-blue-600">Kategori: ${note.category}</span>
    <div class="mt-2 space-x-2">
      <button onclick="editNote(${index})" class="text-sm text-yellow-600 hover:underline">Edit</button>
      <button onclick="deleteNote(${index})" class="text-sm text-red-600 hover:underline">Hapus</button>
    </div>
  `;

  return div;
}

// Hapus catatan
function deleteNote(index) {
  if (confirm("Yakin ingin menghapus catatan ini?")) {
    notes.splice(index, 1);
    saveToLocalStorage();
    renderFilteredNotes();
  }
}

// Edit catatan
function editNote(index) {
  const note = notes[index];
  titleInput.value = note.title;
  contentInput.value = note.content;
  categoryInput.value = note.category;

  // Hapus data lama & simpan ulang saat disubmit
  notes.splice(index, 1);
  saveToLocalStorage();
  switchPage("addNote");
}

// Init awal
loadFromLocalStorage();
initCategoryFilterDropdown();
