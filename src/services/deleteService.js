import axios from 'axios';
import { getAllBooks } from './getService';

const API_URL = import.meta.env.VITE_API_URL;

const deleteBook = async (id, setBooks) => {
  try {
    const deletedBook = await axios.delete(`${API_URL}/${id}`);
    if(deletedBook){
      const books = await getAllBooks();
      setBooks(books);
    }
  } catch (error) {
    console.error(error)
  }
}

export default deleteBook;