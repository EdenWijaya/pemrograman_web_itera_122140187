const form = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const categoryInput = document.getElementById("category");
const notesList = document.getElementById("notesList");

class Note {
  constructor(title, content, category) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
    this.category = category;
  }

  getSummary() {
    return `${this.title} (${this.category})`;
  }
}

let notes = [];

async function fetchCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Kuliah", "Kerja", "Pribadi"]);
    }, 1000);
  });
}

async function initCategoryFilterDropdown() {
  const categories = await fetchCategories();
  const select = document.getElementById("filter-category");

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  select.addEventListener("change", function () {
    const selectedCategory = this.value;
    renderFilteredNotes(selectedCategory);
  });
}

function switchPage(pageId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "viewNotes") {
    renderFilteredNotes();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const note = new Note(titleInput.value, contentInput.value, categoryInput.value);

  notes.push(note);
  saveToLocalStorage();
  form.reset();
  alert("Catatan berhasil ditambahkan!");
});

// save local storage
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// ambil data dari local storage
function getNotesFromLocalStorage() {
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
}

function loadFromLocalStorage() {
  notes = getNotesFromLocalStorage();
}

// render notes
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

// card catatan
function createNoteCard(note, index) {
  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded shadow";

  div.innerHTML = `
  <h3 class="text-lg font-bold mb-1">${note.title}</h3>
  <p class="text-gray-700 mb-2">${note.content}</p>
  <div class="mb-2">
    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
      ${note.category}
    </span>
  </div>
  <div class="mt-2 space-x-2">
    <button onclick="editNote(${index})" class="text-sm text-yellow-600 hover:underline hover:text-yellow-700">
      ✏️
    </button>
    <button onclick="deleteNote(${index})" class="text-sm text-red-600 hover:underline hover:text-red-700">
      🗑️
    </button>
  </div>
`;

  return div;
}

// hapus catatan
function deleteNote(index) {
  if (confirm("Yakin ingin menghapus catatan ini?")) {
    notes.splice(index, 1);
    saveToLocalStorage();
    renderFilteredNotes();
  }
}

// edit catatan
function editNote(index) {
  const note = notes[index];
  titleInput.value = note.title;
  contentInput.value = note.content;
  categoryInput.value = note.category;

  // update note
  notes.splice(index, 1);
  saveToLocalStorage();
  switchPage("addNote");
}

loadFromLocalStorage();
initCategoryFilterDropdown();
