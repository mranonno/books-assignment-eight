import Banner from "./Banner/Banner";
import Books from "./Books/Books";

const Home = () => {
  return (
    <div className="lg:mx-32 mx-4 lg:mt-12 mt-5">
      <Banner></Banner>
      <h3 className="lg:mt-16 mt-5 mb-5 lg:mb-12 text-center text-3xl lg:text-[40px] font-bold font-play text-slate-900">
        Books
      </h3>
      <Books></Books>
    </div>
  );
};

export default Home;
