import { Routes, Route } from "react-router";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
import AddBook from "./pages/AddBook";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getAllBooks } from "./services/getService";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [books, setBooks] = useState();

  useEffect(
    () => async () => {
      const booksFromDb = await getAllBooks();
      setBooks(booksFromDb);
    },
    [],
  );

  return (
    <React.Fragment>
        <Header />
        <Routes>
          <Route
            index
            element={<HomePage books={books} setBooks={setBooks} />}
          ></Route>
          <Route
            path="/addbook"
            element={<AddBook books={books} setBooks={setBooks} />}
          ></Route>
        </Routes>
        <Footer />
        <Toaster position='top-center'/>
    </React.Fragment>
  );
}

export default App;
