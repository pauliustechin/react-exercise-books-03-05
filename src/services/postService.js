import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const createBook = async (data) => {

  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.log(error)
  }

}

export default createBook;