import { createContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet, useLoaderData } from "react-router-dom";
export const AddContext = createContext(null);

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [dropdownText, setDropdownText] = useState(0);

  const handleDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  {
    /***** Filtering System *****/
  }

  const allBooks = useLoaderData();
  const [booksId, setBooksId] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);
  {
    /***** for wishlist *****/
  }
  const [filterWishlist, setFilterWishlist] = useState([]);
  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

  {
    /***** for wishlist section *****/
  }
  useEffect(() => {
    const storedWishlistsStr = localStorage.getItem("wishlist");
    const storedWishlists = JSON.parse(storedWishlistsStr);
    if (allBooks.length > 0) {
      const wishlistsBooks = allBooks.filter((book) =>
        storedWishlists?.includes(book.bookId)
      );
      setFilterWishlist(wishlistsBooks);
      setDisplayWishlistBooks(wishlistsBooks);
    }
  }, [allBooks]);

  {
    /***** for read books section *****/
  }
  useEffect(() => {
    const storedReadBooksStr = localStorage.getItem("read-book");
    const storedReadBooks = JSON.parse(storedReadBooksStr);
    if (allBooks.length > 0) {
      const readBooks = allBooks.filter((book) =>
        storedReadBooks?.includes(book.bookId)
      );
      setBooksId(readBooks);
      setDisplayReadBooks(readBooks);
    }
  }, [allBooks]);

  {
    /***** handle sorting function for both *****/
  }
  const handleSort = (value) => {
    if (value === "rating") {
      const sortReadBooks = booksId.sort((a, b) => b.rating - a.rating);
      const sortWishlistBooks = filterWishlist.sort(
        (a, b) => b.rating - a.rating
      );
      setDisplayReadBooks([...sortReadBooks]);
      setDisplayWishlistBooks([...sortWishlistBooks]);
      handleDropdown(!dropdownMenu);
      setDropdownText(1);
    } else if (value === "page") {
      const sortReadBooks = booksId.sort((a, b) => b.totalPages - a.totalPages);
      const sortWishlistBooks = filterWishlist.sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setDisplayReadBooks([...sortReadBooks]);
      setDisplayWishlistBooks([...sortWishlistBooks]);
      handleDropdown(!dropdownMenu);
      setDropdownText(2);
    } else if (value === "year") {
      const sortReadBooks = booksId.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      const sortWishlistBooks = filterWishlist.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplayReadBooks([...sortReadBooks]);
      setDisplayWishlistBooks([...sortWishlistBooks]);
      handleDropdown(!dropdownMenu);
      setDropdownText(3);
    }
  };

  return (
    <div className="lg:mx-32 mx-4 font-sans text-center">
      <h3 className="text-3xl font-bold bg-[#1313130D] py-4 lg:py-8 lg:rounded-2xl rounded-lg my-5 lg:my-8">
        Books
      </h3>

      {/***** custom dropdown *****/}
      <div className="flex relative flex-col items-center">
        <button
          onClick={handleDropdown}
          className="bg-[#23BE0A] w-48 py-3 rounded-lg text-lg font-semibold border border-transparent text-white z-10 green-hover transform duration-500"
        >
          {dropdownText === 0 ? <h3 className="flex justify-center items-center gap-5">Sort By<span>
            <IoIosArrowDown className="text-2xl" />
          </span></h3> : dropdownText===1?'Rating':dropdownText===2?'Number of Pages':'Published Year'}
          
        </button>
        <div
          className={
            dropdownMenu
              ? "bg-gray-100 transform duration-500 rounded-b-lg w-48 absolute top-[50px]"
              : "hidden"
          }
        >
          <ul className="my-3 px-2">
            <li
              onClick={() => handleSort("rating")}
              className="text-[#131313CC] transform text-lg duration-500 hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
            >
              Rating
            </li>
            <li
              onClick={() => handleSort("page")}
              className="text-[#131313CC] transform text-lg duration-500 hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
            >
              Number of Pages
            </li>
            <li
              onClick={() => handleSort("year")}
              className="text-[#131313CC] transform text-lg duration-500 hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
            >
              Published Year
            </li>
          </ul>
        </div>
      </div>
      {/***** Tab option *****/}
      <div className="flex justify-start mt-12">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`text-lg px-4 py-3 ${
            tabIndex === 0
              ? "border border-b-0 rounded-t-lg text-[#131313CC]"
              : "border-b text-[#13131380]"
          }`}
        >
          Read Books
        </Link>
        <Link
          to={"wishlists"}
          onClick={() => setTabIndex(1)}
          className={`text-lg px-5 py-3 ${
            tabIndex === 1
              ? "border border-b-0 rounded-t-lg text-[#131313CC]"
              : "border-b text-[#13131380]"
          }`}
        >
          Wishlist
        </Link>
        <div className="border-b flex-grow"></div>
      </div>
      {/***** wishlist & read books *****/}
      <div>
        <AddContext.Provider value={{ displayReadBooks, displayWishlistBooks }}>
          <Outlet></Outlet>
        </AddContext.Provider>
      </div>
    </div>
  );
};

export default ListedBooks;
