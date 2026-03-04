import { useForm } from "react-hook-form"

const CreateBook = () => {

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm();

  return (
    <div className="w-full p-7 bg-white shadow-2xl rounded-xl">
      <form>
        <label htmlFor="title"> Title:
          <input 
            type="text"
            id="title"
            className="input-field"
            {...register("title", {
              minLength: {value: 5, message: "Please enter at least 5 characters"}
            }
            )}
            
            />
        </label>
          <button className="my-button">Add book</button>
      </form>

    </div>
  )
}

export default CreateBook