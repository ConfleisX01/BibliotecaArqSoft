import { useEffect, useState } from "react";
import { Announcement } from "../../Components/Announcement";
import axios from "axios";
import Card from "../../Components/Card";

export default function BooksList() {
    const [searchText, setSearchText] = useState("")
    const [bookSelected, setBookSelected] = useState("")

    return (
        <>
            <div className="w-full">
                <Announcement
                    text={"¡Descubre nuestra biblioteca digital! Accede a una gran colección de libros para apoyar tus estudios y explorar nuevos temas."}
                />
            </div>
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-8">
                <div className="">
                    <div className="p-2 flex items-center gap-4">
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
                        <Books
                            searchText={searchText}
                            setBookSelected={setBookSelected}
                        />
                    </div>
                </div>
                <div className="p-2">
                    {
                        bookSelected.length > 0 ?
                            <iframe
                                className="w-full h-1/2"
                                src={bookSelected}
                            /> :
                            <div className="flex w-full flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-10 w-28"></div>
                                <div className="skeleton h-10 w-full"></div>
                                <div className="skeleton h-10 w-full"></div>
                            </div>
                    }
                </div>
            </div>
        </>
    );
}

function Books({ searchText, setBookSelected }) {
    const [booksList, setBooksList] = useState([]);

    const getBooksList = () => {
        axios.get('http://localhost:3001/books/getAllBooks')
            .then(function (response) {
                setBooksList(response.data)
            })
            .catch(function (error) {
                console.error("Error al obtener la lista de libros:", error);
            })
    };

    useEffect(() => {
        getBooksList()
    }, [])

    const filteredBooks = booksList.filter((book) =>
        book.book_name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <>
            <div className="grid grid-cols-1 gap-2">
                {
                    filteredBooks.map((book, index) => (
                        <div key={index} className="h-auto">
                            <Card
                                bookTitle={book.book_name}
                                bookAuthor={book.book_author}
                                bookGenre={book.book_genre}
                                bookId={book.book_id}
                                university={book.book_house}
                                pdf={book.book_route}
                                setBookSelected={setBookSelected}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
