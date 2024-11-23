import PropTypes from "prop-types";
import { LuFileBarChart } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Wishlist = ({ wishlist }) => {
  const navigate = useNavigate();

  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    totalPages,
    rating,
    category,
    publisher,
  } = wishlist;
  const handleBookDetails = () => {
    navigate(`/bookDetails/${bookId}`);
  };
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-6 gap-4 text-start font-sans border rounded-2xl lg:p-6 p-4 mt-4 lg:mt-8">
      <div className="bg-[#F3F3F3] flex justify-center items-center rounded-2xl lg:p-7 w-full lg:w-auto">
        <div className="overflow-hidden">
          <img
            className="lg:size-48 h-44 hover:scale-110 transform duration-500"
            src={image}
            alt="Shoes"
          />
        </div>
      </div>
      <div className="lg:flex-grow">
        <h3 className="text-2xl font-bold font-play text-[#131313]">
          {bookName}
        </h3>
        <p className="text-[#131313CC] font-medium py-2 lg:py-4">
          By : {author}
        </p>
        <h4 className="flex lg:items-center lg:gap-5 gap-2 font-bold">
          Tag
          <span>
            <div className="flex flex-col items-start lg:flex-row gap-3 lg:items-center">
              {tags.map((tag, index) => (
                <h3
                  className="lg:px-4 px-2 lg:py-2 rounded-2xl lg:rounded-[30px] text-[#23BE0A] bg-[#23BE0A0D] font-normal lg:font-medium"
                  key={index}
                >
                  #{tag}
                </h3>
              ))}
              <span className="flex font-normal gap-2 items-center text-[#131313CC]">
                <CiLocationOn />
                <h3>Year of Publishing: {yearOfPublishing}</h3>
              </span>
            </div>
          </span>
        </h4>
        <div className="flex lg:flex-row flex-col lg:gap-5 text-[#13131399] lg:my-4 my-2">
          <div className="flex items-center gap-3">
            <IoPeopleOutline />
            <h3>Publisher: {publisher}</h3>
          </div>
          <div className="flex items-center gap-3">
            <LuFileBarChart />
            <h3>Page {totalPages}</h3>
          </div>
        </div>
        <hr className="flex-grow" />
        <div className="flex flex-col lg:flex-row items-center lg:gap-3 mt-4">
          <div className="flex gap-3">
            <h3 className="lg:py-2 lg:px-5 px-2 py-1 rounded-2xl bg-[#328EFF26] lg:rounded-[30px] text-[#328EFF]">
              Category: {category}
            </h3>
            <h3 className="lg:py-2 lg:px-5 px-2 py-1 rounded-2xl bg-[#FFAC3326] lg:rounded-[30px] text-[#FFAC33]">
              Rating: {rating}
            </h3>
          </div>
          <div className="mt-2 lg:mt-0">
            <button
              onClick={handleBookDetails}
              className="lg:py-2 lg:px-5 px-2 py-1 green-hover border border-transparent bg-[#23BE0A] lg:text-lg transform duration-500 font-medium rounded-2xl lg:rounded-[30px] text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Wishlist.propTypes = {
    wishlist: PropTypes.object,
};

export default Wishlist;
