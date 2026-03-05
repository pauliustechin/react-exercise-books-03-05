import { useForm } from "react-hook-form";
import { useState } from "react";

const SearchBar = ({ setBooks, books }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
    }, 
  });

  const [ error, setError ] = useState("");

  const onSubmit = ({ title }) => {

    const query = title.toLowerCase();

    try {
      const booksFind = books.filter((book) =>
        book.title.toLowerCase().includes(query),
      );

      if (booksFind.length === 0) throw new Error("No books were found!");

      setBooks(booksFind);
      reset();

    } catch (error) {
      console.error(error);
      setError(error.message);
      reset();
    }
  }

  return (
    <div className="w-full p-3 bg-white shadow-2xl rounded-xl">
      <h1 className="mb-4 font-bold text-2xl">Search book by title</h1>
      <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="title"
          className="input-field"
          placeholder="search by title"
          {...register("title", {
            required: "Enter some value",
            minLength: { value: 3, message: "Enter at least 3 characters"}
          })}
          onChange={() => {
            clearErrors("title");
            setError(() => "")
          }}
        />
        <button type="submit" className="my-buttons shadow-2xl">
          Search
        </button>
      </form>
      {error && <p className="error-msg mt-4">{error}</p>}
      {errors?.title && <p className="error-msg mt-4">{errors?.title.message}</p>}
    </div>
  );
};

export default SearchBar;
