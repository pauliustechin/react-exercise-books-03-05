import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllBooks = async () => {

  const { data } = await axios.get(API_URL);

  return data;

}

export const getBookById = async (id) => {

  const { data } = await axios.get(`${API_URL}/${id}`);

  return data;
}
