import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks((prev) => [...prev, book]);

  const updateBook = (updated) => setBooks((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));

  const deleteBook = (id) => setBooks((prev) => prev.filter((b) => b.id !== id));

  return <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>{children}</BookContext.Provider>;
};

export const useBookContext = () => useContext(BookContext);
