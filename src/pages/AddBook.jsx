import SearchBar from "../components/SearchBar";
import BooksInfo from "../components/BookInfo";
import CreateBook from "../components/CreateBook";
import { Outlet } from "react-router";
import { useContext } from "react";
import { BookContext } from "../store/BookContext";

const AddBook = () => {
  
  const [books, setBooks] = useContext(BookContext);

  return (
    <div className="h-full flex flex-col gap-8 overflow-scroll p-4">
      <div className="mt-5 flex flex-col gap-5">
        <SearchBar setBooks={setBooks} books={books}></SearchBar>
      </div>
      <div>
        <CreateBook books={books} setBooks={setBooks}/>
      </div>
      <Outlet />
      <div className="flex flex-col gap-4 bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold">Library: </h1>
        {books &&
          books.map((book) => (
            <BooksInfo
              key={book.id}
              book={book}
              setBooks={setBooks}
            />
          ))}
      </div>
      
    </div>
  );
};

export default AddBook;
