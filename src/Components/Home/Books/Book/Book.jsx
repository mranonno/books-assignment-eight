import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Book = ({ book }) => {
  const navigate = useNavigate();
  const { bookId, bookName, author, image, category, tags, rating } = book;
  const handleBookDetails = () => {
    navigate(`/bookDetails/${bookId}`)
  }
  return (
    <div>
      <div onClick={handleBookDetails} className="bg-base-100 lg:p-6 p-4 lg:rounded-2xl rounded-xl border-2 font-sans hover:scale-105 hover:cursor-pointer transform duration-500">
        <div className="bg-[#F3F3F3] flex justify-center items-center rounded-2xl lg:p-5 p-2 lg:max-h-60 mb-4 lg:mb-6">
          <div>
            <img className="lg:size-48 size-52" src={image} alt={bookName} />
          </div>
        </div>
        <div className="flex gap-3">
          {tags.map((tag, index) => (
            <h3
              className="px-4 py-2 lg:rounded-[30px] rounded-3xl text-[#23BE0A] bg-[#23BE0A0D] font-medium"
              key={index}
            >
              {tag}
            </h3>
          ))}
        </div>
        <div>
          <h2 className="text-[#131313] text-2xl font-bold font-play lg:my-4 my-2">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-medium">By : {author}</p>
          <hr className="border-dashed lg:my-5 my-3 border-[#13131326]" />
          <div className="flex justify-between">
            <p className="text-[#131313CC] font-medium">{category}</p>
            <div className="flex items-center gap-2">
              <p className="text-[#131313CC] font-medium">{rating}</p>
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
