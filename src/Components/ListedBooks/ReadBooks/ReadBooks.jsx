import { useContext } from "react";
import ReadBook from "./ReadBook/ReadBook";
import { AddContext } from "../ListedBooks";
import { LuFileX } from "react-icons/lu";

const ReadBooks = () => {
  const { displayReadBooks } = useContext(AddContext);
  return (
    <div>
      {displayReadBooks.length > 0 ? (
        displayReadBooks.map((readBook) => (
          <ReadBook readBook={readBook} key={readBook.bookId}></ReadBook>
        ))
      ) : (
        <div className="flex flex-col items-center mt-32">
          <div>
            < LuFileX  className="text-5xl text-slate-900 opacity-30"/>
          </div>
          <h3 className="text-2xl text-slate-900 mt-4 opacity-30 font-medium">
            There are Currently no books!
          </h3>
        </div>
      )}
    </div>
  );
};

export default ReadBooks;
