const BookInfo = ({ book }) => {
  const { title, author, reserved, category } = book;
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
      <button className="my-buttons bg-none bg-red-500">Delete</button>
    </div>
  );
};

export default BookInfo;
