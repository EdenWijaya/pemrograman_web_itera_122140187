import { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import PropTypes from "prop-types";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage("books", []);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>{children}</BookContext.Provider>;
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBookContext = () => useContext(BookContext);
