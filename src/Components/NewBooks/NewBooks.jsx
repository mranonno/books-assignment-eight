import { useLoaderData } from "react-router-dom";
import NewBook from "./NewBook/NewBook";

const NewBooks = () => {
  const newBooks = useLoaderData();
  return (
    <div className="mx-4 lg:mx-32">
      <h3 className="lg:text-[40px] text-3xl text-slate-900 text-center font-play mt-8">Newly Added Books</h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-6 lg:mb-32 my-5 lg:my-8">
        {newBooks.slice(0, 3).map((book) => (
          <NewBook book={book} key={book.bookId}></NewBook>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
