import deleteBook from "../services/deleteService";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import { useEffect, useState } from "react";
import updateBook from "../services/updateService";
import { useNavigate } from "react-router";

const BookInfo = ({ book }) => {
  const { id, title, author, reserved, category } = book;

  const [isOpen, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

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

  const handleReservation = async () => {
    const data = {
      reserved: reserved ? false : true,
    };

    const updatedBook = await updateBook(id, data);

    if (updatedBook) {
      toast.success("Book updated successfully");
    }
  };

  const handleEdit = () => {
    navigate(`/addbook/${id}`);
  };

  return (
    <>
      <div className="w-full flex gap-4 p-2 rounded shadow-lg bg-gray-400">
        <p className="rounded p-2 w-40 bg-white shadow-2xl">{title}</p>
        <p className="rounded p-2 w-50 bg-white shadow-2xl">{author}</p>
        <p className="rounded p-2 w-30 bg-white shadow-2xl">{category}</p>
        <button
          className={`my-buttons bg-none w-28 ${reserved ? "bg-green-600" : "bg-yellow-500"}`}
          onClick={handleReservation}
        >
          {reserved ? "Grąžinti" : "Rezervuoti"}
        </button>
        <DeleteModal
          isOpen={isOpen}
          setOpen={setOpen}
          setConfirmDelete={setConfirmDelete}
        />
          <button
            className="my-buttons bg-none bg-teal-600 h-full"
            onClick={handleEdit}
          >
            Edit
          </button>
      </div>
      <div id="bottom-div"></div>
    </>
  );
};

export default BookInfo;
