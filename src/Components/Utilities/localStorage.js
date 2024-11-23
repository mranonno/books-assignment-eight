import { toast } from "react-toastify";
/***** get readBook data form localStorage *****/
const getLocalStorageReadBook = () => {
  const readBooks = localStorage.getItem("read-book");
  if (readBooks) {
    return JSON.parse(readBooks);
  }
  return [];
};

/***** set readBook data in localStorage *****/
const setLocalStorageReadBook = (id) => {
  const storedReadBooks = getLocalStorageReadBook();
  const isExists = storedReadBooks.find((bookId) => bookId === id);
  if (!isExists) {
    toast.success("Added Successfully !!");
    storedReadBooks.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
  } else {
    toast.warn("it's already been added !!");
  }
};
/***** get wishlist data from localStorage *****/
const getLocalStorageWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  if (wishlist) {
    return JSON.parse(wishlist);
  }
  return [];
};

const setLocalStorageWishlist = (id) => {
  const storedWishlist = getLocalStorageWishlist();
  const isExistsWishlist = storedWishlist.find((bookId) => bookId === id);
  const storedReadBooks = getLocalStorageReadBook();
  const isExistsRead = storedReadBooks.find((bookId) => bookId === id);
  if (!isExistsRead && !isExistsWishlist) {
    toast.success("Added Successfully !!");
    storedWishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  } else {
    toast.warn("it's already been added !!");
  }
};

export { setLocalStorageReadBook, setLocalStorageWishlist };
