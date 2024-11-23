import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('./books.json')
            .then(res => setBooks(res.data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-6 lg:mb-32 mb-5">
            {
                books.map((book)=><Book book={book} key={book.bookId}></Book>)
            }
        </div>
    );
};

export default Books;