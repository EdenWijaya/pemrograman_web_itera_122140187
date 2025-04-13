const form = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const categoryInput = document.getElementById("category");
const notesList = document.getElementById("notesList");

// Array untuk menyimpan catatan
let notes = [];

// Event saat form disubmit
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
  renderNotes();

  // Reset form
  form.reset();
});

// Simpan ke localStorage
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Ambil dari localStorage saat pertama kali halaman dimuat
function loadFromLocalStorage() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    renderNotes();
  }
}

// Tampilkan catatan
function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.className = "bg-white p-4 shadow-md rounded border border-gray-200";
    noteCard.innerHTML = `
      <h2 class="text-xl font-semibold">${note.title}</h2>
      <p class="text-sm text-gray-500 mb-2">Kategori: ${note.category}</p>
      <p class="text-gray-700">${note.content}</p>
    `;
    notesList.appendChild(noteCard);
  });
}

loadFromLocalStorage();
