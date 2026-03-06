import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
import AddBook from "./pages/AddBook";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "./App.css";
import EditBook from "./components/EditBook";
import { BookContext } from "./store/BookContext";
import { getAllBooks } from "./services/getService";

function App() {

  const [books, setBooks] = useState();

  useEffect(() => 
    async () => {
      const booksFromDb = await getAllBooks();
      setBooks(booksFromDb);
    }
  , []);

  return (
    <>
      <Header />
      <BookContext.Provider value={[books, setBooks]}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/addbook"
            element={<AddBook />}
          >
            <Route path="/addbook/:bookid" element={<EditBook />} />
          </Route>
        </Routes>
      </BookContext.Provider>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
