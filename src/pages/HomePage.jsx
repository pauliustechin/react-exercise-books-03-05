import { useEffect } from "react";
import BookCard from "../components/BookCard";
import { getAllBooks } from "../services/getService";

export const HomePage = ({ books, setBooks }) => {

  useEffect(() => async () => {
    const allBooks = await getAllBooks();
    setBooks(allBooks);
  }, [])

  return (
    <div className="h-full">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] m-10 place-items-center gap-6">
        {books && books.map((book) => <BookCard book={book} key={book.id}/>)}
      </div>
    </div>
  );
};
