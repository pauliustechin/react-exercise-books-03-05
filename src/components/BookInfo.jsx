import deleteBook from "../services/deleteService";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import { useEffect, useState } from "react";

const BookInfo = ({ book }) => {
  const { id, title, author, reserved, category } = book;

  const [isOpen, setOpen] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {

    const del = () => {
      if (confirmDelete) {
        deleteBook(id);
        toast.success("Book deleted successfully");
        setConfirmDelete(false);
      }
    };

    del();

  }, [confirmDelete]);

  return (
    <div className="w-full flex gap-4 p-2 rounded shadow-lg bg-gray-400">
      <p className="rounded p-2 w-40 bg-white shadow-2xl">{title}</p>
      <p className="rounded p-2 w-50 bg-white shadow-2xl">{author}</p>
      <p className="rounded p-2 w-30 bg-white shadow-2xl">{category}</p>
      <button
        className={`my-buttons bg-none w-28 ${reserved ? "bg-green-600" : "bg-yellow-500"}`}
      >
        {reserved ? "Grąžinti" : "Rezervuoti"}
      </button>
      <DeleteModal
        isOpen={isOpen}
        setOpen={setOpen}
        setConfirmDelete={setConfirmDelete}
      />
    </div>
  );
};

export default BookInfo;
