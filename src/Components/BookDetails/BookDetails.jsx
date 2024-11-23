import { useLoaderData, useParams } from "react-router-dom";
import {
  setLocalStorageReadBook,
  setLocalStorageWishlist,
} from "../Utilities/localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const pageId = useParams();
  const id = parseInt(pageId.id);
  const book = books.find((book) => book.bookId === id);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    yearOfPublishing,
    publisher,
    rating,
    totalPages,
  } = book;
  const handleSetLocalStorageReadBook = () => {
    setLocalStorageReadBook(id);
  };
  const handleSetLocalStorageWishlist = () => {
    setLocalStorageWishlist(id);
  };
  return (
    <div className="lg:mt-12 mt-8 lg:mb-40 mb-5 mx-4 lg:mx-32 grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-5 font-sans">
      {/***** Book Details Pic section *****/}
      <div className="bg-[#1313130D] flex justify-center p-4 lg:p-6 rounded-2xl">
        <img
          className="hover:scale-105 duration-500 transform"
          src={image}
          alt=""
        />
      </div>
      {/***** Book details section *****/}
      <div>
        <h3 className="text-[#131313] font-bold text-3xl lg:text-[40px] font-play">
          {bookName}
        </h3>
        <p className="lg:my-5 my-3 text-xl font-medium text-[#131313CC]">
          By : {author}
        </p>
        <hr className="border-[#13131326]" />
        <p className="text-xl font-medium text-[#131313CC] my-4">{category}</p>
        <hr className="border-[#13131326]" />
        <p className="text-[#131313B3] leading-[26px] mt-4 lg:mt-6 mb-5 lg:mb-12">
          <span className="text-[#131313] font-bold leading-[26px]">
            Review :{" "}
          </span>
          {review}
        </p>
        <h4 className="flex items-center gap-5 font-bold mb-4 lg:mb-6">
          Tag
          <span>
            <div className="flex gap-2 lg:gap-3">
              {tags.map((tag, index) => (
                <h3
                  className="px-4 py-2 rounded-[30px] text-[#23BE0A] bg-[#23BE0A0D] font-medium"
                  key={index}
                >
                  #{tag}
                </h3>
              ))}
            </div>
          </span>
        </h4>
        <hr className="border-[#13131326]" />
        <div className="lg:space-y-3 space-y-2 lg:mt-6 mt-4 mb-4 lg:mb-8">
          <div className="flex items-center">
            <p className="lg:w-48 w-44 text-[#131313B3] leading-[26px]">
              Number of Pages: </p>
            <p className="text-[#131313] font-semibold leading-[26px]">
              {totalPages}
            </p>
          </div>
          <div className="flex items-center">
            <p className="lg:w-48 w-44 text-[#131313B3] leading-[26px]">Publisher: </p>
            <p className="text-[#131313] font-semibold leading-[26px]">
              {publisher}
            </p>
          </div>
          <div className="flex items-center">
            <p className="lg:w-48 w-44 text-[#131313B3] leading-[26px]">
              Year of Publishing:
            </p>
            <p className="text-[#131313] font-semibold leading-[26px]">
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center">
            <p className="lg:w-48 w-44 text-[#131313B3] leading-[26px]">Rating:</p>
            <p className="text-[#131313] font-semibold leading-[26px]">
              {rating}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSetLocalStorageReadBook}
            className="bg-[#23BE0A] lg:px-7 px-4 py-2 lg:py-[14px] border border-transparent duration-500 transform rounded-lg text-white lg:text-lg font-medium lg:font-semibold green-hover"
          >
            Read
          </button>
          <button
            onClick={handleSetLocalStorageWishlist}
            className="bg-[#59C6D2] lg:px-7 px-4 py-2 lg:py-[14px] border border-transparent duration-500 transform rounded-lg text-white lg:text-lg teal-hover lg:font-semibold font-medium"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default BookDetails;
