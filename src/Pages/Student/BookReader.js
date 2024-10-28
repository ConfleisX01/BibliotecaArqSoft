import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookReader() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const getBook = () => {
        axios.get(`http://localhost:3001/books/getBook/${id}`)
            .then(function (response) {
                setBook(response.data);
            })
            .catch(function (error) {
                console.error("Error al obtener el libro:", error);
            });
    };

    useEffect(() => {
        getBook();
    }, [id]);

    return (
        <>
            <div className="p-3">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="h-auto lg:col-span-2">
                        {book ? (
                            <iframe
                                src={book[0].book_route}
                                width="100%"
                                height="600px"
                                title="Vista de libro"
                                className="border"
                            />
                        ) : (
                            <div className="skeleton h-32 w-32"></div>
                        )}
                    </div>
                    <div className="h-auto">
                        {book ? (
                            <BookDetails
                                bookTitle={book[0].book_name}
                                bookAuthor={book[0].book_author}
                                bookGenre={book[0].book_genre}
                            />
                        ) : (
                            <div className="skeleton h-32 w-32"></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

function BookDetails({ bookTitle, bookAuthor, bookGenre }) {
    return (
        <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Título del libro</dt>
                    <dd className="text-gray-700 sm:col-span-2">{bookTitle}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Autor</dt>
                    <dd className="text-gray-700 sm:col-span-2">{bookAuthor}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Género</dt>
                    <dd className="text-gray-700 sm:col-span-2">{bookGenre}</dd>
                </div>
            </dl>
        </div>
    );
}
