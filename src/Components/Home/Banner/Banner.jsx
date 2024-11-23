import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  const handleViewList = () => {
    navigate('/listedBooks')
  }
  return (
    <div className="bg-[#1313130D] lg:rounded-3xl rounded-xl lg:px-28 px-4 lg:py-20 py-4">
          <div className="flex lg:flex-row justify-between items-center lg:gap-20 gap-5">
              {/***** title & view button *****/}
        <div>
                  <h3 className="lg:text-6xl text-2xl text-slate-900 font-bold font-play lg:leading-[90px] lg:mb-12 mb-4">Books to freshen up <br className="hidden lg:block" />your bookshelf</h3>
                  <button onClick={handleViewList} className="bg-[#23BE0A] lg:px-7 px-3 lg:py-4 py-2 rounded-lg text-white lg:text-lg lg:font-semibold font-sans duration-500 transform green-hover border border-transparent">View The List</button>
              </div>
              {/***** book image *****/}
              <div>
                  <img src="https://i.ibb.co/9qGDBkB/pngwing-1.png" alt="banner-book" />
              </div>
      </div>
    </div>
  );
};

export default Banner;
