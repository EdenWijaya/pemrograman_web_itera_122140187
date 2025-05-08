import json
from abc import ABC, abstractmethod
import os

# Abstract class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def item_id(self):
        return self._item_id

    @property
    def title(self):
        return self._title

    @abstractmethod
    def to_dict(self):
        pass


# Subclass Book
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[Book] ID: {self._item_id}, Title: {self._title}, Author: {self.__author}")

    def to_dict(self):
        return {
            "type": "Book",
            "item_id": self._item_id,
            "title": self._title,
            "author": self.__author
        }

# Subclass Magazine
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number

    def display_info(self):
        print(f"[Magazine] ID: {self._item_id}, Title: {self._title}, tanggal: {self.__issue_number}")

    def to_dict(self):
        return {
            "type": "Magazine",
            "item_id": self._item_id,
            "title": self._title,
            "tanggal": self.__issue_number
        }

# Class Library
class Library:
    def __init__(self):
        self._collection = []

    def add_item(self, item):
        self._collection.append(item)

    def show_items(self):
        if not self._collection:
            print("Tidak ada item di perpustakaan.")
        else:
            for item in self._collection:
                item.display_info()

    def find_item(self, keyword):
        found = False
        for item in self._collection:
            if keyword.lower() in item.title.lower() or keyword == str(item.item_id):
                item.display_info()
                found = True
        if not found:
            print("Item tidak ditemukan.")

    def remove_item(self, item_id):
        for item in self._collection:
            if item.item_id == item_id:
                self._collection.remove(item)
                print(f"Item dengan ID {item_id} berhasil dihapus.")
                return
        print("Item tidak ditemukan.")

    import os  # Tambahkan di bagian atas file Python-mu (jika belum ada)

    def save_to_file(self, filename):
        folder = "Eden Wijaya_122140187_pertemuan5"
        os.makedirs(folder, exist_ok=True)  # Membuat folder jika belum ada
        filepath = os.path.join(folder, filename)

        data = [item.to_dict() for item in self._collection]
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Data berhasil disimpan ke {filepath}")

    def load_from_file(self, filename):
        folder = "Eden Wijaya_122140187_pertemuan5"
        filepath = os.path.join(folder, filename)

        try:
            with open(filepath, 'r') as f:
                data = json.load(f)
                self._collection.clear()
                for item_data in data:
                    if item_data['type'] == 'Book':
                        self.add_item(Book(item_data['item_id'], item_data['title'], item_data['author']))
                    elif item_data['type'] == 'Magazine':
                        self.add_item(Magazine(item_data['item_id'], item_data['title'], item_data['tanggal']))  # Pastikan 'tanggal' benar
            print(f"Data berhasil dimuat dari {filepath}")
        except FileNotFoundError:
            print(f"File {filepath} tidak ditemukan.")

# Contoh penggunaan
if __name__ == "__main__":
    library = Library()

    # Tambah item
    library.add_item(Book(1, "Dilan 90", "Agung"))
    library.add_item(Magazine(2, "Mawang 25", "April 2025"))

    print("\n=== Daftar Item Awal ===")
    library.show_items()

    # Simpan ke file
    library.save_to_file("perpustakaan")

    # Hapus item
    library.remove_item(1)

    print("\n=== Daftar Setelah Penghapusan ===")
    library.show_items()

    # Load dari file
    library.load_from_file("perpustakaan")

    print("\n=== Daftar Setelah Load dari File ===")
    library.show_items()
