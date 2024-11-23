import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleBackHomepage = () => {
    navigate("/");
  };
  return (
    <div className="lg:min-h-screen mx-8 mt-36 lg:mt-0 text-center flex flex-col items-center justify-center content-center">
      <h3 className="lg:text-[150px] text-7xl font-extrabold mb-4 lg:mb-12 text-slate-900 opacity-35">
        404
      </h3>
      <h3 className="lg:text-4xl text-3xl font-medium text-slate-900">
        {"Sorry, we couldn't find this page."}
      </h3>
      <p className="lg:w-[480px] text-lg my-6 font-medium text-slate-900 opacity-65">
        {"But don't worry, you can find plenty of other things on our homepage"}
      </p>
      <button
        onClick={handleBackHomepage}
        className="bg-[#23BE0A] px-7 py-[14px] border border-transparent rounded-lg text-white text-lg font-semibold green-hover"
      >
        Back to homepage
      </button>
    </div>
  );
};

export default Error;
