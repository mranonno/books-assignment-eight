import { useContext } from "react";
import Wishlist from "./Wishlist/Wishlist";
import { AddContext } from "../ListedBooks";
import { LuFileX } from "react-icons/lu";

const Wishlists = () => {
  const { displayWishlistBooks } = useContext(AddContext);
  return (
    <div>
      {displayWishlistBooks.length > 0
        ? displayWishlistBooks.map((wishlist) => (
            <Wishlist wishlist={wishlist} key={wishlist.bookId}></Wishlist>
          ))
        : <div className="flex flex-col items-center mt-32">
        <div>
          < LuFileX  className="text-5xl text-slate-900 opacity-30"/>
        </div>
        <h3 className="text-2xl text-slate-900 mt-4 opacity-30 font-medium">
          There are Currently no books!
        </h3>
      </div>}
    </div>
  );
};

export default Wishlists;
