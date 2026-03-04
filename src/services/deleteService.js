import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return "Book deleted successfully";
  } catch (error) {
    console.error(error)
  }
}