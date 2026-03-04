const BookCard = ({ book }) => {
  const { title, cover, author, reserved, price } = book;

  return (
    <div className="w-50 shadow-2xl flex flex-col items-center p-4 rounded-2xl bg-white">
      <img src={cover} alt="book cover" className="h-48" />
      <p className="font-bold">{title}</p>
      <p>{author}</p>
      <p>{price} $</p>
      <p className={`font-bold ${reserved ? "text-red" : "text-green-600"}`}>
        {reserved ? "Nėra" : "Turime"}
      </p>
    </div>
  );
};

export default BookCard;
