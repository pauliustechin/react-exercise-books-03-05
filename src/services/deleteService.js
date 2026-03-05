import axios from 'axios';
import { getAllBooks } from './getService';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

const deleteBook = async (id, setBooks) => {
  try {
    const deletedBook = await axios.delete(`${API_URL}/${id}`);
    if(deletedBook){
      const books = await getAllBooks();
      setBooks(books);
      toast.success("Book deleted successfully")
    }
  } catch (error) {
    console.error(error)
  }
}

export default deleteBook;