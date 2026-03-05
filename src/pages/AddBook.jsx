import SearchBar from "../components/SearchBar";
import BooksInfo from "../components/BookInfo";
import CreateBook from "../components/CreateBook";
import { Outlet } from "react-router";
import { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";

const AddBook = ({ books, setBooks }) => {

  const [createBook, setCreateBook] = useState(true);

  return (
    <div className="h-full flex flex-col gap-8 overflow-scroll p-4">
      <div className="mt-5 flex flex-col gap-5">
        <SearchBar setBooks={setBooks} books={books}></SearchBar>
      </div>
      <div>
        {createBook && <CreateBook />}
      </div>
      <Outlet></Outlet>
      <div className="flex flex-col gap-4 bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold">Library: </h1>
        {books &&
          books.map((book) => (
            <BooksInfo
              key={book.id}
              book={book}
              setCreateBook={setCreateBook}
            />
          ))}
      </div>
      
    </div>
  );
};

export default AddBook;
