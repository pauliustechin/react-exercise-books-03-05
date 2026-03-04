import SearchBar from "../components/SearchBar";
import BooksInfo from "../components/BookInfo";
import CreateBook from "../components/CreateBook";

const AddBook = ({ books, setBooks }) => {

  return (
    <div className="h-full flex flex-col gap-8 overflow-scroll p-4">
      <div className="mt-5 flex flex-col gap-5">
        <SearchBar setBooks={setBooks} books={books}></SearchBar>
      </div>
      <div>
        <CreateBook />
      </div>
      <div className="flex flex-col gap-4">
        {books && books.map((book) => <BooksInfo key={book.id} book={book}/>)}
      </div>
    </div>
  );
};

export default AddBook;
