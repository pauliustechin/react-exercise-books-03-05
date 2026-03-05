import { useForm } from "react-hook-form";
import { getAllBooks } from "../services/getService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import updateBook from "../services/updateService";
import { getBookById } from "../services/getService";
import { useParams } from "react-router";

const EditBook = () => {

  const [ categories, setCategories ] = useState([]);
  const navigate = useNavigate();

  const { bookid } = useParams("bookId");

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(
    () => async () => {
      const books = await getAllBooks();
      const tempArr = [];

      books.forEach(book => {
        tempArr.push(book.category)
      })

                                      // kad nesidubliuotu categories
      setCategories((prev) => [...prev, ...Array.from(new Set(tempArr))])
    },
    [],
  );

  useEffect(() => {
    
    const getData = async () => {
      const book = await getBookById(bookid);
      reset(book)
    }
    getData()

  }, [bookid])


  const onSubmit = async (formData) => {

    const updateResponse = await updateBook(bookid, formData);
    if(updateResponse){
      navigate("/")
      toast.success("Book updated successfully")
    }

  };

  return (
    <div className="w-full p-3 bg-white shadow-2xl rounded-xl">
      <h1 className="mb-4 font-bold text-2xl">Edit a book</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] text-left gap-4"
      >
        <div className="flex flex-col">
          <label>*Title:</label>
          <input
            type="text"
            id="title"
            className="input-field"
            {...register("title", {
              required: "Cannot be empty",
              minLength: {
                value: 3,
                message: "Please enter at least 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Too long (max 100) chars",
              },
            })}
            onChange={() => {
              clearErrors("title");
            }}
          />
          {errors.title && <p className="error-msg">{errors.title.message}</p>}
        </div>

        <div className="flex flex-col">
          <label>*Author:</label>
          <input
            type="text"
            id="author"
            className="input-field"
            {...register("author", {
              required: "Cannot be empty",
              pattern: {
                value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
                message: "Please provide full name",
              },
            })}
            onChange={() => {
              clearErrors("author");
            }}
          />
          {errors.author && (
            <p className="error-msg">{errors.author.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>*Category:</label>
          <select
            className="input-field"
            id="category"
            {...register("category", {
              required: "Please pick a category",
            })}
          >
            <option value="">-- Select a category --</option>
            {categories.map((category, index) => {
              return (
                <option value={category} key={index}>
                  {category}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="error-msg">{errors.category.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>*Price:</label>
          <input
            type="number"
            id="price"
            className="input-field"
            {...register("price", {
              required: "Cannot be empty",
              validate: (value) => {
                return value > 0 || "Price must be over 0"
              }
            })}
            onChange={() => {
              clearErrors("price");
            }}
          />
          {errors.price && <p className="error-msg">{errors.price.message}</p>}
        </div>

        <div className="flex flex-col">
          <label>*Cover URL:</label>
          <input
            type="text"
            id="cover"
            className="input-field"
            {...register("cover", {
              required: "Cannot be empty",
              pattern: {
                value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                message: "URL is invalid"
              }
            })}
            onChange={() => {
              clearErrors("cover");
            }}
          />
          {errors.cover && <p className="error-msg">{errors.cover.message}</p>}
        </div>

        <button className="my-buttons h-10 w-38 self-end">Add a book</button>
      </form>
      
    </div>
  );
};

export default EditBook;
