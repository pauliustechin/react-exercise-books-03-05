import { useEffect } from "react";
import BookCard from "../components/BookCard";
import { getAllBooks } from "../services/getService";
import { useContext } from "react";
import { BookContext } from "../store/BookContext";


export const HomePage = () => {

  const [books, setBooks] = useContext(BookContext);

  useEffect(() => {

    async function getBooks(){
      const booksFromDb = await getAllBooks();
      setBooks(booksFromDb)
    }

    getBooks();

  }, [setBooks])

  return (
    <div className="h-full">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] m-10 place-items-center gap-6 overflow-scroll h-full">
        {books && books.map((book) => <BookCard book={book} key={book.id}/>)}
      </div>
    </div>
  );
};
