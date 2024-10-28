import { useEffect, useState } from "react";
import { Announcement } from "../../Components/Announcement";
import axios from "axios";
import Card from "../../Components/Card";

export default function BooksList() {
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <div className="w-full">
                <Announcement
                    text={"¡Descubre nuestra biblioteca digital! Accede a una gran colección de libros para apoyar tus estudios y explorar nuevos temas."}
                />
            </div>
            <div className="p-2 bg-gray-50 shadow-sm flex items-center gap-4">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Buscar libro"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
            <div className="p-3">
                <Books searchText={searchText} />
            </div>
        </>
    );
}

function Books({ searchText }) {
    const [booksList, setBooksList] = useState([]);

    const getBooksList = () => {
        axios.get('http://localhost:3001/books/list')
            .then(function (response) {
                setBooksList(response.data);
            })
            .catch(function (error) {
                console.error("Error al obtener la lista de libros:", error);
            });
    };

    useEffect(() => {
        getBooksList();
    }, []);

    const filteredBooks = booksList.filter((book) =>
        book.book_name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="h-auto">
                        <Card
                            bookTitle={book.book_name}
                            bookAuthor={book.book_author}
                            bookGenre={book.book_genre}
                            bookId={book.book_id}
                            university={book.book_house}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
